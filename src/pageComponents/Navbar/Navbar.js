import Typography from '../../components/Typography';
import Logo from '../../components/Logo';
import Menu from '../../components/Menu';
import Button from '../../components/Button';
import { useHistory } from 'react-router-dom';
import NavbarRoutes from '../../routes/NavbarRoutes';
import font from '../../utilities/font';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch } from 'react-redux';
import {LOGOUT} from '../../constants/actionTypes'

function Navbar(){
    const history = useHistory();
    const dispatch = useDispatch();

    function changeLink({navlink}){
        history.push(navlink)
    }

    function logout(){
        dispatch({ type: LOGOUT });
        history.push('/login')
    }

    return (
        <div className="Nav" style={{display: 'flex' ,alignItems: 'center', justifyContent: 'space-around', boxShadow: '1px solid lightgray'}}>
                <div style={{display: 'flex' ,alignItems: 'center', cursor: 'pointer'}} onClick={() => changeLink({navlink: '/'})}>
                <Logo imgs="40px" m="10px" />
                <Typography fs="30px" gradient ff={font.ubuntu}>SpeedCode</Typography>
                </div>
                <div style={{display: 'flex' ,alignItems: 'center', width: '50%', justifyContent: 'space-around'}}>
                    {NavbarRoutes.map((nav, index) => (
                        <div key={index}>
                        {nav.type === 'dropdown' ?   (<Menu NavbarName={nav.name} NavbarContent={nav.content} />) :
                            (   <Button bg="transparent" onClick={() => changeLink({navlink: nav.navlink})}>
                                    <Typography m="0px 0px 0px 15px" fs="20px" ff={font.encode} >{nav.name}</Typography>
                                </Button>
                            )
                        }
                    </div>
                    ))}
                </div>

                <div>
                    <Button bg="transparent" onClick={() => changeLink({navlink: '/profile'})}>
                        <Typography m="0px 0px 0px 15px" fs="20px" ff={font.encode} ><PersonIcon  fontSize="large"/> </Typography>
                    </Button>

                    <Button bg="transparent" onClick={() => logout()}>
                        <Typography m="0px 0px 0px 15px" fs="25px" ff={font.encode} ><ExitToAppIcon fontSize="large"/></Typography>
                    </Button>
                </div>


            </div>
    );
}

export default Navbar;