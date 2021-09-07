import React from 'react';
import {withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


const BorderLinearProgress = withStyles((theme) => ({
    root: {
    height: 18,
    margin: "10px 0px 0px 20px",
    width: '250px'
    },
    colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
    backgroundColor: 'green',
    },
}))(LinearProgress);


export default function CustomizedProgressBars({...props}) {

return (<BorderLinearProgress variant="determinate" value={props.value} />);
}


