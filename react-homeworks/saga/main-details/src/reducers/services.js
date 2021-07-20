import {
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  items: [],
  isLoading: true,
  error: null
};

export default function servicesReducer (state = initialState, action) {
  switch(action.type) {
    case FETCH_SERVICES_REQUEST:
      return {...state, isLoading: true, error: null};
    case FETCH_SERVICES_FAILURE:
      const {error} = action.payload;
      return {...state, isLoading: false, error};
    case FETCH_SERVICES_SUCCESS:
      const {items} = action.payload;
      return {...state, items, isLoading: false, error: null};
    default:
      return {...state};
  }
}