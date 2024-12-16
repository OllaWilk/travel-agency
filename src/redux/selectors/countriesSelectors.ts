import { CountriesType } from 'types/country-types';
import { RootState } from '../store';

/* SELECTORS */

export const getAllCountries = (state: RootState) => state.countries;

export const getCountryByCode =
  (countryCode: string) =>
  (state: RootState): CountriesType | null => {
    const country = state.countries[countryCode];
    console.log('retrieving country by code:', countryCode, country);
    return country || null;
  };
// export const selectRegions = (state: RootState) =>
//   Array.from(
//     new Set(state.countries.map((country) => country.region).filter(Boolean))
//   );
// export const selectSubregions = (state: RootState, region: string) =>
//   Array.from(
//     new Set(
//       state.countries.filter((c) => c.region === region).map((c) => c.subregion)
//     )
//   );
