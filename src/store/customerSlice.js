import { createSlice } from '@reduxjs/toolkit'

export const customerSlice = createSlice({
	name: 'customer',
	initialState: {
		form: null
	},
	reducers: {
		createForm: (state, action) => {
			console.log(action.payload)
		}
	}
})

export const CustomerAction = customerSlice.actions
// export const classAction = classSlice.actions

export default customerSlice.reducer
