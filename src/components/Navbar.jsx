import React from "react";
import { createUseStyles } from "react-jss";
import { useHistory, useLocation } from "react-router-dom";

export default function Navbar() {
	const history = useHistory();
	const location = useLocation();
	const classes = useStyles();

	const links = [
		{ ref: "/", text: "Inicio", key: "inicio" },
		{ ref: "/titulo", text: "Titulo", key: "titulo" },
		{ ref: "/count", text: "Count", key: "count" },
	];
	const handleOnSelect = (selected) => {
		const to = selected;
		if (location.pathname !== to) {
			history.push(to);
		}
	};

	const getClasses = () => {
		return "li";
	};

	return (
		<ul className={classes.ul}>
			{links.map((link) => (
				<li className={classes.li}>
					<span href key={link.key} onClick={() => handleOnSelect(link.ref)}>
						{link.text}
					</span>
				</li>
			))}
			<li></li>
		</ul>
	);
}

const useStyles = createUseStyles({
	ul: {
		listStyleType: "none",
		margin: "0",
		padding: "0",
		overflow: "hidden",
		backgroundColor: "#333",
	},
	li: {
		float: "left",
		padding: "1vw",
		"&:hover": {
			color: "blue",
			cursor: "pointer",
		},
		"& span": {
			display: "block",
			color: "white",
			textAlign: "center",
			padding: "5px 16px",
			textDecoration: "none",
		},
	},
	link: {
		display: "block",
		color: "white",
		textAlign: "center",
		padding: "14px 16px",
		textDecoration: "none",
	},
	myLabel: {
		fontStyle: "italic",
		"& span": {
			// jss-plugin-nested applies this to a child span
			fontWeight: "bold", // jss-plugin-camel-case turns this into 'font-weight'
		},
	},
});
