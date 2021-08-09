import React from "react";
import { createUseStyles } from "react-jss";

export default function ListItem({ id, name, func, ...props }) {
	const classes = useStyles(props);

	return (
		<div>
			<span className={classes.span} onClick={func} key={id}>
				{name}
			</span>
		</div>
	);
}

/**Estilos */
const useStyles = createUseStyles({
	span: {
		fontSize: "calc(10px + 4vmin)",
		display: "block",
		lineHeight: "1.5",
		borderRadius: "7px",
		"&:hover": {
			background: "#2f343d",
			cursor: "pointer",
			transition: "background .2s",
		},
	},
});
