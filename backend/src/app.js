// backend/src/app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const itemRoutes = require('./routes/itemRoutes');  // Import routes

// Load .env based on environment
const envFile = process.env.NODE_ENV === 'test' ? '.env.test' : '.env';  // Use .env.test for tests
dotenv.config({ path: envFile });

const app = express();
app.use(express.json());

// Use itemRoutes for handling item-related requests
app.use('/items', itemRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error('MongoDB connection error:', error));

// Export the app for testing
module.exports = app;
