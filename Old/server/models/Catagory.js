const { Schema, model } = require('mongoose');

const catagorySchema = new Schema(
    {
        catagoryName: {
            type: String,
            required: true,
            unique: false,
            trim: true
        }
    }
);

const Catagory = model('Catagory', catagorySchema);
module.exports = Catagory;