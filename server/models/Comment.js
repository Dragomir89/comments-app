const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    content: { type: String, required: true },
    date: { type: Date, default: Date.now }
});



mongoose.model('comment', commentSchema);
