import { createSlice } from '@reduxjs/toolkit';

const stockSlice = createSlice({
  name: 'stock',
  initialState: {
    selectedStock: 'bitcoin',
  },
  reducers: {
    setSelectedStock(state, action) {
      state.selectedStock = action.payload;
    },
  },
});

export const { setSelectedStock } = stockSlice.actions;
export default stockSlice.reducer;

