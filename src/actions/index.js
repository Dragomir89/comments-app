import api from '../apis/local'

import { GET_COMMENTS, ADD_COMMENT, EDIT_COMMENT } from './types';

export const getComments = () => async (dispatch) => {
    const res = await api.get('/get-comments');
    dispatch({type: GET_COMMENTS, payload: res.data});
}

export const addComment = (content) => async (dispatch) => {
    const comment = { content }
    const res = await api.post('/add-comment', comment);
    dispatch({ type: ADD_COMMENT, payload: res.data });
};

export const editComment = (commentDetails) => async (dispatch) => {
    const res = await api.post('/edit-comment', commentDetails);
    dispatch({ type: EDIT_COMMENT, payload: res.data});
};

export const deleteComment = (id) => async (dispatch) => {
    const res = await api.post(`/delete/${id}`);
    dispatch({ type: GET_COMMENTS, payload: res.data });
}
