// src/ItemList.js
import React, { useState } from 'react';

const ItemList = ({ items, removeItem, updateItem }) => {
    const [editingIndex, setEditingIndex] = useState(null);  // Track which item is being edited
    const [editedItem, setEditedItem] = useState({ name: '', description: '' });

    const startEditing = (index) => {
        setEditingIndex(index);
        setEditedItem(items[index]);  // Set the current values to be edited
    };

    const handleEditChange = (e) => {
        setEditedItem({
            ...editedItem,
            [e.target.name]: e.target.value,
        });
    };

    const submitEdit = () => {
        updateItem(editingIndex, editedItem);  // Call the updateItem function to save changes
        setEditingIndex(null);  // Exit editing mode
    };

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {editingIndex === index ? (
                        <>
                            <input
                                type="text"
                                name="name"
                                value={editedItem.name}
                                onChange={handleEditChange}
                            />
                            <input
                                type="text"
                                name="description"
                                value={editedItem.description}
                                onChange={handleEditChange}
                            />
                            <button onClick={submitEdit}>Save</button>
                            <button onClick={() => setEditingIndex(null)}>Cancel</button>
                        </>
                    ) : (
                        <>
                            <strong>{item.name}:</strong> {item.description}
                            <button onClick={() => startEditing(index)}>Edit</button>
                            <button onClick={() => removeItem(index)}>Delete</button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default ItemList;
