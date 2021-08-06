import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		currentUser: {
			firstName: "",
			lastName: "",
		},
	},
	reducers: {
		setCurrentUser: (state, action) => {
			state.currentUser = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
