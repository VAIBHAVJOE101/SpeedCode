import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import '../assets/css/materialui.css';


const useStyles = makeStyles({
    simple: props => ({
        fontSize: props.fs === undefined ? 100 : props.fs,
        fontWeight: props.fw === undefined ? 400 : props.fw,
        color: props.color === undefined ? "white" : props.color,
        margin: props.m,
        fontFamily: props.ff,
        display: props.display ,
        alignItems: props.alignItems,
        justifyContent: props.justify,
        textAlign: props.textalign,
        textTransform: props.tt,
        Width: props.w === undefined ? '100%' : props.w,
    }),
    gradient:{
        background: "-webkit-linear-gradient(45deg, #34ACE1, #6ABE45)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    }
});


export default function ClassesShorthand({children,  ...props}) {
    const classes = useStyles(props)
    
    return <Typography className={ props.gradient !== undefined ? `${classes.gradient} ${classes.simple}` : classes.simple} onClick={props.onClick}>{children}</Typography>
}