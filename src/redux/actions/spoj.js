import * as api from '../../api/index.js';
import { LOGINWTHOUTTOKEN, SpojContent, SpojQuestion } from '../../constants/actionTypes';

export const updateSpojdata = (id, formData, token) => async (dispatch) =>{
    try {
        const data =  await api.updateuser(id, formData, token);
        dispatch({type: LOGINWTHOUTTOKEN, data});
    } catch (error) {
        const data =  error.response.data;
        return data;
    }
}

export const GetSpojcontent = (token) => async (dispatch) =>{
    try {
        const data =  await api.getspojcontent(token);
        dispatch({type: SpojContent, data});
    } catch (error) {
        const data =  error.response.data;
        return data;
    }
}

export const GetSpojQuestion = (id, formdata, token) => async (dispatch) =>{
    try {
        const data =  await api.getspojpagecontent(id, formdata, token);
        dispatch({type: SpojQuestion, data});
    } catch (error) {
        const data =  error.response.data;
        return data;
    }
}