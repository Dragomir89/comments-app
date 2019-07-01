import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from './types';

export const addComment = (comment) => (dispatch) => {
    dispatch({ type: ADD_COMMENT, payload: { content: comment, date: new Date() } });
};

export const editComment = (commentDetails) => (dispatch) => {
    dispatch({ type: EDIT_COMMENT, payload: commentDetails });
};

export const deleteComment = (id) => (dispatch) => {
    dispatch({ type: DELETE_COMMENT, payload: id });
}
