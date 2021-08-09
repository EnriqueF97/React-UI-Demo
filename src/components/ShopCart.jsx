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

	const deleteItems = () => {
		dispatch(deleteAllItems());
	};
	return (
		<div className={classes.container}>
			{shopCartCount > 0 ? (
				<>
					<div className={classes.title}>
						<span>Checkout</span>
					</div>
					<div className={classes.itemList}>
						{shopCartItems.map((item, id) => (
							<CartItem item={item} idx={id}></CartItem>
						))}
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
					<div style={{ fontSize: "1.5em", margin: "5vmin 0 5vmin" }}>
						<span>¡No tienes ningún elemento en tu carrito!</span>
					</div>
				</>
			)}
			{/* <div>
				<Button
					func={() => deleteItems()}
					text='Borrar todos'
					backgroundColor='#910106'
					fontColor='#e3e3e3'
				/>
			</div> */}
		</div>
	);
}

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
