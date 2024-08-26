# Digikey RSC

Welcome to the Digikey RSC project! This repository contains both a backend server built with Node.js and Express, and a frontend application built with React. The project demonstrates a simple user management system where users can be added and viewed via a web interface.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [API Endpoints](#api-endpoints)


## Requirements

Before you start, ensure you have the following software installed on your system:

- **Node.js**: A JavaScript runtime used to build and run the backend server. Here you can find a quick tutorial on how to install it on Windodws [Tutorial](https://www.youtube.com/watch?v=1Rmb6bkGpG0)
- **npm**: Node Package Manager, which comes with Node.js and is used to manage dependencies.



## Installation

### 1. Clone the Repository

Clone this repository to your local machine:

`git clone https://github.com/fabian-guevara/digikey-rsc.git
cd digikey-rsc`

### 2. Install Dependencies

#### Backend

Navigate to the `backend` directory and install the required dependencies:

`cd backend
npm install`

#### Frontend

Navigate to the `frontend` directory and install the required dependencies:

`cd ../frontend
npm install`

## Usage

### Backend

#### Starting the Backend Server

1. Navigate to the `backend` directory:

`cd backend`

2. Start the server:

`npm start`

   The backend server will run on [http://localhost:3000](http://localhost:5000) by default. Ensure that MongoDB is running if you're using it for data storage.

#### API Endpoints

- **GET** `/users`
  - Fetches a list of all users.
  - Returns: JSON array of user objects.

- **POST** `/users`
  - Adds a new user.
  - Request Body: `{ "name": "string", "age": number, "address": "string or array", "userLogins": [ { "id": "ObjectId", "username": "string" } ] }`
  - Returns: JSON object of the newly created user.

### Frontend

#### Starting the React Application

1. Navigate to the `frontend` directory:

`cd frontend`

2. Start the React application:

`npm start`

   The frontend application will run on [http://localhost:3000](http://localhost:3000) by default. It will interact with the backend server running on [http://localhost:5000](http://localhost:5000).

## Starting the whole application

1. Run npm install on the root directory

  `npm install`

2. Run the whole application, this will seed the database 
  
   
`npm run start:all`

#### Features

- **User List**: Displays a list of users fetched from the backend.
- **Add User**: A form to add new users to the backend.

## API Endpoints

Here’s a brief overview of the API endpoints provided by the backend:

- **GET /users**: Fetch all users.
  - **Response**: `200 OK` with a JSON array of user objects.

- **POST /users**: Add a new user.
  - **Request Body**: `{ "name": "string", "age": number, "address": "string or array", "userLogins": [ { "id": "ObjectId", "username": "string" } ] }`
  - **Response**: `201 Created` with a JSON object of the newly added user.


---

Feel free to reach out if you have any questions or issues with the setup. Happy coding!
