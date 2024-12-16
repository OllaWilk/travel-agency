import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountriesType } from '../../types/country-types';

/* SLICE */
const countriesSlice = createSlice({
  name: 'countries',
  initialState: [] as CountriesType[],
  reducers: {
    setCountries(state, action: PayloadAction<CountriesType[]>) {
      return action.payload;
    },
  },
});

export const { setCountries } = countriesSlice.actions;
export default countriesSlice.reducer;
