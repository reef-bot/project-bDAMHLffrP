// userWarning.js

// Dependencies
const userModel = require('../models/userModel');
const warningModel = require('../models/warningModel');
const discordService = require('../services/discordService');

// Function to issue a warning to a user
const issueWarning = async (userId, reason) => {
  try {
    // Check if the user exists
    const user = await userModel.getUserById(userId);
    
    if (user) {
      // Create a warning record
      const warning = {
        userId: userId,
        reason: reason,
        timestamp: new Date()
      };
      
      // Save the warning to the database
      await warningModel.createWarning(warning);
      
      // Send a warning message to the user on Discord
      discordService.sendPrivateMessage(userId, `You have been warned for: ${reason}`);
      
      return { success: true, message: 'Warning issued successfully' };
    } else {
      return { success: false, message: 'User not found' };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: 'An error occurred while issuing the warning' };
  }
};

module.exports = {
  issueWarning
};