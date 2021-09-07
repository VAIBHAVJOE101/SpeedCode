import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  root: props=>({
    minWidth: props.minw,
    maxWidth: props.maxw,
    height: props.h,
    opacity: props.opacity,
    zIndex:props.z,
    margin:props.m,
    padding: props.p,
    backgroundColor: props.bg ,
    borderRadius: props.br ,
    border: props.bd,
    display: props.display ,
    flexDirection: props.fdir,
    alignItems: props.alignItems,
    justifyContent: props.justify,
    textAlign: props.textalign,
    overflow : props.overflow,
    overflowX: props.overflowX,
    overflowY: props.overflowY,
}),
});

export default function ClassesShorthand({ children, type, ...props }) {
    const classes = useStyles(props);

    return (
        <Card className={classes.root} variant="outlined" onClick={props.onClick}>
        {/* <CardContent> */}
            {children}
        {/* </CardContent> */}
      </Card>
    );
}