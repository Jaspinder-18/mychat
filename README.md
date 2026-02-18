# SimpleConnect - Private Chat Application

SimpleConnect is a full-stack MERN application for private, real-time messaging.

## Tech Stack

- **Backend:** Node.js, Express.js, MongoDB, Socket.io
- **Frontend:** React.js, Tailwind CSS, Vite
- **Authentication:** JWT, bcryptjs

## Features

- User Registration & Login
- Secure Authentication with JWT
- Real-time Messaging with Socket.io
- Friend Request System
- Online/Offline Status
- Message History & Deletion (One-sided)
- Responsive Modern UI with Dark/Light Mode support (system preference)

## Prerequisites

- Node.js installed
- MongoDB installed and running locally on port 27017

## Setup Instructions

### Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```
   The backend server will run on `http://localhost:5000`.

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend application will be available at the URL shown in the terminal (usually `http://localhost:5173`).

## Environment Variables

### Backend (.env)

```
MONGO_URI=mongodb://localhost:27017/simpleconnect
JWT_SECRET=supersecretkey_simple_connect_2024
PORT=5000
```

## Folder Structure

```
/backend
  /config         # Database configuration
  /controllers    # Business logic
  /middleware     # Auth and error handling
  /models         # Mongoose models
  /routes         # API routes
  server.js       # Entry point
  
/frontend
  /src
    /components   # Reusable components
    /context      # Context API for state management
    /pages        # Application pages
    App.jsx       # Main App component
    main.jsx      # Entry point
```

## Usage

1. Register a new account.
2. Login with your credentials.
3. Search for other users by email and send friend requests.
4. Once accepted, select a friend from the sidebar to start chatting in real-time.
