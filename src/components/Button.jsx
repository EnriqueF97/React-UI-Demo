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
		<button
			className={classes[`myButton${props.active ? "Active" : ""}`]}
			onClick={props.func}
			disabled={props.inactive === true}>
			{props.text !== undefined ? props.text : "text?"}
		</button>
	);
}

const useStyles = createUseStyles({
	container: {
		height: "parent",
		marginTop: "auto",
		marginBottom: "auto",
		display: "flex",
	},
	myButton: {
		margin: (props) => (props.small ? "1vmin 0.5vmin" : "1vmin 0.9vmin"),
		background: (props) => props.backgroundColor,
		border: "none",
		padding: (props) => (props.small ? "calc(2px + 1vmin)" : "calc(4px + 1vmin)"),
		textAlign: "center",
		textDecoration: "none",
		borderRadius: (props) => (props.small ? "5px" : "8px"),
		fontSize: (props) => (props.small ? "calc(7px + 1vmin)" : "calc(9px + 1 vmin)"),
		color: (props) => props.fontColor,
		"&:hover": {
			cursor: "pointer",
		},
		fontWeight: (props) => (props.bold ? "bold" : ""),
	},
	myButtonActive: {
		margin: (props) => (props.small ? "1vmin 0.5vmin" : "1vmin 0.9vmin"),
		background: (props) => props.backgroundColor,
		padding: (props) => (props.small ? "calc(2px + 1vmin)" : "calc(4px + 1vmin)"),
		textAlign: "center",
		textDecoration: "none",
		display: "inline-block",
		borderRadius: (props) => (props.small ? "5px" : "8px"),
		fontSize: (props) => (props.small ? "calc(7px + 1vmin)" : "calc(9px + 1 vmin)"),
		color: (props) => props.fontColor,
		"&:hover": {
			cursor: "pointer",
		},
		fontWeight: (props) => (props.bold ? "bold" : ""),
		border: "2px solid #e6e6e6",
	},
});
