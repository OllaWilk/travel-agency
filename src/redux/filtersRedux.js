/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const addTag = payload => ({payload, type: ADD_TAG});
export const removeTag = payload => ({payload, type: REMOVE_TAG});
export const changeDuration = payload => ({payload, type: CHANGE_DURATION});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    case ADD_TAG:
      return {
        ...statePart,
        tags: action.payload,
      };
    case REMOVE_TAG:
      return {
        ...statePart,
        tags: action.payload,
      };
    case CHANGE_DURATION:
      if (action.payload.type == 'from') {
        return {
          ...statePart,
          duration: {
            to: statePart.duration.to,
            from: parseInt(action.payload.value),
          },
        };
      }
      else {
        return {
          ...statePart,
          duration: {
            to: parseInt(action.payload.value),
            form: statePart.duration.from,
          },
        };
      }

    default:
      return statePart;
  }
}
