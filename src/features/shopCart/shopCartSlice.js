import { createSlice } from "@reduxjs/toolkit";
import { array } from "prop-types";

export const shopCartSlice = createSlice({
	name: "shopCart",
	initialState: {
		items: [
			{
				id: 1,
				name: "Rick Sanchez",
				status: "Alive",
				species: "Human",
				type: "",
				gender: "Male",
				origin: {
					name: "Earth (C-137)",
					url: "https://rickandmortyapi.com/api/location/1",
				},
				location: {
					name: "Earth (Replacement Dimension)",
					url: "https://rickandmortyapi.com/api/location/20",
				},
				image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
				episode: [
					"https://rickandmortyapi.com/api/episode/1",
					"https://rickandmortyapi.com/api/episode/2",
					"https://rickandmortyapi.com/api/episode/3",
					"https://rickandmortyapi.com/api/episode/4",
					"https://rickandmortyapi.com/api/episode/5",
					"https://rickandmortyapi.com/api/episode/6",
					"https://rickandmortyapi.com/api/episode/7",
					"https://rickandmortyapi.com/api/episode/8",
					"https://rickandmortyapi.com/api/episode/9",
					"https://rickandmortyapi.com/api/episode/10",
					"https://rickandmortyapi.com/api/episode/11",
					"https://rickandmortyapi.com/api/episode/12",
					"https://rickandmortyapi.com/api/episode/13",
					"https://rickandmortyapi.com/api/episode/14",
					"https://rickandmortyapi.com/api/episode/15",
					"https://rickandmortyapi.com/api/episode/16",
					"https://rickandmortyapi.com/api/episode/17",
					"https://rickandmortyapi.com/api/episode/18",
					"https://rickandmortyapi.com/api/episode/19",
					"https://rickandmortyapi.com/api/episode/20",
					"https://rickandmortyapi.com/api/episode/21",
					"https://rickandmortyapi.com/api/episode/22",
					"https://rickandmortyapi.com/api/episode/23",
					"https://rickandmortyapi.com/api/episode/24",
					"https://rickandmortyapi.com/api/episode/25",
					"https://rickandmortyapi.com/api/episode/26",
					"https://rickandmortyapi.com/api/episode/27",
					"https://rickandmortyapi.com/api/episode/28",
					"https://rickandmortyapi.com/api/episode/29",
					"https://rickandmortyapi.com/api/episode/30",
					"https://rickandmortyapi.com/api/episode/31",
					"https://rickandmortyapi.com/api/episode/32",
					"https://rickandmortyapi.com/api/episode/33",
					"https://rickandmortyapi.com/api/episode/34",
					"https://rickandmortyapi.com/api/episode/35",
					"https://rickandmortyapi.com/api/episode/36",
					"https://rickandmortyapi.com/api/episode/37",
					"https://rickandmortyapi.com/api/episode/38",
					"https://rickandmortyapi.com/api/episode/39",
					"https://rickandmortyapi.com/api/episode/40",
					"https://rickandmortyapi.com/api/episode/41",
				],
				url: "https://rickandmortyapi.com/api/character/1",
				created: "2017-11-04T18:48:46.250Z",
			},
			{
				id: 2,
				name: "Morty Smith",
				status: "Alive",
				species: "Human",
				type: "",
				gender: "Male",
				origin: {
					name: "Earth (C-137)",
					url: "https://rickandmortyapi.com/api/location/1",
				},
				location: {
					name: "Earth (Replacement Dimension)",
					url: "https://rickandmortyapi.com/api/location/20",
				},
				image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
				episode: [
					"https://rickandmortyapi.com/api/episode/1",
					"https://rickandmortyapi.com/api/episode/2",
					"https://rickandmortyapi.com/api/episode/3",
					"https://rickandmortyapi.com/api/episode/4",
					"https://rickandmortyapi.com/api/episode/5",
					"https://rickandmortyapi.com/api/episode/6",
					"https://rickandmortyapi.com/api/episode/7",
					"https://rickandmortyapi.com/api/episode/8",
					"https://rickandmortyapi.com/api/episode/9",
					"https://rickandmortyapi.com/api/episode/10",
					"https://rickandmortyapi.com/api/episode/11",
					"https://rickandmortyapi.com/api/episode/12",
					"https://rickandmortyapi.com/api/episode/13",
					"https://rickandmortyapi.com/api/episode/14",
					"https://rickandmortyapi.com/api/episode/15",
					"https://rickandmortyapi.com/api/episode/16",
					"https://rickandmortyapi.com/api/episode/17",
					"https://rickandmortyapi.com/api/episode/18",
					"https://rickandmortyapi.com/api/episode/19",
					"https://rickandmortyapi.com/api/episode/20",
					"https://rickandmortyapi.com/api/episode/21",
					"https://rickandmortyapi.com/api/episode/22",
					"https://rickandmortyapi.com/api/episode/23",
					"https://rickandmortyapi.com/api/episode/24",
					"https://rickandmortyapi.com/api/episode/25",
					"https://rickandmortyapi.com/api/episode/26",
					"https://rickandmortyapi.com/api/episode/27",
					"https://rickandmortyapi.com/api/episode/28",
					"https://rickandmortyapi.com/api/episode/29",
					"https://rickandmortyapi.com/api/episode/30",
					"https://rickandmortyapi.com/api/episode/31",
					"https://rickandmortyapi.com/api/episode/32",
					"https://rickandmortyapi.com/api/episode/33",
					"https://rickandmortyapi.com/api/episode/34",
					"https://rickandmortyapi.com/api/episode/35",
					"https://rickandmortyapi.com/api/episode/36",
					"https://rickandmortyapi.com/api/episode/37",
					"https://rickandmortyapi.com/api/episode/38",
					"https://rickandmortyapi.com/api/episode/39",
					"https://rickandmortyapi.com/api/episode/40",
					"https://rickandmortyapi.com/api/episode/41",
				],
				url: "https://rickandmortyapi.com/api/character/2",
				created: "2017-11-04T18:50:21.651Z",
			},
			{
				id: 3,
				name: "Summer Smith",
				status: "Alive",
				species: "Human",
				type: "",
				gender: "Female",
				origin: {
					name: "Earth (Replacement Dimension)",
					url: "https://rickandmortyapi.com/api/location/20",
				},
				location: {
					name: "Earth (Replacement Dimension)",
					url: "https://rickandmortyapi.com/api/location/20",
				},
				image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
				episode: [
					"https://rickandmortyapi.com/api/episode/6",
					"https://rickandmortyapi.com/api/episode/7",
					"https://rickandmortyapi.com/api/episode/8",
					"https://rickandmortyapi.com/api/episode/9",
					"https://rickandmortyapi.com/api/episode/10",
					"https://rickandmortyapi.com/api/episode/11",
					"https://rickandmortyapi.com/api/episode/12",
					"https://rickandmortyapi.com/api/episode/14",
					"https://rickandmortyapi.com/api/episode/15",
					"https://rickandmortyapi.com/api/episode/16",
					"https://rickandmortyapi.com/api/episode/17",
					"https://rickandmortyapi.com/api/episode/18",
					"https://rickandmortyapi.com/api/episode/19",
					"https://rickandmortyapi.com/api/episode/20",
					"https://rickandmortyapi.com/api/episode/21",
					"https://rickandmortyapi.com/api/episode/22",
					"https://rickandmortyapi.com/api/episode/23",
					"https://rickandmortyapi.com/api/episode/24",
					"https://rickandmortyapi.com/api/episode/25",
					"https://rickandmortyapi.com/api/episode/26",
					"https://rickandmortyapi.com/api/episode/27",
					"https://rickandmortyapi.com/api/episode/29",
					"https://rickandmortyapi.com/api/episode/30",
					"https://rickandmortyapi.com/api/episode/31",
					"https://rickandmortyapi.com/api/episode/32",
					"https://rickandmortyapi.com/api/episode/33",
					"https://rickandmortyapi.com/api/episode/34",
					"https://rickandmortyapi.com/api/episode/35",
					"https://rickandmortyapi.com/api/episode/36",
					"https://rickandmortyapi.com/api/episode/38",
					"https://rickandmortyapi.com/api/episode/39",
					"https://rickandmortyapi.com/api/episode/40",
					"https://rickandmortyapi.com/api/episode/41",
				],
				url: "https://rickandmortyapi.com/api/character/3",
				created: "2017-11-04T19:09:56.428Z",
			},
			{
				id: 4,
				name: "Beth Smith",
				status: "Alive",
				species: "Human",
				type: "",
				gender: "Female",
				origin: {
					name: "Earth (Replacement Dimension)",
					url: "https://rickandmortyapi.com/api/location/20",
				},
				location: {
					name: "Earth (Replacement Dimension)",
					url: "https://rickandmortyapi.com/api/location/20",
				},
				image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
				episode: [
					"https://rickandmortyapi.com/api/episode/6",
					"https://rickandmortyapi.com/api/episode/7",
					"https://rickandmortyapi.com/api/episode/8",
					"https://rickandmortyapi.com/api/episode/9",
					"https://rickandmortyapi.com/api/episode/10",
					"https://rickandmortyapi.com/api/episode/11",
					"https://rickandmortyapi.com/api/episode/12",
					"https://rickandmortyapi.com/api/episode/14",
					"https://rickandmortyapi.com/api/episode/15",
					"https://rickandmortyapi.com/api/episode/16",
					"https://rickandmortyapi.com/api/episode/18",
					"https://rickandmortyapi.com/api/episode/19",
					"https://rickandmortyapi.com/api/episode/20",
					"https://rickandmortyapi.com/api/episode/21",
					"https://rickandmortyapi.com/api/episode/22",
					"https://rickandmortyapi.com/api/episode/23",
					"https://rickandmortyapi.com/api/episode/24",
					"https://rickandmortyapi.com/api/episode/25",
					"https://rickandmortyapi.com/api/episode/26",
					"https://rickandmortyapi.com/api/episode/27",
					"https://rickandmortyapi.com/api/episode/28",
					"https://rickandmortyapi.com/api/episode/29",
					"https://rickandmortyapi.com/api/episode/30",
					"https://rickandmortyapi.com/api/episode/31",
					"https://rickandmortyapi.com/api/episode/32",
					"https://rickandmortyapi.com/api/episode/33",
					"https://rickandmortyapi.com/api/episode/34",
					"https://rickandmortyapi.com/api/episode/35",
					"https://rickandmortyapi.com/api/episode/36",
					"https://rickandmortyapi.com/api/episode/38",
					"https://rickandmortyapi.com/api/episode/39",
					"https://rickandmortyapi.com/api/episode/40",
					"https://rickandmortyapi.com/api/episode/41",
				],
				url: "https://rickandmortyapi.com/api/character/4",
				created: "2017-11-04T19:22:43.665Z",
			},
		],
		count: 4,
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
