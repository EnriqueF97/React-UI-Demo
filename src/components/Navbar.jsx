import React from "react";
import { createUseStyles } from "react-jss";
import { useHistory, useLocation } from "react-router-dom";
import Button from "./Button";
import NavbarButton from "./NavbarButton";
import { useSelector, useDispatch } from "react-redux";

export default function Navbar() {
	const history = useHistory();
	const location = useLocation();
	const classes = useStyles();
	const count = useSelector((state) => state.counter.value);
	const [links, setLinks] = React.useState([
		{ ref: "/", text: "Inicio", key: "inicio", active: true },
		{ ref: "/titulo", text: "Titulo", key: "titulo", active: false },
		{ ref: "/count", text: "Count", key: "count", active: false },
		{ ref: "/cart", text: "Cart", key: "cart", active: false },
	]);

	const handleOnSelect = (selected) => {
		const to = selected;
		if (location.pathname !== to) {
			history.push(to);
		}

		resetNavActives(selected);
	};

	const resetNavActives = (selected = "not") => {
		console.log("selected", selected);
		let newLinks = [...links];
		newLinks.map((link) => {
			link.active = true;
			if (link.ref !== selected) link.active = false;
		});
		setLinks(newLinks);
	};

	/** TO DO
	 * Crear un componente boton para la navbar generico que requiera de text, color, y una funcion
	 * El color se lo pasas por props a jss para que le de estilo
	 * En navbar tu decides que color le das a cada uno al hacer click!
	 * Con esto ya tienes el render de color condicional para cada boton!!!
	 */

	return (
		<ul className={classes.ul}>
			{links.map((link) => (
				<NavbarButton
					key={link.key}
					active={link.active}
					text={link.text}
					onSelect={() => handleOnSelect(link.ref)}
				/>
			))}
			<li style={{ height: "5vh", paddingTop: "auto", paddingBottom: "auto", float: "right" }}>
				<Button
					text={`Cart: ${count}`}
					backgroundColor='#e3a600'
					func={() => {
						if (location.pathname !== "/cart") {
							history.push("/cart");
							resetNavActives();
						}
					}}
				/>
			</li>
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
		textAlign: "center",
	},
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
		},
	},
	li_selected: {
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
			backgroundColor: "#2b2a2a",
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
