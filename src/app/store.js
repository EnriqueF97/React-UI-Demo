import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/user/userSlice";
import companyReducer from "../features/user/companySlice";
import shopCartReducer from "../features/shopCart/shopCartSlice";

export default configureStore({
	reducer: {
		user: userReducer,
		counter: counterReducer,
		company: companyReducer,
		shopCart: shopCartReducer,
	},
});
