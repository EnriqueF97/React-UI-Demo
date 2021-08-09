import { createSlice } from "@reduxjs/toolkit";
import { array } from "prop-types";

export const shopCartSlice = createSlice({
	name: "shopCart",
	initialState: {
		items: [],
		count: 0,
	},
	reducers: {
		increment: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.count += 1;
		},
		decrement: (state) => {
			if (state.count > 0) state.count -= 1;
		},
		incrementByAmount: (state, action) => {
			state.count += action.payload;
		},
		addItem: (state, action) => {
			state.items.push(action.payload);
			state.count++;
		},
		deleteItem: (state, action) => {
			// TODO
			/** Delete item (action.payload) from items[] */
			const itemPayload = action.payload;
			let tempArray = [...state.items];
			let found = false;
			let count = 0;
			tempArray.forEach((item) => {
				if (item.name === itemPayload.name && !found) {
					tempArray.splice(count, 1);
					state.items = tempArray;
					state.count--;
					found = true;
					return;
				}
				count++;
			});
		},
		deleteAllItems: (state) => {
			let tempArray = [];
			state.items = tempArray;
			state.count = tempArray.length;
		},
	},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, addItem, deleteItem, deleteAllItems } =
	shopCartSlice.actions;

export default shopCartSlice.reducer;
