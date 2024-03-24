import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filterSlice';
import { advertReducer } from './slicer/advertSlice'; 
import { favoritesReducer } from './slicer/favoritesSlice';

export const store = configureStore({
  reducer: {
    advert: advertReducer,
    filter: filterReducer,
    favorites: favoritesReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['advert/getCampers/pending', 'advert/getCampers/fulfilled', 'advert/getCampers/rejected', 'advert/getCampersById/pending', 'catalog/getCampersById/fulfilled', 'catalog/getCampersById/rejected'],
      },
    }),
});
