# Railway Management System

A comprehensive web-based railway management system built with Node.js, Express, MongoDB, and modern frontend technologies. This system provides complete functionality for train booking, user management, and administrative operations.

## 🚂 Features

### User Features
- **User Registration & Authentication**: Secure user registration and login system
- **Train Booking**: Book train tickets with passenger details
- **Booking Management**: View and manage personal bookings
- **User Dashboard**: Personalized dashboard with booking statistics
- **Responsive Design**: Mobile-friendly interface

### Admin Features
- **Train Management**: Add, edit, and delete trains
- **Booking Overview**: View all bookings across the system
- **User Management**: Monitor user activities and statistics
- **Analytics Dashboard**: Revenue and booking analytics
- **Admin Authentication**: Secure admin-only access

### Technical Features
- **JWT Authentication**: Secure token-based authentication
- **RESTful API**: Well-structured API endpoints
- **Database Integration**: MongoDB with Mongoose ODM
- **Error Handling**: Comprehensive error handling and validation
- **Security**: Password hashing, input validation, and CORS protection

## 🛠️ Technology Stack

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: Object Data Modeling (ODM)
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT authentication
- **body-parser**: Request body parsing

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients and animations
- **JavaScript (ES6+)**: Modern JavaScript features
- **Bootstrap 5**: Responsive UI framework
- **Font Awesome**: Icon library

## 📁 Project Structure

```
RailwayProj/
├── public/                 # Static files
│   ├── js/                # JavaScript files
│   │   ├── auth.js        # Authentication functions
│   │   ├── booking.js     # Booking functionality
│   │   ├── admin.js       # Admin dashboard functions
│   │   └── userHome.js    # User home functions
│   ├── index.html         # Landing page
│   ├── login.html         # Login page
│   ├── register.html      # Registration page
│   ├── book.html          # Booking page
│   ├── admin.html         # Admin dashboard
│   ├── userHome.html      # User dashboard
│   ├── style.css          # Global styles
│   └── images/            # Image assets
├── routes/                # API routes
│   ├── auth.js           # Authentication routes
│   ├── train.js          # Train management routes
│   └── booking.js        # Booking routes
├── models/               # Database models
│   ├── User.js          # User model
│   ├── Train.js         # Train model
│   └── Booking.js       # Booking model
├── middleware/           # Custom middleware
│   └── auth.js          # Authentication middleware
├── server.js            # Main server file
├── package.json         # Dependencies and scripts
├── seeder.js           # Database seeder
└── README.md           # Project documentation
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd RailwayProj
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://127.0.0.1:27017/railway
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   NODE_ENV=development
   ```

4. **Start MongoDB**
   Make sure MongoDB is running on your system:
   ```bash
   mongod
   ```

5. **Seed the database (optional)**
   ```bash
   npm run seed
   ```

6. **Start the server**
   ```bash
   npm start
   ```

7. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

## 📚 API Documentation

### Authentication Endpoints

#### POST `/api/auth/register`
Register a new user
```json
{
  "username": "john_doe",
  "password": "password123",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890"
}
```

#### POST `/api/auth/login`
Login user
```json
{
  "username": "john_doe",
  "password": "password123"
}
```

### Train Endpoints

#### GET `/api/trains`
Get all available trains

#### POST `/api/trains/add` (Admin only)
Add a new train
```json
{
  "name": "Express 123",
  "from": "Mumbai",
  "to": "Delhi",
  "seats": 100,
  "price": 1500
}
```

#### DELETE `/api/trains/:id` (Admin only)
Delete a train

### Booking Endpoints

#### POST `/api/bookings`
Create a new booking
```json
{
  "trainId": "train_id_here",
  "seatsBooked": 2,
  "seatType": "ac",
  "passengers": [
    {
      "name": "John Doe",
      "age": 25,
      "gender": "male",
      "berth": "lower"
    }
  ],
  "paymentMethod": "credit_card"
}
```

#### GET `/api/bookings/user/:userId`
Get user's bookings

#### GET `/api/bookings` (Admin only)
Get all bookings

## 🔐 Security Features

- **Password Hashing**: All passwords are hashed using bcrypt
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Comprehensive validation on all inputs
- **CORS Protection**: Cross-origin resource sharing protection
- **Role-based Access**: Admin and user role separation
- **Environment Variables**: Sensitive data stored in environment variables

## 🎨 UI/UX Features

- **Modern Design**: Clean and professional interface
- **Responsive Layout**: Works on all device sizes
- **Smooth Animations**: CSS animations and transitions
- **Loading States**: Visual feedback for user actions
- **Error Handling**: User-friendly error messages
- **Success Notifications**: Confirmation messages for actions

## 🧪 Testing

### Manual Testing Checklist

- [ ] User registration
- [ ] User login/logout
- [ ] Admin login
- [ ] Train booking process
- [ ] Booking validation
- [ ] Admin train management
- [ ] Admin booking overview
- [ ] Responsive design on mobile
- [ ] Form validation
- [ ] Error handling

## 🚀 Deployment

### Production Deployment

1. **Set up production environment variables**
   ```env
   NODE_ENV=production
   PORT=3000
   MONGODB_URI=your-production-mongodb-uri
   JWT_SECRET=your-production-jwt-secret
   ```

2. **Install production dependencies**
   ```bash
   npm install --production
   ```

3. **Start the server**
   ```bash
   npm start
   ```

### Docker Deployment (Optional)

Create a `Dockerfile`:
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Railway Management Team** - Initial work

## 🙏 Acknowledgments

- Bootstrap for the responsive UI framework
- Font Awesome for the icon library
- MongoDB for the database solution
- Express.js community for the web framework

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔄 Version History

- **v1.0.0** - Initial release with core functionality
- **v1.1.0** - Added external JavaScript files and enhanced security
- **v1.2.0** - Improved UI/UX and added comprehensive documentation

---

**Note**: This is a demonstration project. For production use, ensure proper security measures, environment configuration, and thorough testing. 