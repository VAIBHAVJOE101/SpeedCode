import React, { useEffect, useState } from 'react';
import {  useHistory, useParams } from 'react-router-dom';
import '../../assets/css/Forgot.css';
import Card from '../../components/Card';
import { VerifyRegistration } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';


function Verify() {
    const [message, setmessage] = useState('');
    let { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    
    useEffect(() => {
            const verifydata  = dispatch(VerifyRegistration(id));
            if(verifydata) {
                verifydata.then((result) => {
                    console.log(result);
                    if(result?.success === true){
                        setmessage(result?.data?.data?.message);
                    }else{
                        setmessage(result?.data?.message);
                    }
                })
                setTimeout(() => {
                    history.push('/login');
                }, 3000)
            }
    }, [id, history]);

    return (
            <Card h="40vh" maxw="800px" m="20vh auto" display="flex" fdir="column"  alignItems="center" justify="center">
            <div style={{fontSize: '25px'}}>{message !== '' && message !== undefined ? message : ''}</div>
            <div style={{fontSize: '25px'}}>{message !== '' && message !== undefined ? 'Redirecting to Login Page' : ''}</div>
            </Card>
    )
}

export default Verify
