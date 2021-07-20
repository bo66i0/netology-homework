import {
  FETCH_SERVICE_VIEW_REQUEST,
  FETCH_SERVICE_VIEW_FAILURE,
  FETCH_SERVICE_VIEW_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  item: {name: '', content: '', price: null},
  isLoading: true,
  error: null
};

export default function servicesReducer (state = initialState, action) {
  switch(action.type) {
    case FETCH_SERVICE_VIEW_REQUEST:
      return {...state, isLoading: true, error: null};
    case FETCH_SERVICE_VIEW_FAILURE:
      const {error} = action.payload;
      return {...state, isLoading: false, error};
    case FETCH_SERVICE_VIEW_SUCCESS:
      const {item} = action.payload;
      return {...state, item, isLoading: false, error: null};
    default:
      return {...state};
  }
}