import React from "react";
import { createUseStyles } from "react-jss";

export default function BottomNavbar() {
	const classes = useStyles();
	return (
		<div className={classes.navbarContainer}>
			<div className={classes.block}>
				<a className={classes.navText} href='https://github.com/EnriqueF97'>
					EnriqueF97@github
				</a>
			</div>
		</div>
	);
}

const useStyles = createUseStyles({
	navbarContainer: { background: "rgb(33, 38, 48)", padding: "1vh 10vw", borderTop: "3px solid black" },
	block: {
		margin: "0.5em 0",
		textAlign: "center",
	},
	navText: {
		color: "rgb(191, 191, 191)",
		fontFamily: "sans-serif",
		textDecoration: "none",
		fontSize: "1.5em",
		"&:hover": {
			textDecoration: "underline",
			color: "rgb(191, 191, 191)",
		},
	},
});
