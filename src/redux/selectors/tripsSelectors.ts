import { RootState } from 'redux/store';

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
  // TODO - filter trips by tripId
  console.log('filtering trips by tripId:', tripId);
};

export const getTripsForCountry = (state: RootState, countryCode: string) => {
  // TODO - filter trips by countryCode
  console.log('filtering trips by countryCode:', countryCode);
};
