import { configureStore } from '@reduxjs/toolkit';
import tripsReducer from './slices/tripsSlice';
import filtersReducer from './slices/filtersSlice';
import countriesReducer from './slices/countriesSlice';
import regionsReducer from './slices/regionsSlice';

const store = configureStore({
  reducer: {
    trips: tripsReducer,
    filters: filtersReducer,
    countries: countriesReducer,
    regions: regionsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
