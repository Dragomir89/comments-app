import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, GET_COMMENTS } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case GET_COMMENTS:
            return [...action.payload]
        case ADD_COMMENT:
            return [action.payload, ...state];
        case EDIT_COMMENT:
            state.find((c, i) => {
                if (c._id === action.payload._id) {
                    state[i].content = action.payload.content;
                }
            });
            return [...state];
        default:
            return state;
    }
}
