import React from 'react';
import Typography from '../components/Typography';
import font from '../utilities/font';
import cplogo from '../utilities/cplogo';
import '../assets/css/pagecomponent.css'

function HeaderTypography({logoid, HeaderContent}) {
    return (
        <Typography m="0px 40px 0px 0px " fs="45px" color="white" ff={font.ubuntu} display="flex" alignItems="center">
        <img className="headertypoimg" src={cplogo[logoid]} alt="Codeforces" />
            {HeaderContent}
        </Typography>
    )
}

export default HeaderTypography
