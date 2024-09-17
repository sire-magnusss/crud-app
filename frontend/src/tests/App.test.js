// frontend/src/tests/App.test.js
const { test, expect } = require('@playwright/test');

test('should add a new item', async ({ page }) => {
    await page.goto('http://localhost:3000');  // Make sure the frontend is running

    // Wait until the form is fully rendered
    await page.waitForLoadState('networkidle');

    // Pause the test to inspect the page manually
    await page.pause();

    // Check the form fields
    const nameField = await page.locator('input[name="name"]');
    const descriptionField = await page.locator('input[name="description"]');

    // Log the visibility of fields
    console.log('Name field is visible:', await nameField.isVisible());
    console.log('Description field is visible:', await descriptionField.isVisible());

    // Fill the form and add the item
    await nameField.fill('Test Item');
    await descriptionField.fill('Test Description');
    await page.click('button:has-text("Add Item")');

    // Verify that the item is added
    const newItem = await page.locator('text=Test Item');
    await expect(newItem).toBeVisible();
});

test('should delete an item', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Wait for the delete button to be visible
    await page.waitForSelector('button:has-text("Delete")');

    // Assuming the item exists from the previous test
    await page.click('button:has-text("Delete")');

    // Verify that the item is no longer visible
    const deletedItem = await page.locator('text=Test Item');
    await expect(deletedItem).not.toBeVisible();
});
