import React, { useState } from 'react'
import '../../assets/css/Login.css'
import InputAdornment from '@material-ui/core/InputAdornment';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import {Link, useHistory} from 'react-router-dom';
import {Input, ColorButton, useStyles} from '../../components/LoginComponent';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {IconButton} from '@material-ui/core';
import Logo from '../../components/Logo';
import { login, Verificationresend } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';
import validator from 'validator';


function Login() {
    const classes = useStyles();
    const [logindata, setlogindata] = useState({email:'', password:''})
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const [loginerror, setLoginerror] = useState({email: '', password:'', server: ''});
    const [isdisabled, setdisabled] = useState(false)
    
    // const loginerror = useSelector((state) => state.message);
    
    const handleShowPassword = () => setShowPassword(!showPassword);
    
    const changeInput = (event) =>{
        setlogindata((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }));
    }
    
    const clear = () =>{setlogindata({email:'', password:''})}
    
    const resendverify = () => {
        const errordata  = dispatch(Verificationresend(logindata, history));
            
            if(errordata){
                errordata.then((result) => setLoginerror({email: '', password:'', server: result?.data}))
                clear();
            }else{
                clear();
            }
            
            setdisabled(true);
            setTimeout(() => {
                setdisabled(false);
            }, 3000)
    }
    
    const LoginSubmit = (e) =>{
        e.preventDefault();
        if(!logindata.email){
            setLoginerror({email: 'Email is required', password:'', server: ''})
        }
        else if (!logindata.password){
            setLoginerror({email: '', password:'Password is required', server: ''})
        }
        else if(!validator.isEmail(logindata.email)){
            setLoginerror({email: 'Enter a Valid Email Id', password:'', server: ''})
        }
        else{
            setdisabled(true);
            const errordata  = dispatch(login(logindata, history));
            if(errordata){
                errordata.then((result) => setLoginerror({email: '', password:'', server: result}))
            }else{
                clear();
            }
            
            setTimeout(() => {
                setdisabled(false);
            }, 3000)
        }
    }
    
    
    return (
        <div className="Login">
        <div className="LoginCard">
        <Logo imgs="70px"  />
        <div className="loginFormTopography">Sign In with Credentials</div>
        
        <div>{loginerror?.server?.message !==null && loginerror?.server?.message !== undefined ? 
        <div >
            {
                loginerror?.server?.type === 'not-verified' ? 
                (<div className="error">{`${loginerror?.server?.message}`} Click to Resend Verification Link <button onClick={() => resendverify()}   style={{padding: '2.5px', margin:'10px'}}>Click here</button></div>
                )
                :
                (<div className="error">{`${loginerror?.server?.message}`}</div>)
            }
        </div> 
        : ''}</div>


        <form className="loginForm" onSubmit={LoginSubmit}>
        
        <div className="error">{loginerror?.server?.msg !==null && loginerror?.server?.msg !== undefined ? loginerror?.server?.msg : ''}</div>
        
        <Input
        className={classes.margin} 
        placeholder="Email" 
        name="email"
        value={logindata.email}
        onChange={e => changeInput(e)}
        variant="outlined"
        InputProps={{
            startAdornment: (<InputAdornment color="white" position="start"><MailIcon color='white'/></InputAdornment>),
            className: classes.input
        }}
        />
        <div  className="error">{loginerror.email !== '' && loginerror.email !== undefined ? loginerror.email : ''}</div>
        

        <Input className={classes.margin}  
        placeholder="Password"  
        type={showPassword ? 'text' : 'password'}
        variant="outlined"
        name="password"
        value={logindata.password}
        onChange={e => changeInput(e)}
        InputProps={{
            startAdornment: (<InputAdornment position="start"><LockIcon color='white'/></InputAdornment>),
            endAdornment: (<InputAdornment position="end">
                                <IconButton   onClick={handleShowPassword}>{showPassword ? <Visibility  /> : <VisibilityOff  />}</IconButton>
                            </InputAdornment>
                        ),
            className: classes.input
        }}
        />
        <div className="error">{loginerror.password !== '' && loginerror.password !== undefined ? loginerror.password : ''}</div>
        

        <ColorButton variant="contained" color="primary" className={classes.margin} type="submit" disabled={isdisabled}>Log In</ColorButton>
        </form>

        <div className="LoginBottom">
            
            <Link to='Forgot'>
            <button className='Loginbtn'>Forgot Password</button>
            </Link>

            <Link to='register'>
            <button className= "Loginbtn" >Create A New Account</button>
            </Link>

        </div>
        </div>
        </div>
    )
}

export default Login
