import React from "react";
import { useHistory } from "react-router-dom";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";
import { setCurrentUser } from "../features/user/userSlice";
import { setCurrentCompany } from "../features/user/companySlice";

export default function Titulo(props) {
	const count = useSelector((state) => state.counter.value);
	const currentUser = useSelector((state) => state.user.currentUser);
	const dispatch = useDispatch();
	const history = useHistory();

	return (
		<>
			<div>
				<span>User: {currentUser.firstName}</span>
				<span>Count: {count}</span>
			</div>
			<div style={{ display: "block" }}>
				<Button
					fontColor='black'
					backgroundColor='#e0c134'
					aria-label='Decrement value'
					text='Decrement'
					func={() => dispatch(decrement())}
				/>{" "}
				<Button
					text='Increment'
					backgroundColor='#e0c134'
					aria-label='Increment value'
					func={() => dispatch(increment())}
				/>
				<div>
					<Button
						variant='primary'
						text='Ir a counter'
						backgroundColor='#e0c134'
						func={() => {
							history.push("/count");
						}}></Button>
				</div>
			</div>
		</>
	);
}
