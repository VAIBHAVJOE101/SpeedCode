import * as api from '../../api/index.js';
import { LOGINWTHOUTTOKEN } from '../../constants/actionTypes';

export const updateProfile = (id, formData, token) => async (dispatch) =>{
    try {
        const data =  await api.updateuser(id, formData, token);
        dispatch({type: LOGINWTHOUTTOKEN, data});
    } catch (error) {
        const data =  error.response.data;
        return data;
    }
}
