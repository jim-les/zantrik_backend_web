// Endpoint to initiate OTP generation and send to the user's mobile
// app.post('/send-otp', (req, res) => {
//   const { phoneNumber } = req.body;

//   // Create a verification request
//   twilioClient.verify
//     .services(verifySid)
//     .verifications.create({
//       to: `+${phoneNumber}`,
//       channel: 'sms',
//     })
//     .then((verification) => {
//       console.log(verification.status);
//       res.json({ success: true, message: 'OTP sent successfully.' });
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).json({ success: false, message: 'Error sending OTP.' });
//     });
// });

// // Endpoint to verify the received OTP
// app.post('/verify-otp', (req, res) => {
//   const { phoneNumber, otp } = req.body;

//   // Check the received OTP
//   twilioClient.verify
//     .services(verifySid)
//     .verificationChecks.create({
//       to: `+${phoneNumber}`,
//       code: otp,
//     })
//     .then((verification_check) => {
//       console.log(verification_check.status);
//       if (verification_check.status === 'approved') {
//         res.json({ success: true, message: 'OTP verified successfully.' });
//       } else {
//         res.status(400).json({ success: false, message: 'Incorrect OTP.' });
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).json({ success: false, message: 'Error verifying OTP.' });
//     });
// });