import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action) {
      const camper = action.payload;
      if (!state.favorites.some(item => item._id === camper._id)) {
        state.favorites.push(camper);
      }
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeFavorite(state, action) {
      const camperToRemove = action.payload;
      state.favorites = state.favorites.filter(camper => camper._id !== camperToRemove._id);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
