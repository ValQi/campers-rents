import { createSlice } from '@reduxjs/toolkit';
import { getAllCampers, getCampersById } from '../selectorsRedux/actions';

const initialState = {
  campers: [],
  camperById: {},
  isLoading: false,
  error: null,
};

const advertSlice = createSlice({
  name: 'advert',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllCampers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCampers.fulfilled, (state, action) => {
        state.campers = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCampersById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCampersById.fulfilled, (state, action) => {
        state.camperById = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCampersById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const advertReducer = advertSlice.reducer;