import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Trip } from '../types/trip-types';
import tripsList from '../data/trips.json';

interface Filters {
  searchPhrase: string;
  duration: {
    from: number;
    to: number;
  };
  tags: string[];
}

interface TripsState {
  trips: Trip[];
  filters: Filters;
}

/* INITIAL STATE */
const initialState: TripsState = {
  trips: tripsList,
  filters: {
    searchPhrase: '',
    duration: {
      from: 0,
      to: 14,
    },
    tags: [],
  },
};

/* SLICE */
const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    setTrips(state, action) {
      state.trips = action.payload;
    },
    setSearchPhrase(state, action) {
      state.filters.searchPhrase = action.payload;
    },
    setDuration(state, action) {
      state.filters.duration = action.payload;
    },
    setTags(state, action) {
      state.filters.tags = action.payload;
    },
  },
});

/* ACTIONS */
export const { setTrips, setSearchPhrase, setDuration, setTags } =
  tripsSlice.actions;

/* SELECTORS */

export const getAllTrips = (state: RootState) => state.trips.trips;

export const getFilteredTrips = (state: RootState) => {
  let output = state.trips.trips;

  // filter by search phrase
  if (state.trips.filters.searchPhrase) {
    const pattern = new RegExp(state.trips.filters.searchPhrase, 'i');
    output = output.filter((trip) => pattern.test(trip.name));
  }

  // TODO - filter by duration

  // TODO - filter by tags

  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = (state: RootState, tripId: string) => {
  // TODO - filter trips by tripId
  console.log('filtering trips by tripId:', tripId);
};

export const getTripsForCountry = (state: RootState, countryCode: string) => {
  // TODO - filter trips by countryCode
  console.log('filtering trips by countryCode:', countryCode);
};

export default tripsSlice.reducer;
