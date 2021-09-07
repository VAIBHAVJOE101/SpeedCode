import * as api from '../../api/index.js';
import { LOGINWTHOUTTOKEN, GFGdata } from '../../constants/actionTypes';

export const updateGFGdata = (id, formData, token) => async (dispatch) =>{
    try {
        const data =  await api.updateuser(id, formData, token);
        dispatch({type: LOGINWTHOUTTOKEN, data});
    } catch (error) {
        const data =  error.response.data;
        return data;
    }
}

export const GetGfgData = (id, token) => async (dispatch) =>{
    try {
        const data =  await api.getgfgquestion(id, token);
        dispatch({type: GFGdata, data});
    } catch (error) {
        const data =  error.response.data;
        return data;
    }
}