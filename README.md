# R1

# R2: Dataflow Diagram

## Level 0

![level0dfd](https://github.com/user-attachments/assets/8b6a4b73-f3c5-4232-8a7b-8b8e2e29d1cd)

## Level 1

![level1dfd](https://github.com/user-attachments/assets/0fdf2e45-797a-4e07-a084-92fd0f6d979f)

### Entities:

- Member: Users who sign up, book classes, make payments, and view their dashboard.
- Owner: Manages classes and performs administrative tasks.

### Processes:

- User Authentication: Handles user signup, login, and profile management.
- Class Management: Manages class schedules and availability.
- Class Booking: Allows users to book classes based on availability.
- Payment Processing: Handles payment for different packages.
- User Dashboard: Allows users to view their class bookings, payment status, and manage their profiles.

### Database:

- Member Database: Stores member details.
- Class Schedule Database: Stores class schedules and details.
- Booking Database: Stores class bookings made by members.
- Payment Database: Stores payment information for memberships and any day passes

# R3: Application Architecture Diagram

![application_diagram](https://github.com/user-attachments/assets/5a6864c9-7073-4832-8754-0f28bbaa274a)

In the front end of our project React will handle the UI rendering while HTML, CSS and Javascript will be the foundational languages used to structure the front end web application. Vite will also be used to streamline development to get our front functioning as efficiently as possible. Netlify will be used to host our front end for deployment.

As the user interacts with the front end it will make HTTP requests to the back end of our application which in turn will reply with an API response.

Node js and Express js will handle the incoming HTTP requests from the front end and properly route them to the appropriate controller or middleware, and generate the corresponding API responses. Express.js will be responsible for setting up the routes, handling middleware functions, and managing the application's logic, while Node.js will handle the server-side execution and processing of these requests. This setup ensures efficient communication between the front end and back end, allowing for a seamless user experience. Render will be used as the hosting platform for our back end as it offers hosting for dynamic web applications that fit our project. Mongoose may also be used to define schemas and models for our MongoDB database.

In our database, MongoDB will be responsible for storing and managing application data, including user information. To host this database we've opted for Atlas, a fully managed cloud service tailored specifically for MongoDB that ensure reliability.

# R5: Wireframes

## Homepage (Mobile)

![HomeMobile](https://github.com/user-attachments/assets/5656cea8-2f7c-4ba5-9e7c-d35c6824ae63)

## Homepage (Laptop & Tablet)

![HomeLaptopTablet](https://github.com/user-attachments/assets/e786f427-9c5a-4fb2-a496-eabef57459d0)

## Facilities (Mobile)

![FacilitiesMobile](https://github.com/user-attachments/assets/0ae31874-0349-4e33-967e-026a74091d25)

## Facilities (Laptop & Tablet)

![FacilitiesLaptopTablet](https://github.com/user-attachments/assets/208ed05e-ca83-42e0-84c1-124ec239a969)

## Members (Mobile)

![MembersMobile](https://github.com/user-attachments/assets/6f474242-438a-4a20-8558-bb0873d67ca8)

## Members (Laptop & Tablet)

![MembersLaptopTablet](https://github.com/user-attachments/assets/c12c6bef-40ec-47fa-b969-7df4e2b9e9f5)

## Contact (Mobile)

![ContactMobile](https://github.com/user-attachments/assets/049c0c93-45a6-440c-923a-b68a74c64685)

## Contact (Laptop & Tablet)

![ContactLaptopTablet](https://github.com/user-attachments/assets/d7e44dc4-e157-4a47-96ff-24a72e4fe8ad)

# R6: Project Management

## Project Overview

![Project0Overview](https://github.com/user-attachments/assets/17752eb1-3ae9-4dce-bee1-454a763555fb)

## Project Setup

![Project1Setup](https://github.com/user-attachments/assets/6f5d4b98-ab0a-4088-817b-c28e33f462fe)

## Dataflow Diagram

![Project2DataflowDiagram](https://github.com/user-attachments/assets/9faf5f2e-391d-43c0-9480-2c95531a740a)

## Architecture Diagram

![Project3ArchitectureDiagram](https://github.com/user-attachments/assets/4aff473e-044d-4722-84a2-9529103eccd9)

## User Stories

![Project4UserStories](https://github.com/user-attachments/assets/07cac055-c6cc-45c1-8443-000279cd638a)

## Wireframe

![Project5Wireframe](https://github.com/user-attachments/assets/da4d4923-ed25-4e90-bf98-2db9b9418ba0)

## Technical Setup

![Project6TechnicalSetup](https://github.com/user-attachments/assets/6d8cae28-45b1-4916-b129-b95be2bb1cd4)

## Website Design

![Project7WebsiteDesign](https://github.com/user-attachments/assets/64be061f-8c3f-4644-a11b-b0ac0b110894)

## Frontend Development

![Project8FrontendDevelopment](https://github.com/user-attachments/assets/c9a8c2ad-be51-4ccf-bd61-2954cb879a4e)

## Backend Development

![Project9BackendDevelopment](https://github.com/user-attachments/assets/02cc5ca1-f338-4d64-ba71-550e9149a847)

## Integration

![Project10Integration](https://github.com/user-attachments/assets/b9090d2d-ea45-4bab-b641-a5367b42ce34)

## Dashboard Development

![Project11DashboardDevelopment](https://github.com/user-attachments/assets/e5d3edc1-9ddb-4ec0-81d6-7ca9d8664c10)

## Testing

![Project12Testing](https://github.com/user-attachments/assets/0be58ed6-1bdb-4d8d-b4e0-f5897367d1bc)

## Deployment

![Project13Deployment](https://github.com/user-attachments/assets/5b439ded-0eeb-46c2-ad36-26d3bb802751)

## Documentation

![Project14Documentation](https://github.com/user-attachments/assets/08ccdd3a-6827-4b22-9b41-d7a9cb45ed93)


