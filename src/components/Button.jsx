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
	myButton: {
		margin: "3px",
		background: (props) => props.backgroundColor,
		border: "none",
		padding: "10px 24px",
		textAlign: "center",
		textDecoration: "none",
		display: "inline-block",
		fontSize: "1em",
		borderRadius: "8px",
		color: (props) => props.fontColor,
	},
});
