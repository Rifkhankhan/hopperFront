import { createSlice } from '@reduxjs/toolkit';

export const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    form: null,
    notification: false
  },
  reducers: {
    createForm: (state, action) => {},

    getNotification: (state, action) => {
      state.notification = true;
    }
  }
});

export const CustomerAction = customerSlice.actions;
// export const classAction = classSlice.actions

export default customerSlice.reducer;
