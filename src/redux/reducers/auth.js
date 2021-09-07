import { LOGIN, LOGOUT, GETUSER, LOGINWTHOUTTOKEN } from '../../constants/actionTypes';

const initialstate = {
    user: null,
    token: null
}

const authReducer = (state = initialstate,action) => {
    switch(action.type) {
        case LOGIN:
            localStorage.setItem('authToken', JSON.stringify({ ...action?.data }));
            const userdata = action.data
            localStorage.setItem('Token', JSON.stringify({ token: userdata?.data?.token}));
            
            return {...state, user: action.data, token: userdata?.data?.token};

        case LOGINWTHOUTTOKEN:
            localStorage.setItem('authToken', JSON.stringify({ ...action?.data }));
            return {...state, user: action.data};

        case GETUSER:
            const data = JSON.parse(localStorage.getItem('authToken'))
            const token = JSON.parse(localStorage.getItem('Token'))
            return {...state, user: data, token: token?.token};

        case LOGOUT:
            localStorage.clear();
            return { ...state, user: null, token: null };
        
        default:
            return state;
    }
}

export default authReducer;