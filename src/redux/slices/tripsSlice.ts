import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TripType } from '../../types/trip-types';

const tripsSlice = createSlice({
  name: 'trips',
  initialState: [] as TripType[],
  reducers: {
    setTrips(state, action: PayloadAction<TripType[]>) {
      return action.payload;
    },
    // setSearchPhrase(state, action) {
    //   state.filters.searchPhrase = action.payload;
    // },
    // setDuration(state, action) {
    //   state.filters.duration = action.payload;
    // },
    // setTags(state, action) {
    //   state.filters.tags = action.payload;
    // },
  },
});

export const { setTrips } = tripsSlice.actions;
export default tripsSlice.reducer;
