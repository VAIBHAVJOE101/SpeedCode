import * as api from '../../api/index.js';
import { ALLPLAYLIST, LOGINWTHOUTTOKEN } from '../../constants/actionTypes';

export const Getallplaylist = (token) => async (dispatch) =>{
    try {
        const data =  await api.getallPlaylist(token);
        dispatch({type: ALLPLAYLIST, data});
    } catch (error) {
        const data =  error.response.data;
        return data;
    }
}


export const GetPlaylistVedio = (id, token) => async (dispatch) =>{
        try {
            const data =  await api.getplaylistvedios(id, token);
            return {success: true, data}
        } catch (error) {
            const data =  error.response.data;
            return {success: false, data};
        }
}


export const CheckPlaylist = (formdata, token) => async (dispatch) =>{
    try {
        const data =  await api.vediomark(formdata, token);
        dispatch({type: LOGINWTHOUTTOKEN, data});
    } catch (error) {
        const data =  error.response.data;
        return {success: false, data};
    }
}

export const UncheckPlaylist = (formdata, token) => async (dispatch) =>{
    try {
        const data =  await api.vediounmark(formdata, token);
        dispatch({type: LOGINWTHOUTTOKEN, data});
    } catch (error) {
        const data =  error.response.data;
        return {success: false, data};
    }
}

export const GetVedioDetail  = (id, token) => async (dispatch) =>{
    try {
        const data =  await api.getvediobyid(id, token);
        return {success: true, data}
    } catch (error) {
        const data =  error.response.data;
        return {success: false, data};
    }
}
