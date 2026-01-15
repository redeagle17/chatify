# Chatify

A modern, real-time chat application built with React and Node.js, featuring secure authentication, instant messaging, and a responsive user interface.

## 🚀 Features

- **Real-time Messaging**: Instant message delivery using Socket.IO
- **User Authentication**: Secure signup/login with JWT tokens
- **Online Status**: See who's online in real-time
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Secure Communication**: Protected routes and middleware
- **Email Notifications**: Integrated email handling for user interactions
- **Cloud Storage**: Image uploads via Cloudinary
- **Rate Limiting**: Arcjet integration for security

## 🛠 Tech Stack

### Frontend

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **Zustand** - Lightweight state management
- **Axios** - HTTP client for API calls
- **Socket.IO Client** - Real-time communication
- **React Router** - Client-side routing
- **React Hot Toast** - Toast notifications

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Socket.IO** - Real-time bidirectional communication
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Resend** - Email service
- **Cloudinary** - Cloud image storage
- **Arcjet** - Security and rate limiting

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 20.0.0 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance like MongoDB Atlas)
- **Git**

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/redeagle17/chatify.git
   cd chatify
   ```

2. **Install dependencies**

   ```bash
   # Install root dependencies
   npm install

   # Install backend dependencies
   npm install --prefix backend

   # Install frontend dependencies
   npm install --prefix frontend
   ```

3. **Environment Setup**

   Create a `.env` file in the `backend` directory:

   ```env
   # Server Configuration
   PORT=4000
   NODE_ENV=development

   # Database
   MONGODB_URI=mongodb://localhost:27017/chatify

   # JWT
   JWT_SECRET=your_super_secret_jwt_key_here

   # Client URL
   CLIENT_URL=http://localhost:5173

   # Cloudinary (for image uploads)
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret

   # Resend (for emails)
   RESEND_API_KEY=your_resend_api_key

   # Arcjet (for security)
   ARCJET_KEY=your_arcjet_key
   ```

   > **Note**: Replace all placeholder values with your actual credentials.

## 🚀 Running the Application

### Development Mode

1. **Start the backend server**

   ```bash
   npm run start --prefix backend
   ```

   The backend will run on `http://localhost:4000`

2. **Start the frontend development server**
   ```bash
   npm run dev --prefix frontend
   ```
   The frontend will run on `http://localhost:5173`

### Production Mode

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

The application will be available at `http://localhost:4000`

## 📡 API Endpoints

### Authentication Routes (`/api/auth`)

- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user info

### Message Routes (`/api/messages`)

- `GET /api/messages/users` - Get all users for chat
- `GET /api/messages/:id` - Get messages with a specific user
- `POST /api/messages/send/:id` - Send a message to a user

### Socket Events

- `connection` - User connects
- `disconnect` - User disconnects
- `getOnlineUsers` - Get list of online users



## 🏗 Project Structure

```
chatify/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── emails/
│   │   ├── lib/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   └── store/
│   ├── index.html
│   └── package.json
├── package.json
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Socket.IO](https://socket.io/) for real-time communication
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React](https://reactjs.org/) for the frontend framework
- [Express.js](https://expressjs.com/) for the backend framework

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Happy Chatting! 🎉**
