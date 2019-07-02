const mongoose = require('mongoose')
const Comment = mongoose.model('comment')

async function getComments (req, res) {
    try {
        const comments = await Comment.find().sort('-date');;
        res.send(comments);
    } catch (error) {
        res.status(400).send(error);
    }
}

async function addComment (req, res) {

    try {
        const { content } = req.body;
        const comment = await new Comment({ content }).save();
        res.send(comment);
    } catch (error) {
        res.status(400).send(error);
    }
}

async function editComment (req, res) {
    const { id, content } = req.body;
    try {
        await Comment.findByIdAndUpdate(id, {content});
        const updatedComment = await Comment.findById(id);
        res.send(updatedComment);
    } catch (error) {
        res.status(400).send(error);
    }
}

async function deleteComment (req, res) {
    try {
        await Comment.deleteOne({ _id: req.params.id });
        const comments = await Comment.find().sort('-date');
        res.send(comments);

    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    getComments,
    addComment,
    deleteComment,
    editComment
}