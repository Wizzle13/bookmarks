const { Schema, model } = require('mongoose');

const catagorySchema = new Schema(
    {
        catagoryName: {
            type: String,
            required: true,
            unique: false,
            trim: truex
        }
    }
)

module.exports = Catagory;