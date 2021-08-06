import { createSlice } from "@reduxjs/toolkit";

export const companySlice = createSlice({
	name: "counter",
	initialState: {
		currentCompany: {},
	},
	reducers: {
		setCurrentCompany: (state, action) => {
			state.currentCompany = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setCurrentCompany } = companySlice.actions;

export default companySlice.reducer;
