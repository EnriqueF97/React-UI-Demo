import React, { useEffect, useState } from "react";
import { addItem } from "../features/shopCart/shopCartSlice";
import { useDispatch } from "react-redux";
import { createUseStyles } from "react-jss";
import Logo from "../assets/LogoFit.png";
import Button from "./Button";

export default function DisplayFullItem({ data }) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [imageUrl, setImageUrl] = useState("");

	useEffect(() => {
		setImageUrl(data.image);
	}, [data]);

	const addItemToStore = (data) => {
		if (data.image === undefined) data.image = Logo;
		dispatch(addItem(data));
	};

	const printArray = (data) => {
		//console.log("printing", data);
		const listItems = data.map((item) => <span style={{ fontSize: "0.6em", display: "block" }}>{item}</span>);
		//console.log("printing", listItems[0]);
		return listItems.length;
	};

	const printObject = (data) => {
		const listItems = Object.keys(data).map((key) => (
			<>
				{typeof data[key] !== "object" && data[key].constructor !== Array ? (
					<div className={classes.spanContainer}>
						{/* data[key] is just a simple string */}
						{key !== "image" && key !== "url" && key !== "created" && key !== "id" ? (
							<>
								<span className={classes.spanKey}>{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
								<span className={classes.spanContent}>{data[key]}</span>
							</>
						) : (
							<></>
						)}
					</div>
				) : (
					<>
						{Array.isArray(data[key]) ? (
							<div className={classes.spanContainer}>
								{/* data[key] is an array */}
								<span className={classes.spanKey}>
									{key.charAt(0).toUpperCase() + key.slice(1)}
									{":"}
								</span>
								<span className={classes.spanContent} key={`${data[key]}Array`}>
									{printArray(data[key])}
								</span>
							</div>
						) : (
							<div className={classes.spanContainer}>
								{/* data[key] is an object */}
								{printObject(data[key])}
							</div>
						)}
					</>
				)}
			</>
		));
		//console.log("printing object", data);
		return <span>{listItems}</span>;
	};

	const sparePrintObjectFunction = () => {
		const listItems = Object.keys(data).map((key) => (
			<>
				{typeof data[key] !== "object" && data[key].constructor !== Array ? (
					<div className={classes.spanContainer}>
						{/* data[key] is just a simple string */}
						{key !== "image" && key !== "url" && key !== "created" && key !== "id" ? (
							<>
								<span className={classes.spanKey}>{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
								<span className={classes.spanContent}>{data[key]}</span>
							</>
						) : (
							<></>
						)}
					</div>
				) : (
					<>
						{Array.isArray(data[key]) ? (
							<div className={classes.spanContainer}>
								{/* data[key] is an array */}
								<span className={classes.spanKey}>
									{key.charAt(0).toUpperCase() + key.slice(1)}
									{":"}
								</span>
								<span className={classes.spanContent} key={`${data[key]}Array`}>
									{printArray(data[key])}
								</span>
							</div>
						) : (
							<div className={classes.spanContainer}>
								{/* data[key] is an object */}
								<span className={classes.spanKey}>{key}:</span>
								{printObject(data[key])}
							</div>
						)}
					</>
				)}
			</>
		));
		//console.log("printing object", data);
		return <ul>{listItems}</ul>;
	};

	return (
		<div className={classes.container}>
			<div className={classes.imageContainer}>
				<img
					//src={Logo}
					src={imageUrl !== undefined ? imageUrl : Logo}
					className={classes[`image${imageUrl !== undefined ? "" : "Logo"}`]}
					alt={"Source: Rick & Morty API"}
				/>
			</div>
			<div style={{}}>
				<div className={classes.infoContainer}>{printObject(data)}</div>
			</div>
			<div
				style={{
					marginLeft: "0 5vmin",
					textAlign: "center",
					justifyContent: "center",
					display: "inline-block",
				}}>
				<Button
					backgroundColor='#d2ff2e'
					text='Añadir al carrito'
					func={() => {
						addItemToStore(data);
					}}
				/>
			</div>
		</div>
	);
}

const useStyles = createUseStyles({
	container: {
		padding: "2vmin",
		margin: 0,
		display: "inline-block",
		border: "3px solid black",
		borderRadius: "7px",
		background: "#2b2b2b",
	},
	infoContainer: {
		lineHeight: "1.5",
		textAlign: "center",
		display: "inline-block",
	},
	imageContainer: {
		margin: "1vmin",
	},
	image: {
		maxHeight: "30vh",
		border: "3px solid black",
		borderRadius: "8px",
		objectFit: "contain",
	},
	imageLogo: {
		maxHeight: "20vmin",
		borderRadius: "8px",
		objectFit: "contain",
	},
	spanContainer: {
		display: "block",
	},
	spanKey: {
		fontSize: "calc(10px + 2vmin)",
		padding: "0 5px",
	},
	spanContent: {
		fontSize: "calc(5px + 2vmin)",
		color: "#0ecf00",
	},
});
