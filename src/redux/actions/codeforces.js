import * as api from '../../api/index.js';
import { LOGINWTHOUTTOKEN, CodeForcesContent, CodeforcesQuestion } from '../../constants/actionTypes';

export const updateCodeForcesdata = (id, formData, token) => async (dispatch) =>{
    try {
        const data =  await api.updateuser(id, formData, token);
        dispatch({type: LOGINWTHOUTTOKEN, data});
    } catch (error) {
        const data =  error.response.data;
        return data;
    }
}

export const Getcodeforcescontent = (token) => async (dispatch) =>{
    try {
        const data =  await api.getcodeforcescontent(token);
        dispatch({type: CodeForcesContent, data});
    } catch (error) {
        const data =  error.response.data;
        return data;
    }
}

export const GetcodeforcesQuestion = (id, formdata, token) => async (dispatch) =>{
    try {
        const data =  await api.getcodeforcespagecontent(id, formdata, token);
        dispatch({type: CodeforcesQuestion, data});
    } catch (error) {
        const data =  error.response.data;
        return data;
    }
}