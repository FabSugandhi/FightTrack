const request = require('supertest');
const app = require('../index.js');
const mongoose = require('mongoose');

let server;
let token;

beforeAll((done) => {
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
        expect(res.body.token).toBeTruthy();
        token = res.body.token;
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
});

describe('GET /api/bookings', () => {
    it('should return 200 and an array of bookings', async () => {
        const res = await request(server)
            .get('/api/bookings')
            .set('Authorization', `Bearer ${token}`);
        expect(res.status).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
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
    })
));

// Add more tests!!