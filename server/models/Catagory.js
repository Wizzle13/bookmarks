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

const Catagory = model('Catagory', catagorySchema);
module.exports = Catagory;