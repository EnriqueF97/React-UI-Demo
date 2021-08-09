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

/**Estilos */
const useStyles = createUseStyles({
	li: {
		float: "left",
		"& span": {
			display: "block",
			color: "white",
			textAlign: "center",
			padding: "calc(10px + 1vmin)",
			textDecoration: "none",
			fontSize: "calc(7px + 2vmin)",
			borderRadius: "6px",
			background: (props) => (props.active === true ? "#2b2a2a" : "#333"),
			"&:hover": {
				background: "#2b2a2a",
				cursor: "pointer",
				transition: "background .2s",
			},
		},
	},
	link: {
		display: "block",
		textAlign: "center",
		padding: "14px 16px",
		textDecoration: "none",
	},
});
