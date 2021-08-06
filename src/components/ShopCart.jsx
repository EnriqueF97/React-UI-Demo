import React from "react";

import { useSelector, useDispatch } from "react-redux";

export default function ShopCart() {
	const count = useSelector((state) => state.counter.value);
	return (
		<div>
			<h3>Items en el carrito: {count}</h3>
		</div>
	);
}
