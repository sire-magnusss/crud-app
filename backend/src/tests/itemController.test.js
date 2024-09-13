// backend/src/tests/itemController.test.js
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Item = require('../models/itemModel');

// Only connect to MongoDB if not already connected
beforeAll(async () => {
    const url = `mongodb://127.0.0.1:27017/jestTestDB`;  // Use a separate test DB
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    }
});

// Clear the database after each test
afterEach(async () => {
    await Item.deleteMany();
});

// Disconnect Mongoose after all tests
afterAll(async () => {
    await mongoose.connection.close();
});

describe('Item CRUD Operations', () => {
    it('should create a new item', async () => {
        const res = await request(app)
            .post('/items')
            .send({
                name: 'Test Item',
                description: 'This is a test item',
            });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
        expect(res.body.name).toBe('Test Item');
    });

    it('should fetch all items', async () => {
        await Item.create({ name: 'Item 1', description: 'Description 1' });
        const res = await request(app).get('/items');

        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBe(1);
        expect(res.body[0].name).toBe('Item 1');
    });

    it('should update an existing item', async () => {
        const item = await Item.create({ name: 'Old Item', description: 'Old Description' });
        const res = await request(app)
            .put(`/items/${item._id}`)
            .send({ name: 'Updated Item', description: 'Updated Description' });

        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toBe('Updated Item');
    });

    it('should delete an item', async () => {
        const item = await Item.create({ name: 'To Be Deleted', description: 'To Be Deleted' });
        const res = await request(app).delete(`/items/${item._id}`);

        expect(res.statusCode).toEqual(204);
        const deletedItem = await Item.findById(item._id);
        expect(deletedItem).toBeNull();
    });
});
