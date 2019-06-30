import { ADD_COMMENT } from './types';

export const addComment = (comment) => (dispatch) => {
    dispatch({ type: ADD_COMMENT, payload: {content: comment, date: new Date()} });
} 
