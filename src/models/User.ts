import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userID: {
        type: String,
        default: ''
    },
    userType: {
        type: String,
        default: 'user',
    },
    status: {
        type: Boolean,
        default: true,
    },
    name: String,
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
})
exports.user = userSchema;
module.exports = mongoose.model("users", userSchema);
