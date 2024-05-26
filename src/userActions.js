// File: userActions.js

const { discordService } = require('../services/discordService');
const { userModel } = require('../models/userModel');
const { warningModel } = require('../models/warningModel');

// Function to warn a user
const warnUser = async (userId, reason) => {
  try {
    const user = await userModel.getUserById(userId);
    
    if (!user) {
      throw new Error('User not found');
    }

    await discordService.sendDM(userId, `You have been warned for: ${reason}`);
    await warningModel.createWarning(userId, reason);

    return 'User warned successfully';
  } catch (error) {
    throw new Error(`Failed to warn user: ${error.message}`);
  }
};

module.exports = { warnUser };