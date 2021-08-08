import React from "react";
import { deleteAll } from "../features/shopCart/shopCartSlice";
import { useSelector, useDispatch } from "react-redux";
import Button from "./Button";

export default function ShopCart() {
	const shopCart = useSelector((state) => state.shopCart.items);
	const dispatch = useDispatch();

	const deleteItems = () => {
		dispatch(deleteAll());
	};
	return (
		<div>
			<h3>Items en el carrito:</h3>
			<ul>
				{shopCart.map((item) => (
					<li>{item.name}</li>
				))}
			</ul>
			<div>
				<Button
					func={() => deleteItems()}
					text='Borrar todos'
					backgroundColor='#910106'
					fontColor='#e3e3e3'
				/>
			</div>
		</div>
	);
}
