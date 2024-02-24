// index.js
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const cors = require('cors'); // Import the cors package

const app = express();
const PORT = process.env.PORT || 3001;

// Use body-parser middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// // Include routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const orderRoutes = require('./routes/orderRoutes');
// const vehicleRoutes = require('./routes/vehicleRoutes');
const driverRoutes = require('./routes/driverRoutes');
const { specs, swaggerUi } = require('./swagger');
const authMiddleware = require('./middleware/authMiddleware');
const userSubscriptionRoutes = require('./routes/userSubscriptionRoutes');
const garageRoutes = require('./routes/garageRoutes');
const garageServicesRoutes = require('./routes/garageServicesRoutes');

// // Middleware
app.use(express.json());

const User = require('./models/User'); // Adjust the path as per your file structure


// // Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/subscriptions', subscriptionRoutes);
app.use('/api/orders', orderRoutes);
// app.use('/api/vehicles', vehicleRoutes);
app.use('/api/drivers', driverRoutes);
app.use('/api/user-subscriptions', userSubscriptionRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api', garageRoutes);
app.use('/api', garageServicesRoutes);


app.get('/api/data', authMiddleware.verifyToken, (req, res) => {
  // This route is protected, only accessible with a valid token
  res.json({ message: 'Protected data', userId: req.userId });
});

const apiListRouter = require('./routes/apiList');

// Register the API list route
app.use('/api-list', apiListRouter);

/// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});