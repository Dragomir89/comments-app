import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from '../actions/types';

export default (state = [], action) => {

    switch (action.type) {
        case ADD_COMMENT:
            return [action.payload, ...state];
        case EDIT_COMMENT:
            const { id, content } = action.payload;
            state[id].content = content;
            return [...state];
        case DELETE_COMMENT:
            state.splice(action.payload, 1);
            return [...state];
        default:
            return state;
    }
}
