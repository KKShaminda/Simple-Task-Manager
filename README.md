# Simple Task Manager

A full-stack web application for managing daily tasks. Users can create, view, update, and delete tasks. Each task includes a title, description, status (Pending or Completed), and created date.

## Features
- Add, edit, and delete tasks
- Mark tasks as Pending or Completed
- Responsive, modern UI with Bootstrap
- Edit tasks in a modal overlay with live status updates
- Data stored in MongoDB

## Tech Stack
- **Frontend:** React, Bootstrap, React Router
- **Backend:** Node.js, Express, Mongoose, MongoDB

## Folder Structure
```
Simple-Task-Manager/
├── backend/
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   ├── .env
│   ├── config/
│   ├── controllers/
│   ├── models/
│   └── routes/
└── frontend/
    ├── package.json
    ├── index.html
    ├── vite.config.js
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── components/
        │   ├── TaskForm.jsx
        │   ├── TaskList.jsx
        │   └── TaskEdit.jsx
        └── services/
            └── api.jsx
```

## Getting Started

### Prerequisites
- Node.js and npm
- MongoDB database (local or Atlas)

### Backend Setup
1. Navigate to the `backend` folder:
   cd backend

2. Install dependencies:
   npm install

3. Create a `.env` file with your MongoDB URI:
   PORT=5000
   MONGO_URI=your_mongodb_connection_string

4. Start the backend server:
   npm start

   The backend runs on `http://localhost:5000`.

### Frontend Setup
1. Open a new terminal and navigate to the `frontend` folder:
   cd frontend

2. Install dependencies:
   npm install

3. Start the frontend development server:
   npm start

   The frontend runs on `http://localhost:5173` (or as shown in your terminal).

## Usage
- Open the frontend in your browser.
- Add, edit, or delete tasks.
- Click "Edit" to open a modal overlay and update task details or status.
- All changes are saved to MongoDB and reflected in the UI.

## Customization
- Update Bootstrap styles in `src/App.css` or `index.css`.
- Modify backend logic in `controllers/taskController.js`.

## License
This project is for educational purposes.
