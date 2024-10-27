
const express = require('express');
const router = express.Router();
const User = require('../models/UserModel');
const {jwtAuthMiddleware, generateToken} = require('../Middlewares/Auth');

// POST route to add a person
router.post('/signup', async (req, res) =>{
    try{
        const data = req.body // Assuming the request body contains the User data

        // Check if there is already an admin user
        const adminUser = await User.findOne({ role: 'admin' });
        if (data.role === 'admin' && adminUser) {
            return res.status(400).json({ error: 'Admin user already exists' });
        }

            // Check if a user with the same email already exists
            const existingUser = await User.findOne({ email: data.email });
            if (existingUser) {
                return res.status(400).json({ error: 'User with the same email already exists' });
            }
    
            // Check if a user with the same mobile number already exists
            const existingMobile = await User.findOne({ mobile: data.mobile });
            if (existingMobile) {
                return res.status(400).json({ error: 'User with the same mobile number already exists' });
            }
    
        // Create a new User document using the Mongoose model
        const newUser = new User(data);

        // Save the new user to the database
        const response = await newUser.save();
        console.log('data saved');

        const payload = {
            id: response.id
        }
        const token = generateToken(payload);

        res.status(200).json({response: response, token: token});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

// Login Route
router.post('/login', async(req, res) => {
    try {
        // Validate request body
        if (!req.body) {
            return res.status(400).json({ error: 'Request body is missing' });
        }

        const { email, password } = req.body;

        // Validate required fields
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        // Find user by email
        const user = await User.findOne({ email });

        // Validate user and password
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ error: 'Invalid Email or Password' });
        }

        // Generate token
        const payload = { id: user.id };
        const token = generateToken(payload);

        // Send token as response
        return res.json({ token, role: user.role });
    } catch (err) {
        // Log error and send 500 status
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Profile route
router.get('/profile', jwtAuthMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select('-role -password');;
        res.status(200).json({ user });
    } catch (err) {
        // console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.put('/profile/password', jwtAuthMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;
        const { currentPassword, newPassword } = req.body;

        if (!currentPassword || !newPassword) {
            return res.status(400).json({ error: 'Both currentPassword and newPassword are required' });
        }

        const user = await User.findById(userId);

        if (!user || !(await user.comparePassword(currentPassword))) {
            return res.status(401).json({ error: 'Invalid current password' });
        }

        user.password = newPassword;
        await user.save();

        // console.log('password updated');
        res.status(200).json({ message: 'Password updated' });
    } catch (err) {
        // console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update Profile Route
router.put('/profile/update/:id',jwtAuthMiddleware,  async (req, res) => {
    try {
        const userId = req.params.id;  // Get the user ID from the URL parameters
        const { name, email, mobile, image, address, dateOfBirth, gender } = req.body;

        // Validate request body
        if (!name || !email || !mobile) {
            return res.status(400).json({ error: 'Name, email, and mobile are required' });
        }

        // Check if the email is already in use by another user
        const existingUser = await User.findOne({ email });
        if (existingUser && existingUser._id.toString() !== userId) {
            return res.status(400).json({ error: 'Email is already in use by another user' });
        }

        // Update the user's profile
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
                name,
                email,
                mobile,
                image,
                address,
                dateOfBirth,
                gender
            },
            { new: true }
        ).select('-password'); // Exclude the password field from the returned user object

        res.status(200).json({ user: updatedUser });
        console.log("profile Updated")
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;