import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0, // Başlangıç değerini 0 olarak değiştiriyoruz
  },
  reducers: {
    increment: (state) => {
      state.value += 1; // Artırma işlemini gerçekleştiriyoruz
    },
    decrement: (state) => {
      state.value -= 1; // Azaltma işlemini gerçekleştiriyoruz
    },
  },
});

export const { increment, decrement } = counterSlice.actions; // Eylemleri dışa aktarıyoruz
export default counterSlice.reducer;
