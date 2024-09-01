// Make sure to seed the database before running the tests

require('dotenv').config({ path: '.env.test' });

const request = require('supertest');
const app = require('../index.js');
const mongoose = require('mongoose');

let server;
let token;
let adminToken;
let classId;

beforeAll( (done) => {
    server = app.listen(5001, done);
});

afterAll(async () => {
    await mongoose.connection.close();
    server.close();
});

describe('GET /', () => {
    it('should GET the home page with a cat image', async () => {
        const res = await request(server).get('/');
        expect(res.status).toBe(200);
        expect(res.text).toContain('Hello World');
        expect(res.text).toContain('<img src="');
    });

    it('should return 404 for invalid routes', async () => {
        const res = await request(server).get('/invalid');
        expect(res.status).toBe(404);
    });
});

describe('POST /api/auth/login', () => {
    it('should return 200 and a token when logging in', async () => {
        const res = await request(server)
            .post('/api/auth/login')
            .send({
                email: 'test@gmail.com',
                password: 'thisisatest'
            });
        expect(res.status).toBe(200);
        if (res.status !== 200) console.log(res.body);
        expect(res.body.token).toBeTruthy();
        token = res.body.token;
    });

    it('should return 400 for invalid credentials', async () => {
        const res = await request(server)
            .post('/api/auth/login')
            .send({
                email: 'wrong@gmail.com',
                password: 'wrongpassword'
            });
        expect(res.status).toBe(400);
    });

    it('should return 200 and a token when logging in as admin', async () => {
        const res = await request(server)
            .post('/api/auth/login')
            .send({
                email: 'admin@fighttrack.com',
                password: 'admin'
            });
        expect(res.status).toBe(200);
        expect(res.body.token).toBeTruthy();
        adminToken = res.body.token;
    });
});

describe('GET /api/classes', () => {
    it('should return 200 and an array of classes', async () => {
        const res = await request(server)
            .get('/api/classes')
            .set('Authorization', `Bearer ${token}`);
        expect(res.status).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    it('should return 401 when accessed without a token', async () => {
        const res = await request(server).get('/api/classes');
        expect(res.status).toBe(401);
    });
});

describe('GET /api/bookings', () => {
    it('should return 200 and an array of bookings', async () => {
        const res = await request(server)
            .get('/api/bookings')
            .set('Authorization', `Bearer ${token}`);
        expect(res.status).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    it('should return 401 when accessed without a token', async () => {
        const res = await request(server).get('/api/classes');
        expect(res.status).toBe(401);
    });
});

describe('GET /api/dashboard', () => {
    it('should return 200 and an object with dashboard data', async () => {
        const res = await request(server)
            .get('/api/dashboard')
            .set('Authorization', `Bearer ${token}`);
        expect(res.status).toBe(200);
        expect(res.body).toBeInstanceOf(Object);
    });

    it('should return 401 when accessed without a token', async () => {
        const res = await request(server).get('/api/dashboard');
        expect(res.status).toBe(401);
    });
});

describe('POST /api/classes', () => (
    it('should return 401 when creating a class without admin token', async () => {
        const res = await request(server)
            .post('/api/classes')
            .send({
                name: 'Test Class',
                description: 'This is a test class',
                date: '2021-12-31',
                time: '12:00',
                duration: 60,
                capacity: 10
            });
        expect(res.status).toBe(401);
    }),

    it('should return 201 when creating a class with admin token', async () => {
        const res = await request(server)
            .post('/api/classes')
            .set('Authorization', `Bearer ${adminToken}`)
            .send({
                title: "Test Class",
                description: "This is a test class",
                schedule: {
                    day: "2021-12-31",
                    time: "12:00",
    },
                maxAttendees: "10",
            });
        expect(res.status).toBe(201);
        classId = res.body._id;
    })
));

describe('PUT /api/classes/:id', () => (
    it('should return 401 when updating a class without admin token', async () => {
        const res = await request(server)
            .put(`/api/classes/${classId}`)
            .send({
                title: "Test Class",
                description: "This is a test class",
                schedule: {
                    day: "2021-12-31",
                    time: "12:00",
    },
                maxAttendees: "15",
            });
        expect(res.status).toBe(401);
    }),

    it('should return 200 when updating a class with admin token', async () => {
        const res = await request(server)
            .put(`/api/classes/${classId}`)
            .set('Authorization', `Bearer ${adminToken}`)
            .send({
                title: "Test Class",
                description: "This is a test class",
                schedule: {
                    day: "2021-12-31",
                    time: "12:00",
    },
                maxAttendees: "15",
            });
        expect(res.status).toBe(200);
    })
));

describe('POST /api/bookings/book', () => (
    it('should return 401 when booking a class without a token', async () => {
        const res = await request(server)
            .post(`/api/bookings/book`)
            .send({
                classId: classId
            });
        expect(res.status).toBe(401);
    }),

    it('should return 201 when booking a class with a token', async () => {
        const res = await request(server)
            .post(`/api/bookings/book`)
            .set('Authorization', `Bearer ${token}`)
            .send({
                classId: classId
            });
        expect(res.status).toBe(201);
    })
));

describe('DELETE /api/classes/:id', () => (
    it('should return 401 when deleting a class without admin token', async () => {
        const res = await request(server)
            .delete(`/api/classes/${classId}`);
        expect(res.status).toBe(401);
    }),

    it('should return 200 when deleting a class with admin token', async () => {
        const res = await request(server)
            .delete(`/api/classes/${classId}`)
            .set('Authorization', `Bearer ${adminToken}`);
        expect(res.status).toBe(200);
    })
));

// Add more tests!!