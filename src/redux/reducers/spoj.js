import {SpojContent, SpojQuestion } from '../../constants/actionTypes';

const initialstate = {
    spojcontent: null,
    spojquestion: null,
}

const authReducer = (state = initialstate,action) => {
    switch(action.type) {
        case SpojContent:
            return {...state, spojcontent: action.data};
        case SpojQuestion:
            return {...state, spojquestion: action.data};
        default:
            return state;
    }
}

export default authReducer;