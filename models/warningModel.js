warningModel.js:

// Import necessary dependencies
const mongoose = require('mongoose');

// Define the schema for the warning model
const warningSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true
  },
  serverID: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

// Create the warning model based on the schema
const Warning = mongoose.model('Warning', warningSchema);

// Export the warning model
module.exports = Warning;