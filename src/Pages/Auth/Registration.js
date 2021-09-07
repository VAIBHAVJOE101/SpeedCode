import React, { useState } from 'react';
import '../../assets/css/Login.css';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import {Link, useHistory} from 'react-router-dom';
import {Input, ColorButton, useStyles} from '../../components/LoginComponent';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {IconButton} from '@material-ui/core';
import Logo from '../../components/Logo';
import { Register } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';
import validator from 'validator';


function Registration() {
    const classes = useStyles();
    const [register, setRegister] = useState({email:'', password:'', confirmPassword:''})
    const [registererror, setRegistererror] = useState({top: '',email: '', password:''})
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);
    const [isdisabled, setdisabled] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const changeInput = (event) =>{
        setRegister((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }));
    }

    const clear = () =>{
        setRegister({email:'', password:'', confirmPassword:''})
    }


    const RegisterSubmit = (e) =>{
        e.preventDefault();
        if(!validator.isEmail( register.email)){
            setRegistererror({top: '', email: 'Enter Valid Email', password:''})
        }
        else if(register.password === register.confirmPassword)
        {
            const errordata  = dispatch(Register(register, history));
            if(errordata){
                errordata.then((result) => {
                    console.log(result);
                    if(result?.success === true){
                        setRegistererror({top: result?.data?.data?.message, email: '', password:''})
                        clear();
                    }else{
                        setRegistererror({top: result?.data?.message, email: '', password:''})
                    }
                })
            setdisabled(true);
            setTimeout(() => {
                    setdisabled(false);
                }, 4000)
            }

        }else{
            setRegistererror({top: '', bottom:'Password Not Match'})
            setRegister((prevProps) => ({
                ...prevProps,
                password : '',
                confirmPassword: '',
            }));
        }
    }

    return (
        <div className="Login">
        <div className="LoginCard">
        <div className="RegistrationForm">

        

        <form onSubmit={RegisterSubmit}>
        <Logo imgs="70px"  />

        <div className="loginFormTopography">Register Your Account</div>
        <div className="error">{registererror.top !== '' && registererror.top !== undefined ? registererror.top : ''}</div>

        <Input
        className={classes.margin} 
        name='email'
        placeholder="Email" 
        value={register.email}
        variant="outlined"
        InputProps={{
            startAdornment: (<InputAdornment position="start"><MailIcon color="white"/></InputAdornment>),
            className: classes.input
        }}
        onChange={e => changeInput(e)}
        required
        />

        <div className="error">{registererror.email !== '' && registererror.email !== undefined ? registererror.email : ''}</div>

        <Input
        className={classes.margin} 
        name='password'
        placeholder="Password" 
        value={register.password}
        type={showPassword ? 'text' : 'password'}
        variant="outlined"
        InputProps={{
            startAdornment: (<InputAdornment position="start"><LockIcon color="white"/></InputAdornment>),
            endAdornment: (<InputAdornment position="end">
                                <IconButton onClick={handleShowPassword}>{showPassword ? <Visibility  /> : <VisibilityOff />}</IconButton>
                            </InputAdornment>
                        ),
            className: classes.input
        }}
        onChange={e => changeInput(e)}
        required
        />

        

        <Input
        className={classes.margin} 
        name='confirmPassword'
        placeholder="Confirm Password" 
        value={register.confirmPassword}
        type="password" 
        variant="outlined"
        InputProps={{
            startAdornment: (<InputAdornment position="start"><LockIcon color="white"/></InputAdornment>),
            className: classes.input
        }}
        onChange={e => changeInput(e)}
        required
        />

        <div className="error">{registererror.bottom !== '' && registererror.bottom !== undefined ? registererror.bottom : ''}</div>

        <ColorButton variant="contained" color="primary" className={classes.margin} type="submit" disabled={isdisabled}>Register</ColorButton>
        </form>

        <div className="LoginBottom">
            <Link to='Login'>
            <button className='Loginbtn' >Already Have an Account</button>
            </Link>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Registration
