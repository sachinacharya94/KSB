const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        trim: true,
        required: true,
    }

}, { timestamps: true })


module.exports = mongoose.models.Category || mongoose.model("Category", categorySchema);