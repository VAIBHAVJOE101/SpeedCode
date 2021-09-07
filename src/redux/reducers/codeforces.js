import { CodeForcesContent, CodeforcesQuestion } from '../../constants/actionTypes';

const initialstate = {
    codeforcescontent: null,
    codeforcesquestion: null,
}

const authReducer = (state = initialstate,action) => {
    switch(action.type) {
        case CodeForcesContent:
            return {...state, codeforcescontent: action.data};
        case CodeforcesQuestion:
            return {...state, codeforcesquestion: action.data};
        default:
            return state;
    }
}

export default authReducer;