import mongoose from "mongoose";
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
    userID: {
        type: String,
        default: ''
    },
    title: String,
    budgetID: String,
    budgetRef: String,
    public: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
})
module.exports = mongoose.model("budgets", budgetSchema);
