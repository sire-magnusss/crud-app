# CRUD Application

This is a simple CRUD (Create, Read, Update, Delete) application built using Node.js, Express, MongoDB, and React.js. The project is containerized with Docker and can be easily set up and run locally or in any Docker-supported environment. This app allows users to manage a list of items and provides basic operations like adding, editing, and deleting items.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Testing Instructions](#testing-instructions)
- [Deployment](#deployment)
- [Known Issues or Future Enhancements](#known-issues-or-future-enhancements)

---

## Project Overview
This project is designed to demonstrate a full-stack web application that performs CRUD operations. The frontend is built using React.js, while the backend is powered by Node.js, Express, and MongoDB. The entire stack is containerized using Docker and managed with Docker Compose.

---

## Technologies Used
- **Node.js**: Backend JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for data storage.
- **React.js**: Frontend framework for building user interfaces.
- **Docker**: Containerization of both backend and frontend.
- **Docker Compose**: To manage multi-container Docker applications.
- **Jest**: Unit testing for backend.
- **Playwright**: End-to-end testing for frontend.

---

## Features
- **Create, Read, Update, and Delete items** in a list.
- Responsive user interface with form validation.
- Fully containerized backend, frontend, and MongoDB database.
- Unit and end-to-end tests for both backend and frontend.
- Easy deployment via Docker.

---

## Setup Instructions

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/download/)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Cloning the Repository
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/crud-app.git
   cd crud-app

### Installing Dependencies
Install dependencies for both the backend and frontend.

1. Backend


```bash


cd backend
npm install

```

2. Frontend

```bash

cd ../frontend
npm install

```

### Running the Application
Running with Docker Compose
The easiest way to run the application is using Docker Compose.

1. From the root of the project, build and start the containers:
```bash
docker-compose up --build
```

2. Once the containers are running, you can access the application:

Frontend: http://localhost:3000


Backend API: http://localhost:5000/items

3. To stop the application, run:
```bash
docker-compose down
```

### Running Locally (Without Docker)
Alternatively, you can run the backend and frontend separately.

1. Backend:

Navigate to the backend directory

```bash
cd backend
```

Start the backend server:
```bash
npm start

```

2. Frontend

Navigate to the frontend directory:
```bash
cd frontend
```

Start the React app:
```bash
npm start
```

### Environment Variables
The following environment variables need to be set in the .env file for both local development and Docker containers.

 ##### Backend .env
```bash
MONGODB_URI=mongodb://mongo:27017/crudapp  # For Docker
# or
MONGODB_URI=mongodb://localhost:27017/crudapp  # For local development
```

#### Frontend
No environment variables are needed for the frontend by default.

### Testing Instructions
1. #### Backend Tests (Jest)
   Backend unit tests are written using Jest and can be run as follows:

Navigate to the backend directory:
```bash
cd backend
```

Run Jest tests:
```bash
npm test
```

Jest will run all unit tests for the backend, including testing CRUD operations with MongoDB.

2. #### Frontend End-to-End Tests (Playwright)
   End-to-end tests for the frontend are written using Playwright.

Navigate to the frontend directory:
```bash
cd frontend
```
Run Playwright tests:
```bash
npm run test:e2e
```

This will run Playwright’s browser-based tests, simulating user actions like adding, updating, and deleting items.

### Deployment
#### Docker Deployment
This application is fully containerized and can be deployed easily using Docker. To deploy it on a cloud platform that supports Docker, follow these steps:

Ensure that Docker is installed on the server or cloud platform.
Clone the repository on the server:

```bash
git clone https://github.com/sire-magnusss/crud-app.git
cd crud-app
```

Build and start the containers:
```bash
docker-compose up --build -d
```

The application will be accessible on the appropriate IP and port (e.g., http://your-server-ip:3000).

### Known Issues or Future Enhancements
Playwright Testing: Playwright tests for adding items have been skipped due to timing issues during automated tests and there appears to be a mimatch in attributes even though it was checked multiple times, the deleting one worked.


### Future Enhancements:
Add pagination for large datasets.
Implement user authentication for securing the application.
Improve the UI with better styling and mobile responsiveness