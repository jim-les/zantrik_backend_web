const jwt = require('jsonwebtoken');
const twilio = require('twilio');

// Store generated OTPs temporarily (ideally, you'd use a more secure storage for production)
const otpStore = {};
const twilioClient = twilio("ACb3b6a03473262d98b13561c930567eea", "46f61e637a1af5c8f4f8f650c65d78d3");
const twilioPhoneNumber = '+254113159363'; // Replace this with your Twilio phone number

const sendOTP = (req, res) => {
    const { phoneNumber } = req.body;

    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // Store OTP for verification
    otpStore[phoneNumber] = otp;

    // Send OTP via Twilio SMS
    twilioClient.messages.create({
        body: `Your OTP is ${otp}`,
        from: twilioPhoneNumber,
        to: phoneNumber
    })
    
    .then(message => {
        console.log('OTP sent:', message.sid);
        res.status(200).json({ message: 'OTP sent successfully' });
    })
    .catch(error => {
        console.error('Error sending OTP:', error);
        res.status(500).json({ message: 'Failed to send OTP' });
    });
};


const verifyOTP = (req, res) => {
    const { phoneNumber, otp } = req.body;
    const storedOTP = otpStore[phoneNumber];

    if (!storedOTP || storedOTP !== otp) {
        res.status(401).json({ message: 'Invalid OTP' });
    } else {
        res.status(200).json({ message: 'OTP verification successful' });
    }
};

module.exports = { sendOTP, verifyOTP };
