// src/ItemForm.js
import React, { useState } from 'react';

const ItemForm = ({ addItem }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !description) return;

        // Pass the new item to the parent component (App)
        addItem({ name, description });

        // Clear the form fields
        setName('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Item Name:</label>
                <input
                    type="text"
                    name="name"  // Add the name attribute
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Description:</label>
                <input
                    type="text"
                    name="description"  // Add the name attribute
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button type="submit">Add Item</button>
        </form>
    );
};

export default ItemForm;
