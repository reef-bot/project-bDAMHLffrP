// database.js

const mongoose = require('mongoose');

// MongoDB database connection string
const dbURI = 'mongodb://localhost:27017/discordBotDB';

// Connect to MongoDB database
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Check for successful MongoDB connection
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Check for MongoDB connection error
mongoose.connection.on('error', (err) => {
  console.log('MongoDB connection error:', err);
});

// Export the MongoDB connection
module.exports = mongoose;