import * as api from '../../api/index.js';
import { ALLBLOG, LOGINWTHOUTTOKEN } from '../../constants/actionTypes';

export const  AddBlog = (formData, token) => async (dispatch) =>{
    try {
        const data =  await api.addBlog(formData, token);
        dispatch({type: LOGINWTHOUTTOKEN, data});
    } catch (error) {
        const data =  error.response?.data;
        return data;
    }
}

export const GetBlog = (token) => async (dispatch) =>{
    try {
        const data =  await api.getallBlog(token);
        dispatch({type: ALLBLOG, data});
    } catch (error) {
        const data =  error.response?.data;
        return data;
    }
}

export const getBlogbyid = (id, token) => async (dispatch) =>{
    try {
        const data =  await api.getblogbyid(id , token);
        return {sucess: true,data};
    } catch (error) {
        const data =  error.response?.data;
        return {sucess: false, data};
    }
}

export const deleteblog = (id, token) => async (dispatch) =>{
    try {
        const data =  await api.deleteblog(id , token);
        dispatch({type: LOGINWTHOUTTOKEN, data});
    } catch (error) {
        const data =  error.response?.data;
        return {sucess: false, data};
    }
}

export const Updateblog = (id, formdata, token) => async (dispatch) =>{
    try {
        await api.updateblog(id , formdata, token);
    } catch (error) {
        const data =  error.response?.data;
        return {sucess: false, data};
    }
}
