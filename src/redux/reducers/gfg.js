import {GFGdata } from '../../constants/actionTypes';

const initialstate = {
    gfgdata: null
}

const authReducer = (state = initialstate,action) => {
    switch(action.type) {
        case GFGdata:
            return {...state, gfgdata: action.data};
        default:
            return state;
    }
}

export default authReducer;