import React from 'react';
import logoimg from '../assets/image/logo.png'
import '../assets/css/materialui.css';

function Logo({...props}) {
    
    const style =  {
        objectFit: 'cover',
        width: props.imgs  === undefined ? "10%" : props.imgs,
        height: props.imgs === undefined? "10%" : props.imgs,
        margin: props.m,
    }

    return (
        <img src={logoimg} style={style} alt="logo" onClick={props.onClick}/>
    )
}

export default Logo;
