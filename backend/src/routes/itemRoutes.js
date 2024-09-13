// backend/src/routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Define routes
router.post('/', itemController.createItem);    // Create a new item
router.get('/', itemController.getAllItems);    // Get all items
router.put('/:id', itemController.updateItem);  // Update an item
router.delete('/:id', itemController.deleteItem); // Delete an item

module.exports = router;
