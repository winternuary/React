import { configureStore, createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      //sate에서 1 감소
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      // sate를 값만큼 증가시키기
      state.value += action.payload;
    },
  },
});

// Export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
