// controllers/userController.js
const User = require('../models/User');
const UserSubscription = require('../models/UserSubscription');
const jwt = require('jsonwebtoken');
const jwtSecretKey = '987654321123456789zantrik';

exports.registerUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.login = async (req, res) => {
  try {
    // Validate user credentials
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } }); // Specify where clause properly

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.user_id }, jwtSecretKey, { expiresIn: '24h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getUserData = async (req, res) => {
    try {
        // Extract token from the request headers
        const token = req.headers.authorization.split(' ')[1]; // Assuming the token is provided in the "Authorization" header in the format "Bearer <token>"
        // Verify and decode the token to extract the user ID
        const decodedToken = jwt.verify(token, jwtSecretKey);
        const userId = decodedToken.userId;
        
        // Fetch user data from the database based on the user ID
        const user = await User.findByPk(userId);
        console.log(user)

        // Return user data as a response
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


// Controller function to create a new user-subscription association
exports.createUserSubscription = async (req, res) => {
  try {
      const newUserSubscription = await UserSubscription.create(req.body);
      res.status(201).json(newUserSubscription);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function to retrieve all user-subscription associations
exports.getAllUserSubscriptions = async (req, res) => {
  try {
      const userSubscriptions = await UserSubscription.findAll();
      res.json(userSubscriptions);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function to retrieve a user-subscription association by ID
exports.getUserSubscriptionById = async (req, res) => {
  try {
      const { id } = req.params;
      const userSubscription = await UserSubscription.findByPk(id);
      if (!userSubscription) {
          return res.status(404).json({ message: 'UserSubscription not found' });
      }
      res.json(userSubscription);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function to update a user-subscription association by ID
exports.updateUserSubscription = async (req, res) => {
  try {
      const { id } = req.params;
      const userSubscription = await UserSubscription.findByPk(id);
      if (!userSubscription) {
          return res.status(404).json({ message: 'UserSubscription not found' });
      }
      await userSubscription.update(req.body);
      res.json(userSubscription);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function to delete a user-subscription association by ID
exports.deleteUserSubscription = async (req, res) => {
  try {
      const { id } = req.params;
      const userSubscription = await UserSubscription.findByPk(id);
      if (!userSubscription) {
          return res.status(404).json({ message: 'UserSubscription not found' });
      }
      await userSubscription.destroy();
      res.json({ message: 'UserSubscription deleted successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
};