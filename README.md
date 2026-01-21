# Chatify

A modern, real-time chat application built with React and Node.js, featuring secure authentication, instant messaging, and a responsive user interface.

## 🚀 Features

- **Real-time Messaging**: Instant message delivery using Socket.IO
- **User Authentication**: Secure signup/login with JWT tokens and OTP verification
- **Online Status**: See who's online in real-time
- **Image Sharing**: Upload and share images in chats via Cloudinary
- **Profile Pictures**: Custom profile pictures with cloud storage
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Secure Communication**: Protected routes and middleware with Arcjet rate limiting
- **Email Notifications**: Integrated email handling for OTP and welcome emails using RabbitMQ and Nodemailer
- **Sound Effects**: Optional keyboard sound effects
- **State Management**: Efficient state management with Zustand

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
- **Lucide React** - Icon library

### Backend

#### Chat Service

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Socket.IO** - Real-time bidirectional communication
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Cloudinary** - Cloud image storage
- **Arcjet** - Security and rate limiting
- **Redis** - In-memory data structure store for caching
- **RabbitMQ** - Message broker for email queuing

#### Mail Service

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Nodemailer** - Email sending library
- **RabbitMQ** - Message broker for consuming email tasks

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 20.0.0 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance like MongoDB Atlas)
- **Redis** (local or cloud instance)
- **RabbitMQ** (local or cloud instance)
- **Git**

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/redeagle17/chatify.git
   cd chatify
   ```

2. **Install dependencies**

   ```bash
   # Install backend chat-service dependencies
   cd backend/chat-service
   npm install
   cd ../..

   # Install backend mail-service dependencies
   cd backend/mail-service
   npm install
   cd ../..

   # Install frontend dependencies
   cd frontend
   npm install
   cd ..
   ```

3. **Environment Setup**

   Create a `.env` file in the `backend/chat-service` directory:

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

   # Arcjet (for security)
   ARCJET_KEY=your_arcjet_key

   # Redis
   REDIS_HOST=localhost
   REDIS_PORT=6379
   REDIS_PASSWORD=your_redis_password_if_any

   # RabbitMQ
   RABBITMQ_HOST=localhost
   RABBITMQ_PORT=5672
   RABBITMQ_USER=guest
   RABBITMQ_PASSWORD=guest
   ```

   Create a `.env` file in the `backend/mail-service` directory:

   ```env
   # Server Configuration
   PORT=4001

   # RabbitMQ
   RABBITMQ_HOST=localhost
   RABBITMQ_PORT=5672
   RABBITMQ_USER=guest
   RABBITMQ_PASSWORD=guest

   # Email SMTP
   USERNAME=your_email@gmail.com
   PASSWORD=your_app_password
   ```

   > **Note**: Replace all placeholder values with your actual credentials.

## 🚀 Running the Application

### Development Mode

1. **Start the mail service**

   ```bash
   cd backend/mail-service
   npm run dev
   ```

2. **Start the chat service**

   ```bash
   cd backend/chat-service
   npm run dev
   ```

   The backend will run on `http://localhost:4000`

3. **Start the frontend development server**

   ```bash
   cd frontend
   npm run dev
   ```

   The frontend will run on `http://localhost:5173`

### Production Mode

1. **Build the frontend**

   ```bash
   cd frontend
   npm run build
   ```

2. **Start the services**

   Start mail-service and chat-service as above with `npm start` instead of `npm run dev`.

The application will be available at `http://localhost:4000`

## 📡 API Endpoints

### Authentication Routes (`/api/auth`)

- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/verify-otp` - Verify OTP for login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user info

### Message Routes (`/api/messages`)

- `GET /api/messages/contacts` - Get all users for contact list
- `GET /api/messages/chats` - Get users with chat history
- `GET /api/messages/:id` - Get messages with a specific user
- `POST /api/messages/send/:id` - Send a message to a user

### Socket Events

- `connection` - User connects
- `disconnect` - User disconnects
- `getOnlineUsers` - Get list of online users
- `sendMessage` - Send a message
- `newMessage` - Receive a new message

## 🏗 Project Structure

```
chatify/
├── backend/
│   ├── chat-service/
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── lib/
│   │   │   ├── middleware/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   └── server.js
│   │   └── package.json
│   └── mail-service/
│       ├── src/
│       │   ├── emails/
│       │   ├── lib/
│       │   └── server.js
│       └── package.json
├── frontend/
│   ├── public/
│   │   └── sounds/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── vite.config.js
│   └── eslint.config.js
├── README.md
└── .gitignore
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
- [Cloudinary](https://cloudinary.com/) for image storage
- [RabbitMQ](https://www.rabbitmq.com/) for message queuing

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Happy Chatting! 🎉**

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/redeagle17/chatify.git
   cd chatify
   ```

2. **Install dependencies**

   ```bash
   # Install backend chat-service dependencies
   cd backend/chat-service
   npm install
   cd ../..

   # Install backend mail-service dependencies
   cd backend/mail-service
   npm install
   cd ../..

   # Install frontend dependencies
   cd frontend
   npm install
   cd ..
   ```

3. **Environment Setup**

   Create a `.env` file in the `backend/chat-service` directory:

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

   # Arcjet (for security)
   ARCJET_KEY=your_arcjet_key

   # Redis
   REDIS_HOST=localhost
   REDIS_PORT=6379
   REDIS_PASSWORD=your_redis_password_if_any

   # RabbitMQ
   RABBITMQ_HOST=localhost
   RABBITMQ_PORT=5672
   RABBITMQ_USER=guest
   RABBITMQ_PASSWORD=guest
   ```

   Create a `.env` file in the `backend/mail-service` directory:

   ```env
   # Server Configuration
   PORT=4001

   # RabbitMQ
   RABBITMQ_HOST=localhost
   RABBITMQ_PORT=5672
   RABBITMQ_USER=guest
   RABBITMQ_PASSWORD=guest

   # Email SMTP
   USERNAME=your_email@gmail.com
   PASSWORD=your_app_password
   ```

   > **Note**: Replace all placeholder values with your actual credentials.

## 🚀 Running the Application

### Development Mode

1. **Start the mail service**

   ```bash
   cd backend/mail-service
   npm run dev
   ```

2. **Start the chat service**

   ```bash
   cd backend/chat-service
   npm run dev
   ```

   The backend will run on `http://localhost:4000`

3. **Start the frontend development server**

   ```bash
   cd frontend
   npm run dev
   ```

   The frontend will run on `http://localhost:5173`

### Production Mode

1. **Build the frontend**

   ```bash
   cd frontend
   npm run build
   ```

2. **Start the services**

   Start mail-service and chat-service as above with `npm start` instead of `npm run dev`.

The application will be available at `http://localhost:4000`

## 📡 API Endpoints

### Authentication Routes (`/api/auth`)

- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/verify-otp` - Verify OTP for login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user info

### Message Routes (`/api/messages`)

- `GET /api/messages/contacts` - Get all users for contact list
- `GET /api/messages/chats` - Get users with chat history
- `GET /api/messages/:id` - Get messages with a specific user
- `POST /api/messages/send/:id` - Send a message to a user

### Socket Events

- `connection` - User connects
- `disconnect` - User disconnects
- `getOnlineUsers` - Get list of online users
- `sendMessage` - Send a message
- `newMessage` - Receive a new message

## 🏗 Project Structure

```
chatify/
├── backend/
│   ├── chat-service/
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── lib/
│   │   │   ├── middleware/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   └── server.js
│   │   └── package.json
│   └── mail-service/
│       ├── src/
│       │   ├── emails/
│       │   ├── lib/
│       │   └── server.js
│       └── package.json
├── frontend/
│   ├── public/
│   │   └── sounds/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── vite.config.js
│   └── eslint.config.js
├── README.md
└── .gitignore
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
- [Cloudinary](https://cloudinary.com/) for image storage
- [RabbitMQ](https://www.rabbitmq.com/) for message queuing

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Happy Chatting! 🎉**
