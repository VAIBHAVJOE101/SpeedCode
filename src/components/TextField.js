import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
	input: (props) => ({
		backgroundColor: props.bg,
		border: props.bd,
		margin: props.m,
		padding: props.p,
        borderRadius: props.br,
	}),
	inputtext: (props) => ({
		width: props.w,
		height: props.h === undefined ? "50px" : props.h,
		fontSize: props.fs,
		color: props.color,
	}),
});

export default function ClassesShorthand({ children, type, ...props }) {
	const classes = useStyles(props);

	return (
		<TextField
			id="outlined-basic"
			className={classes.input}
            type={type}
			label={props.label}
			variant="outlined"
			placeholder={props.placeholder}
			InputProps={{ className: classes.inputtext }}
			onChange={props.onChange}
            name = {props.name}
            value = {props.value}
		/>
	);
}