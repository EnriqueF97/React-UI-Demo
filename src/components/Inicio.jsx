import { classes } from "istanbul-lib-coverage";
import React from "react";
import { createUseStyles } from "react-jss";

import Logo from "../assets/LogoFit.png";

export default function Inicio() {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className={classes.title}>
				<h3>Este es un demo de User Interface en React!</h3>
			</div>
			<div className={classes.title}>
				<h5>Utilizando el API Rest de:</h5>
			</div>
			<div className={classes.imageContainer}>
				<img className={classes.image} src={Logo} alt='Rick&Morty' />
			</div>
			<div className={classes.title}>
				<h5>Explora el catálogo, busca entre páginas y añade artículos a tu carrito!</h5>
			</div>
			<div className={classes.title}>
				<h4>Enrique Favila Martínez</h4>
			</div>
		</div>
	);
}

const useStyles = createUseStyles({
	container: {
		width: "80%",
		minHeight: "80vh",
		margin: "auto",
		background: "#33373d",
		padding: "3vmin",
		borderRadius: "7px",
		border: " 3px solid black",
	},
	imageContainer: {
		padding: "1vmin",
	},
	image: {
		maxHeight: "20vw",
		borderRadius: "8px",
		objectFit: "contain",
	},
	title: {
		marginTop: "3em",
	},
});
