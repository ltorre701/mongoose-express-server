// models/GroceryItem.js
const mongoose = require("mongoose");
const grocerySchema = new mongoose.Schema({
    item: {
        type: String,
        required: [true, 'item name is required'],
    },
    food_group: {
        type: String,
        enum: ['fruits', 'dairy', 'proteins', 'vegetables', 'nuts']
    },
    price_in_usd: {
        type: Number,
        required: [true, 'Please enter a number for price_in_usd'],
        min: [0, 'Price must be a positive number']
    },
});
module.exports = mongoose.model("GroceryItem", grocerySchema);
