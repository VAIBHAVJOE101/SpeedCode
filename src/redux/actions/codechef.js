import * as api from '../../api/index.js';
import { LOGINWTHOUTTOKEN, CodeChefContent, CodeChefQuestion } from '../../constants/actionTypes';

export const updateCodeChefdata = (id, formData, token) => async (dispatch) =>{
    try {
        const data =  await api.updateuser(id, formData, token);
        dispatch({type: LOGINWTHOUTTOKEN, data});
    } catch (error) {
        const data =  error.response.data;
        return data;
    }
}

export const Getcodechefcontent = (token) => async (dispatch) =>{
    try {
        const data =  await api.getcodechefcontent(token);
        dispatch({type: CodeChefContent, data});
    } catch (error) {
        const data =  error.response.data;
        return data;
    }
}

export const GetcodechefQuestion = (id, formdata, token) => async (dispatch) =>{
    try {
        const data =  await api.getcodechefpagecontent(id, formdata, token);
        dispatch({type: CodeChefQuestion , data});
    } catch (error) {
        const data =  error.response.data;
        return data;
    }
}