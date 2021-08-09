import React from "react";
import { createUseStyles } from "react-jss";

export default function NavbarButton(props) {
	const classes = useStyles(props);
	return (
		<li className={classes.li}>
			<span onClick={props.onSelect}>{props.text}</span>
		</li>
	);
}

const useStyles = createUseStyles({
	li: {
		float: "left",
		"&:hover": {
			color: "blue",
			cursor: "pointer",
		},
		"& span": {
			display: "block",
			color: "white",
			textAlign: "center",
			padding: "calc(10px + 1vmin)",
			textDecoration: "none",
			fontSize: "calc(10px + 2vmin)",
			borderRadius: "6px",
			backgroundColor: (props) => (props.active === true ? "#2b2a2a" : "#333"),
		},
	},
	link: {
		display: "block",
		color: "white",
		textAlign: "center",
		padding: "14px 16px",
		textDecoration: "none",
	},
});
