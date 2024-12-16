import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  searchPhrase: string;
  tags: string[];
  duration: {
    from: number;
    to: number;
  };
}

const initialState: FiltersState = {
  searchPhrase: '',
  tags: [],
  duration: {
    from: 1,
    to: 14,
  },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchPhrase(state, action: PayloadAction<string>) {
      state.searchPhrase = action.payload;
    },
    setTags(state, action: PayloadAction<string[]>) {
      state.tags = action.payload;
    },
    setDuration(state, action: PayloadAction<{ from: number; to: number }>) {
      state.duration = action.payload;
    },
  },
});

export const { setSearchPhrase, setTags, setDuration } = filtersSlice.actions;
export default filtersSlice.reducer;

// /* SELECTORS */

// export const getAllFilters = ({ filters }) => filters;

// /* ACTIONS */

// // action name creator
// const reducerName = 'filters';
// const createActionName = (name) => `app/${reducerName}/${name}`;

// // action types
// export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// // TODO - add other action types

// // action creators
// export const changeSearchPhrase = (payload) => ({
//   payload,
//   type: CHANGE_PHRASE,
// });
// // TODO - add other action creators

// // reducer
// export function reducer(statePart = [], action = {}) {
//   switch (action.type) {
//     case CHANGE_PHRASE:
//       return {
//         ...statePart,
//         searchPhrase: action.payload,
//       };
//     // TODO - handle other action types
//     default:
//       return statePart;
//   }
// }
