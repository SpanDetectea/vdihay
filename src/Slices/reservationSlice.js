import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: [
    {
      id: 1,
      peopleCount: 4,
      reservedTimes: [
        ["2025-04-11T18:00:00", "2025-04-11T20:00:00"],
        ["2025-04-12T17:30:00", "2025-04-12T19:00:00"],
      ],
      isVip: false,
    },
    {
      id: 2,
      peopleCount: 6,
      reservedTimes: [["2025-04-11T19:30:00", "2025-04-11T21:00:00"]],
      isVip: false,
    },
    {
      id: 3,
      peopleCount: 3,
      reservedTimes: [],
      isVip: false,
    },
    {
      id: 4,
      peopleCount: 5,
      reservedTimes: [
        ["2025-04-11T17:00:00", "2025-04-11T19:00:00"],
        ["2025-04-13T20:00:00", "2025-04-13T22:00:00"],
      ],
      isVip: false,
    },
    {
      id: 5,
      peopleCount: 2,
      reservedTimes: [["2025-04-11T18:30:00", "2025-04-11T19:30:00"]],
      isVip: false,
    },
    {
      id: 6,
      peopleCount: 7,
      reservedTimes: [["2025-04-11T19:00:00", "2025-04-11T21:00:00"]],
      isVip: false,
    },
    {
      id: 7,
      peopleCount: 4,
      reservedTimes: [],
      isVip: false,
    },
    {
      id: 8,
      peopleCount: 7,
      reservedTimes: [["2025-04-11T20:30:00", "2025-04-11T22:30:00"]],
      isVip: false,
    },
    {
      id: 9,
      peopleCount: 3,
      reservedTimes: [["2025-04-11T18:15:00", "2025-04-11T19:45:00"]],
      isVip: false,
    },
    {
      id: 10,
      peopleCount: 6,
      reservedTimes: [],
      isVip: false,
    },
    {
      id: 11,
      peopleCount: 5,
      reservedTimes: [
        ["2025-04-11T19:45:00", "2025-04-11T21:45:00"],
        ["2025-04-12T22:00:00", "2025-04-12T23:30:00"],
      ],
      isVip: false,
    },
    {
      id: 12,
      peopleCount: 5,
      reservedTimes: [["2025-04-11T20:00:00", "2025-04-11T21:00:00"]],
      isVip: true,
    },
    {
      id: 13,
      peopleCount: 2,
      reservedTimes: [],
      isVip: true,
    },
    {
      id: 14,
      peopleCount: 7,
      reservedTimes: [
        ["2025-04-11T17:30:00", "2025-04-11T19:00:00"],
        ["2025-04-13T18:00:00", "2025-04-13T20:00:00"],
      ],
      isVip: true,
    },
  ],
};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit позволяет нам писать "мутабельную" логику в reducer'ах.
      // Это не изменяет состояние(state) напрямую, потому что внутри используется библиотека Immer,
      // которая следит за изменениями в "черновом state" и создает новое
      // неизменное состояние на основе этих изменений
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Функция действия генерируется на каждую функцию релюсера(reducer), определённую в createSlice
export const { increment, decrement, incrementByAmount } =
  reservationSlice.actions;

export default reservationSlice.reducer;
