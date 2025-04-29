import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: {},
  isLoading: true
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, { payload }) => {
      state.isAuth = true;
      const obj = {
        name: payload.displayName,
        email: payload.email,
        id: payload.uid
        // name: payload.displayName,
        // email: payload.email,
        // id: payload.uid
      }
      state.user = obj;
      state.isLoading = false;
      // console.log(payload)
    },
    logOut: (state) => {
      state.isAuth = false;
      state.user = {};
      state.isLoading = false;
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload; // true или false
    },
  },
});

export const { logIn, logOut, setLoading } = authSlice.actions;

export default authSlice.reducer;
