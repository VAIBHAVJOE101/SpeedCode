import React, { useState } from 'react';
import '../../assets/css/Forgot.css';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';
import {Link, useHistory, useParams} from 'react-router-dom';
import {Input, ColorButton, useStyles} from '../../components/LoginComponent';
import Card from '../../components/Card';
import Logo from '../../components/Logo';
import { PasswordReseted } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';

function ResetPassword() {
    const classes = useStyles();
    const [passwordreset, setpassswordreset] = useState({password: '', confirmPassword: ''});
    const [forgoterror, setForgoterror] = useState('');
    const [isdisabled, setdisabled] = useState(false);

    let { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const changeInput = (event) =>{
        setpassswordreset((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }));
    }


    const clear = () =>{
        setpassswordreset({password: '', confirmPassword: ''});
    }

    const forgotSubmit = (e) =>{
        e.preventDefault();
        if(passwordreset.password !== passwordreset.confirmPassword)
        {
            setForgoterror('Password Not Match');
        }else{
            const errordata  = dispatch(PasswordReseted(passwordreset, id));
            
            if(errordata){
                errordata.then((result) => {
                    if(result?.success === true)
                    {
                        setForgoterror(result?.data?.data?.message)
                        clear();
                        setTimeout(() => {
                            history.push('/login');
                        }, 5000)
                    }else{
                        setForgoterror(result?.data?.message);
                    }
                })
                clear();
            }
            setdisabled(true);
            setTimeout(() => {
                setdisabled(false)
            }, 3000)
        }
        clear();
    }


    return (
        <Card h="55vh" maxw="25vw" m="20vh auto" display="flex" fdir="column"  alignItems="center" justify="center" bg="rgba(128, 208, 199,0.2)">
            <Logo imgs="70px"  />
            <div className="loginFormTopography">Reset Your Password</div>
            
            <div className="error">{forgoterror !== '' && forgoterror !== undefined ? forgoterror : ''}</div>

            <form className="loginForm" onSubmit={forgotSubmit}>
                

                <Input
                    className={classes.margin} 
                    placeholder="Passsword" 
                    variant="outlined"
                    name = "password"
                    type = "password"
                    value={passwordreset.password}
                    onChange={e => changeInput(e)}
                    InputProps={{
                        startAdornment: (<InputAdornment position="start"><LockIcon color='white'/></InputAdornment>),
                        className: classes.input
                    }}
                    required
                />

                <Input
                    className={classes.margin} 
                    placeholder="Confirm Password" 
                    variant="outlined"
                    name = "confirmPassword"
                    type = "password"
                    value={passwordreset.confirmPassword}
                    onChange={e => changeInput(e)}
                    InputProps={{
                        startAdornment: (<InputAdornment position="start"><LockIcon color='white'/></InputAdornment>),
                        className: classes.input
                    }}
                    required
                />

                <ColorButton variant="contained" color="primary" className={classes.margin} type="submit" disabled={isdisabled}>Submit</ColorButton>
            </form>

            <div className="LoginBottom">
                <Link to='/login'>
                    <button className='Loginbtn'>Go to Login Page</button>
                </Link>
            </div>
        </Card>
    )
}

export default ResetPassword;
