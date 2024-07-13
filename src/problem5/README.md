# Express TypeScript CRUD API

This project is a simple backend server built with ExpressJS and TypeScript. It provides a set of CRUD (Create, Read, Update, Delete) interfaces to interact with a resource. The backend service is connected to a simple MongoDB database for data persistence.

## Features:

- Create User
- List all User
- List a single user based on user id
- Update User Information
- Deletet User

## Prerequisites:
- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

## Getting Started:

Let follow this to run on the local machine

### Installation:

1. Clone the repository:
    ```bash
    git clone https://github.com/nguyenquocviet2007/code-challenge.git
    cd code-challenge
    ```
2. Install the dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3. Configuration:
    In the .env file, use should input your own information. For example:

    ```dotenv
    PORT_DEV=your-port
    DB_HOST_DEV=your-host
    DB_PORT_DEV=your-port
    DB_NAME_DEV=your-database-name
    ```
4. Running the Application:
    To start the server, run:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The server will start on `http://localhost:your-port`

5. Set-up database:
    **For Window OS:** [Window](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)
    **For Linux OS:** [Linux](https://www.mongodb.com/docs/manual/administration/install-on-linux/)
    **For Mac OS:** [MacOS](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)
