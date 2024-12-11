import { configureStore } from '@reduxjs/toolkit';
import tripsReducer from './tripsReducer';

// import tripList from '../data/trips.json';
// import globalReducer from './globalRedux';
// import filtersReducer from './filtersRedux';

const store = configureStore({
  reducer: {
    trips: tripsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
