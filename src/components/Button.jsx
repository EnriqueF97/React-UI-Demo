import React, { Component } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

export default function Button(props) {
	const classes = useStyles(props);

	Component.propTypes = {
		backgroundColor: PropTypes.string,
		fontColor: PropTypes.string,
		text: PropTypes.string,
		func: PropTypes.func,
	};

	return (
		<button className={classes.myButton} onClick={props.func}>
			{props.text !== undefined ? props.text : "text?"}
		</button>
	);
}

const useStyles = createUseStyles({
	container: {
		height: "parent",
		marginTop: "calc(9px + 1vm)",
		marginBottom: "calc(9px + 1vm)",
	},
	myButton: {
		margin: "1.3vh",
		background: (props) => props.backgroundColor,
		border: "none",
		padding: "10px 24px",
		textAlign: "center",
		textDecoration: "none",
		display: "inline-block",
		borderRadius: "10px",
		fontSize: "calc(9px + 1vmin)",
		color: (props) => props.fontColor,
		"&:hover": {
			cursor: "pointer",
		},
	},
});
