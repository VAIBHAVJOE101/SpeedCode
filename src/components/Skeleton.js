import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
    root: props => ({
        margin : props.m,
        "&.MuiSkeleton-root": {
            backgroundColor: "rgba(109, 181, 181, 0.33)",
        }
    })
}));

export default function LoadingSkeleton({...props}) {
    const classes = useStyles(props);

    return (
        <Skeleton
            variant="text"
            height={props.h} 
            width={props.w}
            className={classes.root}
        />
    );
}