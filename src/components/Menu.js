import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router-dom";
import { makeStyles} from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../assets/css/materialui.css';
import font from '../utilities/font'

const useStyles = makeStyles({
    custombg: props => ( {
    color: "white",
    fontSize: "20px",
    fontFamily: font.encode,
    fontWeight: props.fw ===  400
    }),
    custommenu: {
        margin: "40px",
    },
    custommenuitem: {
        background: "transparent",
        width:"180px",
        '&:hover': {
            backgroundColor: "black",
            color: "white",
        }
    }
});



function SimpleMenu({NavbarName, NavbarContent}) {

    const [openMenu, setopenMenu] = useState(null);
    const history = useHistory();
    const classes = useStyles();

    function handleClick(event) {
        if (openMenu !== event.currentTarget) {
            setopenMenu(event.currentTarget);
        }
    }

    function handleClose() {
        setopenMenu(null);
    }

    function changeLink({navlink}){
        setopenMenu(null);
        history.push(navlink)
    }


return (
        <div>
            <Button className={classes.custombg} aria-owns={openMenu ? "simple-menu" : undefined} aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick} >
                {NavbarName}<ExpandMoreIcon fontSize="large" />
            </Button>

            <Menu className={classes.custommenu} id="menu-list-grow" anchorEl={openMenu} open={Boolean(openMenu)} onClose={handleClose} MenuListProps={{ onMouseLeave: handleClose }}>
                {NavbarContent?.map((nav, index)=> (
                        <MenuItem className={classes.custommenuitem} key={index} onClick={() => changeLink({navlink: nav.navlink})}>{nav.navtitle}</MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export default SimpleMenu;