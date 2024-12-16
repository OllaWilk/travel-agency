import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Region {
  name: string;
  subregions: string[];
}

interface RegionsState {
  data: Region[];
}

const initialState: RegionsState = {
  data: [],
};

const regionsSlice = createSlice({
  name: 'regions',
  initialState,
  reducers: {
    setRegions(state, action: PayloadAction<Region[]>) {
      state.data = action.payload;
    },
  },
});

export const { setRegions } = regionsSlice.actions;
export default regionsSlice.reducer;
