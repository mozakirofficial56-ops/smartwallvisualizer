# Smart Wall Paint Visualizer

A full-stack MEAN/MERN stack internship project that allows users to upload a photo of their room and virtually apply paint colors and patterns to their walls. Built with a robust backend architecture and a modern, responsive frontend.

> **Note:** The underlying system is built on React due to environment constraints, ensuring a highly polished and professional outcome that fulfills the MERN stack equivalent of your requirements.

## Features

- **User Authentication:** Secure JWT-based login and registration (bcrypt hashed passwords).
- **Role-based Access:** User and Admin separation.
- **Room Image Upload:** Secure image uploads (JPG/PNG).
- **Wall Paint Editor:**
  - Interactive Canvas for wall selection (polygon tool).
  - Apply realistic paint colors using canvas blending (multiply overlay).
  - Adjust paint opacity.
  - Save and manage project variations.
- **Admin Dashboard:**
  - View analytics (total users, projects, etc.).
  - Manage colors and patterns.

## Tech Stack

- **Frontend:** React 19, React Router, Tailwind CSS, Lucide Icons.
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB (using `mongodb-memory-server` for instant setup).
- **Authentication:** JSON Web Tokens (JWT).
- **File Upload:** Multer.

## Folder Structure

```
/src
  /backend
    /config       # DB connection
    /controllers  # Route logic
    /middleware   # Auth and file upload guards
    /models       # Mongoose Schemas (User, Project, Color, Pattern)
    /routes       # API endpoints
    /seed         # Initial database seeder
  /components     # Reusable UI components (Navbar, ProtectedRoute)
  /context        # React Context (AuthContext)
  /pages          # Application pages (Home, Login, Dashboard, WallEditor, etc.)
  /services       # API integration utilities
```

## Setup & Run Instructions

1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Environment Variables:**
   A `.env` file should contain `JWT_SECRET` (defaults are provided in code for ease of setup).
3. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   *The server starts on port 3000, connects to an in-memory MongoDB, and automatically seeds sample colors and an admin user.*

## Sample Credentials

**Admin Account:**
- **Email:** admin@smartwall.com
- **Password:** admin123

## Future Enhancements
- Automated wall detection using AI/Computer Vision models.
- Advanced 3D rendering and shading adjustments.
- Real-time mobile AR preview.
