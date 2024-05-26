// reportingSystem.js

// Import necessary modules and services
const discordService = require('../services/discordService');
const userModel = require('../models/userModel');

// Function to handle user reporting
const reportUser = async (reporterId, reportedUserId, reason) => {
  try {
    // Check if the reporter exists in the database
    const reporter = await userModel.findById(reporterId);
    if (!reporter) {
      throw new Error('Reporter not found');
    }

    // Check if the reported user exists in the database
    const reportedUser = await userModel.findById(reportedUserId);
    if (!reportedUser) {
      throw new Error('Reported user not found');
    }

    // Send a report message to the Discord server
    const reportMessage = `User ${reporter.username} has reported user ${reportedUser.username} for ${reason}`;
    discordService.sendMessage(reportMessage);

    // Log the report in the database for tracking
    const newReport = {
      reporter: reporterId,
      reportedUser: reportedUserId,
      reason: reason,
      timestamp: Date.now(),
    };
    // Save the report to the database
    await userModel.createReport(newReport);

    return 'User successfully reported';
  } catch (error) {
    throw new Error(`Error reporting user: ${error.message}`);
  }
};

module.exports = {
  reportUser,
};