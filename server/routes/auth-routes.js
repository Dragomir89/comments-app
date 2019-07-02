const commentsService = require('../services/comments-service');

module.exports = (app) => {
    app.get('/get-comments', commentsService.getComments);
    app.post('/add-comment', commentsService.addComment);
    app.post('/delete/:id', commentsService.deleteComment);
    app.post('/edit-comment', commentsService.editComment);
}
