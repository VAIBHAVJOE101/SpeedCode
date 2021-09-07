import {MESSAGERESET, MESSAGESET } from '../../constants/actionTypes';
import initialstate from '../store/state';

const messageReducer = (state = initialstate ,action) => {
    switch(action.type) {

        case MESSAGESET:
            return {...state, message: action.data}


        case MESSAGERESET:
            state.message = null; 
            return state;
            
        default:
            return state;
    }
}

export default messageReducer;