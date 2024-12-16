import { createSlice } from '@reduxjs/toolkit';

interface FiltersState {
  searchPhrase: string;
  duration: {
    from: number;
    to: number;
  };
  tags: string[];
}

const initialState: FiltersState = {
  searchPhrase: '',
  duration: {
    from: 1,
    to: 14,
  },
  tags: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    // TODO - filter by phrase
    setSearchPhrase() {},
    // TODO - filter by duration
    setDuration() {},
    // TODO - filter by tags
    setTags() {},
  },
});

export const { setSearchPhrase, setDuration, setTags } = filtersSlice.actions;
export default filtersSlice.reducer;
