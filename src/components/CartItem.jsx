import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem, addItem } from "../features/shopCart/shopCartSlice";
import { createUseStyles } from "react-jss";
import Button from "./Button";

export default function CartItem({ item, ...props }) {
	const classes = useStyles(props);
	const dispatch = useDispatch();

	/**Metodo para hacer un dispatch borrando un item especifico */
	const onDeleteItem = (item) => {
		dispatch(deleteItem(item));
	};

	/**Metodo para hacer un dispatch añadiendo un item a la store */
	const onAddItem = (item) => {
		dispatch(addItem(item));
	};

	return (
		<div className={classes.container}>
			{/* Imagen */}
			<div className={classes.imageContainer}>
				<img className={classes.image} src={item.image} alt='item' />
			</div>
			{/* Nombre del item */}
			<span className={classes.span}>
				{item.name.length > 30 ? item.name.substr(0, 30) + "..." : item.name}
			</span>
			{/* Acciones para el item */}
			<div className={classes.buttonContainer}>
				<Button
					func={() => onAddItem(item)}
					text='+'
					backgroundColor='#0c0575'
					fontColor='#e3e3e3'
					small
					bold
				/>
				<Button
					func={() => onDeleteItem(item)}
					text='Borrar'
					backgroundColor='#5a2166'
					fontColor='#e3e3e3'
					small
					bold
				/>
			</div>
		</div>
	);
}

/**Estilos */
const useStyles = createUseStyles({
	container: {
		color: "black",
		margin: "auto",
		display: "flex",
		background: (props) => (props.idx % 2 !== 0 ? "" : "#424242"),
	},
	span: {
		fontSize: "calc(0.5em + 2vmin)",
		margin: "1vmin",
		color: "#5bc2eb",
		width: "55%",
		display: "inline-block",
	},
	buttonContainer: {
		width: "25%",
		padding: "0 auto",
		display: "flex",
		textAlign: "center",
		alignContent: "center",
		alignItems: "center",
	},
	imageContainer: {
		margin: "1vmin",
		display: "inline-block",
		width: "20%",
		textAlign: "center",
		justifyContent: "justify",
	},
	image: {
		maxHeight: "5vmin",
		borderRadius: "8px",
		objectFit: "contain",
	},
});
