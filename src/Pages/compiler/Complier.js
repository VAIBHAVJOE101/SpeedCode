import React, { useEffect } from 'react'
import Navbar from '../../pageComponents/Navbar/Navbar';
import {animateScroll as scroll } from 'react-scroll'

function Complier() {
    const style =  {
        width: "100%",
        height: "100vh",
    }

    function scrollToBottom() {
        scroll.scrollToBottom();
    }

    useEffect(() =>{
        scrollToBottom();
    }, [])
    return (
        <div>
        <Navbar />
        <embed src="https://confident-hugle-6c9162.netlify.app/" style={style} />
        </div>
    )
}

export default Complier
