# R1

## Purpose, Features and Target Audience

The purpose of this web application is to streamline the booking and management process for a boxing gym, providing an efficient and user-friendly platform for both clients and the gym owner. The app aims to enhance the client experience by allowing them to easily create accounts, manage their profiles, and book classes like Cardi Box, Fighters Academy, Open Gym, and Kids Boxing. Clients will be able to search for classes that fit their schedules, check availability, and manage their bookings with ease.

For the gym owner, the app offers a comprehensive dashboard to monitor class enrollments, track attendance, manage payments, and edit class details. This feature-rich platform will also facilitate the collection of payments for various membership packages, ensuring a seamless process for both short-term and long-term clients. By automating these processes, the app will free up valuable time for the gym owner, allowing them to focus more on delivering high-quality training to their clients while improving operational efficiency and client satisfaction.

## Tech Stack


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

# R4: User Stories

### User Story 1: Boxing Instructor

Name: Josh 
Age: 28 

About:
Josh is a boxing instructor passionate about fitness and teaching others. He runs a local boxing gym, offering classes like Cardio Boxing, Fighters Academy, Open Gym, and Kids Boxing. Josh is committed to providing the best experience for his clients but finds it challenging to manage all administrative tasks while focusing on training his clients.

Needs:
- Easily manage class schedules, enrollments, and payments.
- Monitor class attendance.

Frustrations:
- Struggles with balancing administrative tasks and training responsibilities between classes.
- Finds it a hassle to track payments and attendance manually.

User Stories:
- *As a user*, I want to see how many people have enrolled in each class so that I can prepare the right resources and plan my sessions effectively.
- *As a user*, I want to update class schedules and availability easily so that clients can see when classes are available each week.
- *As a user*, I want to track whether attendees have paid for classes so that I can manage payments efficiently without interrupting training sessions.
- *As a user*, I want to sign up new members to the gym directly through the web app so that I can streamline the onboarding process and grow my client base.


### User Story 2: Boxing Class Member

Name: Claire 
Age: 22

About:
Claire is a university student who stays active through boxing classes. With her busy study schedule, Claire needs a flexible and convenient way to book her boxing classes, track her progress, and manage her membership.

Needs:
- See when classes are available to plan her schedule.
- Manage her class enrollments easily.
- Search for classes available at specific times and days.
- Pay for her membership securely and conveniently.
- Receive notifications about class times and reminders.

Frustrations:
- Finds it hard to locate classes that fit into her busy schedule.
- Tends to forget when she has booked a class for.

User Stories:
- *As a user*, I want to see when classes are available so that I can plan my schedule around them.
- *As a user*, I want to manage my class enrollments through the app so that I can easily adjust my bookings if my plans change.
- *As a user*, I want to pay for my membership directly through the app so that I can handle all my gym-related tasks in one place.
- *As a user*, I want to receive notifications about class times and reminders so that I don't miss any sessions.



# R5: Wireframes

The wireframe was created using [Figma](https://www.figma.com/). These are the initial wireframes that will be used as the base for the website. These are not final, and further additions, omissions, and alterations, which might include additional pages, is very likely to be adopted in order to facilitate a functional and user-friendly website. Some items in the wireframe are coloured RED. This is to indicate that the items are buttons that will lead to either another page or a document that can be downloaded. Four (4) pages are created as a basis, namely: Homepage, Facilities (which will include overview of all the gym facilities and classes), Members (which will include all membership and individual class pass purchase information), and Contact (indicated as Location in the wireframe as the gym might have multiple locations, this page will include the gym address and an enquiry form). For the initial plan, two (2) screen sizes have been accomodated: Mobile Devices (up to 768px wide) and Tablet & Laptop (above 768px wide). The Tablet layout will be differentiated from the Laptop layout by adjusting the margin. As done with the page inclusion, this is subject to future adjustments once the actual design progresses.

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

Link to the [Implementation Plan](https://github.com/users/FabSugandhi/projects/4/views/1), created using GitHub Project.

Below are the screenshots of the project overview, as well as the individual items that will be involved in the whole project. This will be updated regularly, and progress will be monitored to ensure that the project will be completed in the required timeline. 

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


