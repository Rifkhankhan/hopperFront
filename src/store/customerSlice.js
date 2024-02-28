import { createSlice } from '@reduxjs/toolkit'

export const customerSlice = createSlice({
	name: 'customer',
	initialState: {
		form: null,
		notification: false
	},
	reducers: {
		createForm: (state, action) => {
			console.log(action.payload)
		},

		getNotification: (state, action) => {
			console.log(action.payload)
			if (action.payload.success) state.notification = true
		}
	}
})

export const CustomerAction = customerSlice.actions
// export const classAction = classSlice.actions

export default customerSlice.reducer
