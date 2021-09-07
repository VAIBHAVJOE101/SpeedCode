import {CodeChefContent, CodeChefQuestion } from '../../constants/actionTypes';

const initialstate = {
    codechefcontent: null,
    codechefquestion: null,
}

const authReducer = (state = initialstate,action) => {
    switch(action.type) {
        case CodeChefContent:
            return {...state, codechefcontent: action.data};
        case CodeChefQuestion :
            return {...state, codechefquestion: action.data};
        default:
            return state;
    }
}

export default authReducer;