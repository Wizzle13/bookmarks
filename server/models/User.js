const { Schema, model, trusted } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        firstname:{
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        lastname:{
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true,
            minlength: 5
        },
        bookmarks: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Bookmark'
            }
        ]
    },
    {
        toJSON: {
          virtuals: true
        }
    }
);
module.exports = User;