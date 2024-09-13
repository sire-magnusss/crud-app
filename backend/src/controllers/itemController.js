// backend/src/controllers/itemController.js
const Item = require('../models/itemModel');

// Create a new item
exports.createItem = async (req, res) => {
    try {
        const item = new Item(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create item' });
    }
};

// Get all items
exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch items' });
    }
};

// Update an item
exports.updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedItem = await Item.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update item' });
    }
};

// Delete an item
exports.deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Item.findByIdAndDelete(id);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete item' });
    }
};
