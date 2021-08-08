import React, { useEffect, useState } from "react";

export default function ListItem({ id, name, ...props }) {
	const [data, setData] = useState(props);

	useEffect(() => {
		//	console.log("data", data);
	});
	return (
		<div>
			<span onClick={props.func} style={{ fontSize: "2.5em", display: "block", lineHeight: "2" }} key={id}>
				{name}
			</span>
		</div>
	);
}
