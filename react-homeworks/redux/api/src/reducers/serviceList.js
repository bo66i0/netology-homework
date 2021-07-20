import {
  REMOVE_SERVICE_FAILURE,
  REMOVE_SERVICE_REQUEST,
  REMOVE_SERVICE_SUCCESS,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_REQUEST
} from '../actions/actionTypes';

const initialState = {
  items: [], loading: false, loadingError: null, removingError: null
};


export default function serviceListReducer(state=initialState, action) {
  switch(action.type) {
    case FETCH_SERVICES_REQUEST:
      return {...state, loading: true, loadingError: null};
    case FETCH_SERVICES_FAILURE:
      const {error: errorFetchServices} = action.payload;
      return {...state, loading: false, loadingError: errorFetchServices};
    case FETCH_SERVICES_SUCCESS:
      const {items} = action.payload;
      return {...state, items, loading: false, loadingError: null};
    case REMOVE_SERVICE_REQUEST:
      const {id: fetchRemoveId} = action.payload;
      const itemsAfterRemovingFetch = state.items.map(service => (
        service.id === fetchRemoveId ? {...service, isLoading: true} : service
      ));
      return {...state, items: itemsAfterRemovingFetch, removingError: null};
    case REMOVE_SERVICE_FAILURE:
      const {id: unsuccessfulRemoveId, error: removeServiceError} = action.payload;
      const itemsAfterRemovingFailure = state.items.map(service => (
        service.id === unsuccessfulRemoveId ? {...service, isLoading: false} : service
      ));
      return {...state, items: itemsAfterRemovingFailure, removingError: removeServiceError};
    case REMOVE_SERVICE_SUCCESS:
      const {id: successfulRemoveId} = action.payload;
      const itemsAfterRemovingSuccess = state.items.filter(service => service.id !== successfulRemoveId);
      return {...state, items: itemsAfterRemovingSuccess, removingError: null};
    default:
      return state;
  }
}