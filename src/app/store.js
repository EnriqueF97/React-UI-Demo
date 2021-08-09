import { configureStore } from "@reduxjs/toolkit";
import shopCartReducer from "../features/shopCart/shopCartSlice";

export default configureStore({
	reducer: {
		shopCart: shopCartReducer,
	},
});
