import { CREATE_COUNTRY, FETCH_COUNTRIES } from "./types";

const initialState = {
  countries: [],
  fetchedCountries: [],
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COUNTRY:
      // return{...state, posts: state.posts.concat([action.payload])}
      return { ...state, countries: [...state.countries, action.payload] };
    case FETCH_COUNTRIES:
      return { ...state, fetchedCountries: action.payload };
    default:
      return state;
  }
};
