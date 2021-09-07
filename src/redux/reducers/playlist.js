import {ALLPLAYLIST } from '../../constants/actionTypes';

const initialstate = {
    allPlaylist: null,
}

const authReducer = (state = initialstate,action) => {
    switch(action.type) {
        case ALLPLAYLIST:
            return {...state, allPlaylist: action.data};
        default:
            return state;
    }
}

export default authReducer;