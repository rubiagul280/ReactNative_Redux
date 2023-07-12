/* eslint-disable prettier/prettier */

import { FETCH_MOVIES_SUCCESS } from '../actions/movieActions';

const initialState = [];

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default movieReducer;
