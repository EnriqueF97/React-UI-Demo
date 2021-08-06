import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "./Button";

export default function CountDisplay() {
	const count = useSelector((state) => state.counter.value);
	const currentUser = useSelector((state) => state.user.currentUser);
	const currentCompany = useSelector((state) => state.company.currentCompany);
	const history = useHistory();
	return (
		<div>
			<span style={{ fontSize: "calc(10px + 2vmin)" }}>Count: {count}</span>
			<p style={{ fontSize: "calc(10px + 2vmin)" }}>
				CurrentUser: {currentUser.firstName} {currentUser.lastName}
			</p>
			<span style={{ fontSize: "calc(10px + 2vmin)" }}>CurrentCompany: {currentCompany.nombre} </span>

			<div>
				<Button
					backgroundColor='white'
					text='Ir a titulo'
					func={() => {
						history.push("/");
					}}
				/>
			</div>
		</div>
	);
}
