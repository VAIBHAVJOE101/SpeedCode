import * as api from '../../api/index.js';
import { LOGIN } from '../../constants/actionTypes';


export const Register = (formData) => async (dispatch) => {
    try {
        const data = await api.register(formData);
        return {data, success: true};
    } catch (error) {
        const data =  error.response.data;
        return {data, success: false};
    }
}


export const VerifyRegistration = (token) => async (dispatch) => {
    try {
        const data = await api.verifyregistration(token);
        return {data, success: true};

    } catch (error) {
        const data =  error.response.data;
        return {data, success: false};
    }
}


export const Verificationresend = (formData) => async (dispatch) => {
    try {
        const data = await api.verificationresend(formData);
        return data;
    } catch (error) {
        const data =  error.response.data;
        return {data, success: false};
    }
}


export const login = (formData, router) => async (dispatch) =>{
    try {
        const data =  await api.login(formData);
        dispatch({type: LOGIN, data});
        router.push('/home');
    } catch (error) {
        const data =  error.response.data;
        return data;
    }
}



export const RecoverPassword = (formData) => async (dispatch) =>{
    try {
        const data =  await api.recoverpassword(formData);
        return {data, success: true};
    } catch (error) {
        const data =  error.response.data;
        return {data, success: false};
    }
}


export const PasswordReseted = (formData, token) => async (dispatch) =>{
    try {
        const data =  await api.passwordreset(formData, token);
        return {data, success: true};
    } catch (error) {
        const data =  error.response.data;
        return {data, success: false};
    }
}


