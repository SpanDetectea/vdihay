import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: {}
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, { payload }) => {
      state.isAuth = true;
      const obj = {
        name: payload.displayName,
        email: payload.email
      }
      state.user = obj;
      // console.log(payload)
    },
    logOut: (state) => {
      state.isAuth = false;
      state.user = {};
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
