import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../assets/css/materialui.css';


const useStyles = makeStyles({
    custombg: props => ( {
    backgroundColor: props.bg,
    border: props.bd,
    borderRadius: props.br,
    color: props.color,
    height: props.h,
    width: props.w,
    fontSize: props.fs,
    margin: props.m,
    padding: props.p,
    fontFamily: props.ff,
    fontWeight: props.fw === undefined ? 400 : props.fw,
    '&:hover': {
        backgroundColor: props.hoverbg === undefined ? props.bg : props.hoverbg,
        color: props.hovercolor === undefined ? props.color : props.hover,
    },
    }),
    gradientborder: {
    borderStyle: 'solid',
    borderWidth: '3px',
    borderImage: 'linear-gradient(45deg, #34ACE1, #6ABE45) 1',
    }
});

export default function ClassesShorthand({children, type, ...props}) {
    const classes = useStyles(props);
    
    return <Button variant="contained" color="primary" className={props.gradient === true ? ` ${classes.custombg} ${classes.gradientborder}` : classes.custombg} 
                    onClick={props.onClick}
                    type = {props.type}
                    name= {props.name}
            >
                {children}
            </Button>;
}