import React from "react";
import { createUseStyles } from "react-jss";
import { deleteAllItems, deleteItem, addItem } from "../features/shopCart/shopCartSlice";
import { useSelector, useDispatch } from "react-redux";
import Button from "./Button";
import CartItem from "./CartItem";

export default function ShopCart(props) {
	const shopCartItems = useSelector((state) => state.shopCart.items);
	const shopCartCount = useSelector((state) => state.shopCart.count);
	const dispatch = useDispatch();
	const classes = useStyles(props);

	/**Funcion para borrar todos los items de la store */
	const deleteItems = () => {
		dispatch(deleteAllItems());
	};
	return (
		<div className={classes.container}>
			{/* Checa si el count de la store es mayor a 0, para mostrar esta vista o la de no hay productos */}
			{shopCartCount > 0 ? (
				<>
					<div className={classes.title}>
						<span>Checkout</span>
					</div>
					{/* Cada elemento que tiene la store, se renderiza con un componente CartItem */}
					<div className={classes.itemList}>
						{shopCartItems.map((item, id) => (
							<CartItem item={item} idx={id}></CartItem>
						))}
						{/* Boton de eliminar todos los items de la store */}
						<Button
							backgroundColor='#910106'
							fontColor='white'
							text='Borrar todos los elementos del carrito'
							func={() => deleteItems()}
							small
						/>
					</div>
				</>
			) : (
				<>
					{/* Si no hay elementos en el carrito */}
					<div style={{ fontSize: "1.5em", margin: "5vmin 0 5vmin" }}>
						<span>¡No tienes ningún elemento en tu carrito!</span>
					</div>
				</>
			)}
		</div>
	);
}
/**Estilos */
const useStyles = createUseStyles({
	container: {
		background: "#2b2b2b",
		borderRadius: "7px",
		border: "3px solid black",
		maxWidth: "90vmin",
		margin: "auto",
		padding: "1vmin",
	},
	title: {
		fontSize: "2.5em",
		textAlign: "center",
	},
	itemList: {
		margin: "0.5vmin 3vmin",
		borderRadius: "7px",
	},
	itemListSecondary: {
		background: "#383636",
	},
});
