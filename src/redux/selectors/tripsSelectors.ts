import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { TripType } from 'types/trip-types';
import { getAllCountries } from './countriesSelectors';
import { CountriesType } from 'types/country-types';

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

export const getTripById =
  (tripId: string) =>
  (state: RootState): TripType | null => {
    const filtered = state.trips.filter((trip) => trip.id === tripId);
    return filtered.length ? filtered[0] : null;
  };

export const getTripsForCountry = (countryCode: string) => {
  const filteredTrips = createSelector([getAllTrips], (trips: TripType[]) =>
    trips.filter((trip) => trip.country.code === countryCode)
  );
  return filteredTrips;
};

export const getTripAndCountry = (tripId: string) =>
  createSelector(
    [getTripById(tripId), getAllCountries],
    (trip: TripType | null, countries: Record<string, CountriesType>) => {
      if (!trip) return { trip: null, country: null };
      const country = countries[trip.country.code] || null;
      return { trip, country };
    }
  );
