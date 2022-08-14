const { Schema, model } = require('mongoose');

const bookmarkSchema = new Schema(
    {
        siteName: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        website: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        favicon: {
            type: String,
            required: false,
            unique: false,
            trim: true
        },
        target: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        catagory: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Catagoty'
            }
        ]
    },
    {
        toJSON: {
          virtuals: true
        }
    }
);

module.exports = Bookmark;