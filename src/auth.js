// auth.js

const { UserModel } = require('../models/userModel');
const { generateToken } = require('../utils/authMiddleware');

// Function to handle user authentication
const authenticateUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username, password });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user.id);
    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { authenticateUser };