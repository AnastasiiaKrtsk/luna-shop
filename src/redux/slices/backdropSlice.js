//backdropSlice.js
import { createSlice } from '@reduxjs/toolkit';

const backdropSlice = createSlice({
  name: 'backdrop',
  initialState: { isBackdropOpen: false },
  reducers: {
    toggleAction: (state) => {
      state.isBackdropOpen = !state.isBackdropOpen;
    },
  },
});

export const backdropReducer = backdropSlice.reducer;
export const { toggleAction } = backdropSlice.actions;
