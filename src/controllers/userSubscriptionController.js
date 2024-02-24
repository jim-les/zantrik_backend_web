const jwt = require('jsonwebtoken');
const UserSubscription = require('../models/UserSubscription');
const Subscription = require('../models/Subscription');
const jwtSecretKey = '987654321123456789zantrik';

// Function to verify JWT token
const verifyToken = (token) => {
    try {
        return jwt.verify(token, jwtSecretKey);
    } catch (error) {
        return null;
    }
};

// Controller function to create a new user subscription
exports.createUserSubscription = async (req, res) => {
    const token = req.headers.authorization; // Extract token from headers
    console.log(token)
    const decodedToken = verifyToken(token); // Verify token
        console.log(decodedToken);
    if (!decodedToken) {
        console.log("unauthrised");
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const { userId } = decodedToken; // Extract user ID from token
        const { subscriptionId } = req.body; // Extract subscription ID from request body
        console.log(userId)
        console.log(subscriptionId)
        // // Create user subscription
        const userSubscription = await UserSubscription.create({
            UserUserId: userId,
            SubscriptionSubscriptionId: subscriptionId
        });

        res.status(201).json(userSubscription);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


exports.getUserSubscriptions = async (req, res) => {
    try {
        const token = req.headers.authorization; // Extract token from headers
        const decodedToken = verifyToken(token); // Verify token
        console.log(token)

        if (!decodedToken) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const { userId } = decodedToken; // Extract user ID from token

        // Query the database to get all user subscriptions
        const userSubscriptions = await UserSubscription.findAll({
            where: { UserUserId: userId }, // Filter by user ID
            include: [Subscription] // Assuming you have a model named Subscription
        });

        console.log(userSubscriptions); // Log the user subscriptions to the console for debugging purposes
        res.status(200).json(userSubscriptions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};