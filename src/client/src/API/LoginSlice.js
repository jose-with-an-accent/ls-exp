import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
	name: 'login',
	initialState: {
		email: null,
		name: null,

	},
	reducers: {
		signIn: (state, action) => {
			state.email = action.email;
			state.name = action.name;
		}
	}
})
export const {signIn} = loginSlice.actions
export default loginSlice.reducer