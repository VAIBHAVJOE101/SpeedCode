
import {ALLBLOG} from '../../constants/actionTypes';

const initialstate = {
    blogs: null
}

const authReducer = (state = initialstate,action) => {
    switch(action.type) {
        case ALLBLOG:
            return {...state, blogs: action.data};
        default:
            return state;
    }
}

export default authReducer;