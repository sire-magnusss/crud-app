// backend/src/tests/itemModel.test.js
const Item = require('../models/itemModel');


describe('Item Model Test', () => {
    it('should create a new item', () => {
        const item = new Item({
            name: 'Test Item',
            description: 'This is a test description',
        });

        expect(item.name).toBe('Test Item');
        expect(item.description).toBe('This is a test description');
    });
});
