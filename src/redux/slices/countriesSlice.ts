import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountriesType } from '../../types/country-types';

/* SLICE */
const countriesSlice = createSlice({
  name: 'countries',
  initialState: {} as Record<string, CountriesType>,
  reducers: {
    setCountries(state, action: PayloadAction<Record<string, CountriesType>>) {
      return action.payload;
    },
  },
});

export const { setCountries } = countriesSlice.actions;
export default countriesSlice.reducer;
