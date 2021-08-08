import React, { useEffect } from "react";
import { addItem } from "../features/shopCart/shopCartSlice";
import { useDispatch } from "react-redux";
import { createUseStyles } from "react-jss";
import Button from "./Button";

export default function DisplayFullItem({ data }) {
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		//setKeys(Object.keys(data));
	}, []);

	const addItemToStore = (data) => {
		dispatch(addItem(data));
	};

	const printArray = (data) => {
		console.log("printing", data);
		const listItems = data.map((item) => <span style={{ fontSize: "0.6em", display: "block" }}>{item}</span>);
		return listItems;
	};

	const printObject = (data) => {
		const listItems = Object.keys(data).map((key) => (
			<>
				{typeof data[key] !== "object" && data[key].constructor !== Array ? (
					<li>
						{key}:{data[key]}
					</li>
				) : (
					<>
						{data[key].constructor === Array ? (
							<>
								{key}:<span>{printArray(data[key])}</span>
							</>
						) : (
							<>
								{key}:{printObject(data[key])}
							</>
						)}
					</>
				)}
			</>
		));
		console.log("printing object", data);
		return <ul>{listItems}</ul>;
	};

	return (
		<div style={{ border: "2px solid lightGray" }}>
			<span className={classes.spanKey}>Nombre:</span>
			<span className={classes.spanContent}>Rick Sanchez</span>
			{printObject(data)}
			<Button
				backgroundColor='#0ac404'
				text='Añadir al carrito'
				func={() => {
					addItemToStore(data);
				}}
			/>
		</div>
	);
}

const useStyles = createUseStyles({
	spanKey: {
		fontSize: "calc(10px + 2vmin)",
		padding: "0 5px",
	},
	spanContent: {
		fontSize: "calc(10px + 1vmin)",
	},
});
