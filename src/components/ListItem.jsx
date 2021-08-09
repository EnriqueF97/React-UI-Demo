import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";

export default function ListItem({ id, name, func, ...props }) {
	const classes = useStyles(props);

	return (
		<div>
			<span
				onClick={func}
				style={{ fontSize: "calc(10px + 4vmin)", display: "block", lineHeight: "1.5" }}
				key={id}>
				{name}
			</span>
		</div>
	);
}

const useStyles = createUseStyles({});
