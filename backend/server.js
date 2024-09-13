const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');  // Add this line to require the CORS package
const itemRoutes = require('./src/routes/itemRoutes');  // Ensure this path is correct

dotenv.config();

const app = express();
app.use(cors());  // Enable CORS for all requests
app.use(express.json());

// Use the item routes for handling /items requests
app.use('/items', itemRoutes);  // This sets the base path for all item-related routes

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
