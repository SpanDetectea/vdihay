import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: {},
  isLoading: true,
  reserv: [],
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
        id: payload.uid,
      };
      state.user = obj;
      state.isLoading = false;
    },
    logOut: (state) => {
      state.isAuth = false;
      state.user = {};
      state.isLoading = false;
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    addReserv: (state, { payload }) => {
      const newObj = {
        times: [payload.times[0], payload.times[1]],
        table: payload.table,
      };
      state.reserv.push(newObj);
    },
    deleteReserv: (state, { payload }) => {
      console.log(payload);
      const index = state.reserv.findIndex(
        (res) => JSON.stringify(res.times) === JSON.stringify(payload.times)
      );
      state.reserv = state.reserv.filter((i, id) => id !== index)
      
    },
  },
});

export const { logIn, logOut, setLoading, addReserv, deleteReserv } =
  authSlice.actions;

export default authSlice.reducer;
