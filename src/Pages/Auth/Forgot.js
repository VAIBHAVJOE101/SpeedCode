import React, { useState } from 'react';
import '../../assets/css/Forgot.css';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailIcon from '@material-ui/icons/Mail';
import {Link} from 'react-router-dom';
import {Input, ColorButton, useStyles} from '../../components/LoginComponent';
import Card from '../../components/Card';
import Logo from '../../components/Logo';
import validator from 'validator';
import { useDispatch } from 'react-redux';
import { RecoverPassword } from '../../redux/actions/auth';

function Forgot() {
    const classes = useStyles();
    const [forgotemail, setForgotemail] = useState('');
    const [forgoterror, setForgoterror] = useState('');
    const [isdisabled, setdisabled] = useState(false);
    

    const dispatch = useDispatch();


    const changeInput = (e) => {
        setForgotemail(e.target.value);
    }

    const clear = () =>{
        setForgotemail('');
    }

    const forgotSubmit = (e) =>{
        e.preventDefault();

        if(forgotemail === '') {
            setForgoterror('Enter Email');
        }else if(!validator.isEmail(forgotemail)){
            setForgoterror('Enter A valid Email Address');
        }
        else{
            const data  = dispatch(RecoverPassword({email: forgotemail}));
            if(data){
                data.then((result) => {
                    if(result?.success === true)
                    {
                        setForgoterror(result?.data?.data?.message)
                        clear();
                    }else{
                        setForgoterror(result?.data?.message);
                    }
                });
            }
            setdisabled(true);
            setTimeout(() => {
                setdisabled(false);
            }, 4000)
        }
    }


    return (
        <Card h="55vh" maxw="25vw" m="20vh auto" display="flex" fdir="column"  alignItems="center" justify="center" bg="rgba(128, 208, 199,0.2)">
            <Logo imgs="70px"  />
            <div className="loginFormTopography">Forgot Password</div>
            <div  className="error">{forgoterror !== '' && forgoterror !== undefined ? forgoterror : ''}</div>
            <form className="loginForm" onSubmit={forgotSubmit}>
                

                <Input
                    className={classes.margin} 
                    placeholder="Email" 
                    variant="outlined"
                    value={forgotemail}
                    onChange={e => changeInput(e)}
                    InputProps={{
                        startAdornment: (<InputAdornment position="start"><MailIcon color='white'/></InputAdornment>),
                        className: classes.input
                    }}
                    required
                />

                

                <ColorButton variant="contained" color="primary" className={classes.margin} type="submit" disabled={isdisabled}>Submit</ColorButton>
            </form>

            <div className="LoginBottom">
                <Link to='Login'>
                    <button className='Loginbtn'>Go to Login Page</button>
                </Link>
            </div>
        </Card>
    )
}

export default Forgot;
