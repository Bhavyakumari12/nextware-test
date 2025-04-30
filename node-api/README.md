# Task App API

## Requirements

- Node.js (>= 14.x)
- npm (>= 6.x)
- MongoDB Credentials

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Bhavyakumari12/nextware-test.git
   cd node-api
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:


   ```env
   PORT=3000
   MONGO_USERNAME=bhavyasha85
   MONGO_PASSWORD=Yb510iR9EOn3noWi
   MONGO_URL=cluster0.mhyiu.mongodb.net
   MONGO_DB=task-management
   ```

## Running the Application

1. Start the application:

   ```sh
   npm run dev
   ```

2. The API will be available at `http://localhost:3000`.

## Environment Variables

- `PORT`: The port on which the server will run.
- `MONGO_USERNAME`: The username for your MongoDB cloud instance.
- `MONGO_PASSWORD`: The password for your MongoDB cloud instance.
- `MONGO_URL`: The connection string for your MongoDB cloud instance.
- `MONGO_DB`: The database name for your MongoDB cloud instance.

## API Documentation

### Endpoints

#### Task

- **POST /register**

  - Description: Create a new task
  - Request Body:
    ```json
    {
      "name": "Bhavya Kumari",
      "email": "bhavyasha85@gmail.com",
      "password": "Reena14@",
      "age": 25,
      "dob": "11/20/2000"
    }
    ```
  - Response:
    ```json
    {
      "_id": "string",
      "name": "string",
      "email": "string",
      "password": "string",
      "age": "date",
      "dob": "date"
    }
    ```

- **POST /login**

  - Description: login and validate user
  - Request Body:
    ```json
    {
      "email": "bhavyasha85@gmail.com",
      "password": "Reena14@"
    }
    ```
  - Response:
    ```json
    {
      "_id": "string",
      "name": "string",
      "email": "string",
      "password": "string",
      "age": "date",
      "dob": "date",
      "otp": "string"
    }
    ```

- **POST /verify-otp**

  - Description: otp verification
  - Response:
    ```json
    {
    "email":"bhavyasha85@gmail.com",
    "otp":"968088"
    }
    ```
- **DELETE /delete-account**
  - Description: Delete user account
  - Response:
    ```json
    {
      "message": "user deleted successfully"
    }
    ```
