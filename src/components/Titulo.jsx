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
				<Button
					fontColor='black'
					backgroundColor='#e0c134'
					aria-label='Decrement value'
					text='Decrement'
					func={() => dispatch(decrement())}
				/>
				<div>
					<span>User: {currentUser.firstName}</span>
				</div>
				<div>
					<span>Count: {count}</span>
				</div>
				<Button text='Increment' aria-label='Increment value' func={() => dispatch(increment())} />

				<div>
					<div className='col' style={{ alignItems: "center" }}></div>
					<div className='col'>
						<Button
							text='Set Current User'
							backgroundColor='#e8cb48'
							func={() =>
								dispatch(
									setCurrentUser({
										firstName: "Enrique",
										lastName: "Favila",
									})
								)
							}></Button>
						<Button
							text='Set Current Company'
							backgroundColor='#e8cb48'
							func={() =>
								dispatch(
									setCurrentCompany({
										nombre: "TestCompany",
										companyUsers: [
											{
												user1: "user1",
											},
											{
												user2: "user2",
											},
										],
									})
								)
							}
						/>
					</div>
				</div>

				<div>
					<div className='col' xs={12}>
						<Button
							variant='primary'
							text='Ir a counter'
							func={() => {
								history.push("/count");
							}}></Button>
					</div>
				</div>
			</div>
		</>
	);
}
