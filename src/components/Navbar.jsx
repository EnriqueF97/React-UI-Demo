import React from "react";
import { createUseStyles } from "react-jss";
import { useHistory, useLocation } from "react-router-dom";
import Button from "./Button";
import NavbarButton from "./NavbarButton";
import Logo from "../assets/LogoFit.png";
import { useSelector } from "react-redux";

export default function Navbar(props) {
	const history = useHistory();
	const location = useLocation();
	const classes = useStyles();
	const count = useSelector((state) => state.shopCart.count);
	const [links, setLinks] = React.useState([
		{ ref: "/catalog", text: "Personajes", key: "character", active: false },
		{ ref: "/catalog", text: "Ubicaciones", key: "location", active: false },
		{ ref: "/catalog", text: "Episodios", key: "episode", active: false },
		//{ ref: "/cart", text: "Cart", key: "cart", active: false },
	]);

	/**Metodo para seleccionar una nueva url y darsela al metodo padre, al hacerlo también cambia los estilos dinamicamente */
	const handleOnSelect = ({ ref, key }) => {
		props.onSelect(key);

		const to = ref;
		if (location.pathname !== to) {
			history.push(to);
		}

		resetNavActives(key);
	};

	/**Metodo para cambiar los estilos, al saber que key se seleccionó, activa su estilo y
	 * desactiva el de los demás botones*/
	const resetNavActives = (key = "not") => {
		let newLinks = [...links];
		newLinks.forEach((link) => {
			link.active = true;
			if (link.key !== key) link.active = false;
		});
		setLinks(newLinks);
	};

	return (
		<div className={classes.navbar}>
			<ul className={classes.ul}>
				<li className={classes.li} style={{ height: "100%" }}>
					{/* Logo */}
					<div className={classes.imageContainer}>
						<img
							onClick={() => handleOnSelect({ ref: "/", key: "inicio" })}
							className={classes.image}
							src={Logo}
							alt='logo'
						/>
					</div>
				</li>
				{/* Botones, se crean componentes NavbarButton dinamicamente a partir del arreglo de links[] */}
				{links.map((link) => (
					<NavbarButton
						key={link.key}
						active={link.active}
						text={link.text}
						onSelect={() => handleOnSelect(link)}
					/>
				))}
				{/* Boton de ShopCart */}
				<div style={{ height: "100%", display: "flex", float: "right", padding: "auto 0" }}>
					<Button
						text={`Cart: ${count}`}
						backgroundColor='#e3a600'
						key={"cart"}
						func={() => {
							handleOnSelect({ ref: "/cart", key: "cart" });
						}}
						bold
					/>
				</div>
			</ul>
		</div>
	);
}

/**Estilos */
const useStyles = createUseStyles({
	navbar: {
		position: "fixed",
		width: "100%",
		borderBottom: "3px solid black",
	},
	imageContainer: {
		margin: "1vmin",
		paddingInline: "1vmin",
		width: "100%",
	},
	image: {
		maxHeight: "5vmin",
		borderRadius: "8px",
		objectFit: "contain",
		"&:hover": {
			cursor: "pointer",
		},
	},
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
			cursor: "",
		},
		"& span": {
			display: "block",
			color: "white",
			textAlign: "center",
			padding: "calc(2px + 1vmin)",
			textDecoration: "none",
			fontSize: "calc(10px + 2vmin)",
		},
		height: "90%",
	},
	myLabel: {
		fontStyle: "italic",
		"& span": {
			// jss-plugin-nested applies this to a child span
			fontWeight: "bold", // jss-plugin-camel-case turns this into 'font-weight'
		},
	},
});
