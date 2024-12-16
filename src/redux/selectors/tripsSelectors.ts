import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { TripType } from 'types/trip-types';

export const getAllTrips = (state: RootState) => state.trips;

// export const getFilteredTrips = (state: RootState) => {
//   let output = state.trips.trips;

//   // filter by search phrase
//   if (state.trips.filters.searchPhrase) {
//     const pattern = new RegExp(state.trips.filters.searchPhrase, 'i');
//     output = output.filter((trip) => pattern.test(trip.name));
//   }

//   // TODO - filter by duration

//   // TODO - filter by tags

//   // TODO - sort by cost descending (most expensive goes first)

//   return output;
// };

export const getTripById = (state: RootState, tripId: string) => {
  const filtered = state.trips.filter((trip) => trip.id == tripId);
  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : { error: true };
};

export const getTripsForCountry = (countryCode: string) => {
  const filteredTrips = createSelector([getAllTrips], (trips: TripType[]) =>
    trips.filter((trip) => trip.country.code === countryCode)
  );
  return filteredTrips;
};
