import { RootState } from '../store';

/* SELECTORS */

export const getAllCountries = (state: RootState) => state.countries;
export const selectRegions = (state: RootState) =>
  Array.from(
    new Set(state.countries.map((country) => country.region).filter(Boolean))
  );
export const selectSubregions = (state: RootState, region: string) =>
  Array.from(
    new Set(
      state.countries.filter((c) => c.region === region).map((c) => c.subregion)
    )
  );

// export const getCountryByCode = (countries, countryCode) => countries[countryCode];
