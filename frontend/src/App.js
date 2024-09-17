// src/App.js
import React, { useState, useEffect } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

import './styles.css';  // Import the custom CSS

const App = () => {
    const [items, setItems] = useState([]);

    // Fetch items from the backend when the component mounts
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('http://localhost:5000/items');
                const data = await response.json();
                setItems(data);  // Set the fetched items to the state
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };
        fetchItems();
    }, []);

    // Function to add a new item
    const addItem = async (item) => {
        try {
            const response = await fetch('http://localhost:5000/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),  // Send the item data as JSON
            });

            if (!response.ok) {
                throw new Error('Failed to add item');
            }

            const newItem = await response.json();
            setItems([...items, newItem]);  // Update the state with the new item
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    // Function to delete an item
    const deleteItem = async (index) => {
        const itemToDelete = items[index];  // Get the item from the array
        try {
            await fetch(`http://localhost:5000/items/${itemToDelete._id}`, {  // Use the correct _id
                method: 'DELETE',
            });
            setItems(items.filter((_, i) => i !== index));  // Remove the item from the state
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    // Function to update an item
    const updateItem = async (index, updatedItem) => {
        const itemToUpdate = items[index];
        try {
            await fetch(`http://localhost:5000/items/${itemToUpdate._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedItem),
            });
            const newItems = [...items];
            newItems[index] = updatedItem;  // Update the state with the edited item
            setItems(newItems);
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    return (
        <div className="container">
            <h1>Item Management</h1>
            <ItemForm addItem={addItem} />
            <ItemList items={items} removeItem={deleteItem} updateItem={updateItem} />  {/* Pass updateItem */}
        </div>
    );
};

export default App;
