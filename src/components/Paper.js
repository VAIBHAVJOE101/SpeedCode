import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: props =>({
    display: 'flex',
    flexWrap: 'wrap',
    // margin: props.mr,
    // padding: props.pr,
  }),
  paperRoot: props => ({
    display: props.dis,
    flexWrap: props.wrap,
    width: props.w,
    height: props.h,
    border: props.bd,
    borderRadius: props.br,
    margin: props.mr,
    padding: props.p,
    backgroundColor:props.bg,
    boxShadow: props.bs,
    background: props.bi,
  }),

});

export default function ClassesShorthand({ children, square , variant, elevation, ...props }) {
  const classes = useStyles(props);

  return (
    // <div className={classes.root}>
      <Paper className={classes.paperRoot} variant={variant} elevation={3} square={square} >{children}</Paper>
    // </div>
  );
}