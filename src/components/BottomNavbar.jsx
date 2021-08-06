import React from "react";
import { createUseStyles } from "react-jss";

export default function BottomNavbar() {
	const classes = useStyles();
	return (
		<div
			style={{
				background: "rgb(33, 38, 48)",
				padding: "1vh 10vw",
			}}>
			<div className={classes.block}>
				<span className={classes.navText}>Enrique Favila Martínez</span>
			</div>
			<div className={classes.block}>
				<a href='https://github.com/EnriqueF97/StarWarsDemo'>
					<span className={classes.navText}>EnriqueF97@github</span>
				</a>
			</div>
			<div className={classes.block}>
				<span className={classes.navText} styles={{ fontSize: "0.5em" }}>
					01 de Agosto de 2021.
				</span>
			</div>
		</div>
	);
}

const useStyles = createUseStyles({
	block: {
		margin: "0.5em 0",
		textAlign: "left",
	},
	navText: {
		color: "rgb(191, 191, 191)",
		fontFamily: "sans-serif",
		lineHeight: "5px",
	},
});
