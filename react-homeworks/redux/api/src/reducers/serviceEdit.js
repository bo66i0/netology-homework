import {
  CLEAR_SERVICE_ADD,
  CHANGE_SERVICE_FIELD,
  EDIT_SERVICE_FAILURE,
  EDIT_SERVICE_REQUEST,
  EDIT_SERVICE_SUCCESS,
  FETCH_EDIT_SERVICE_REQUEST,
  FETCH_EDIT_SERVICE_FAILURE,
  FETCH_EDIT_SERVICE_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  item: {name: '', price: '', content: '', id: null},
  loadingSave: false,
  loadingService: true,
  errorSave: null,
  errorService: null
};

export default function serviceAddReducer(state=initialState, action) {
  switch(action.type) {
    case EDIT_SERVICE_REQUEST:
      return {...state, loadingSave: true, errorSave: null};
    case EDIT_SERVICE_FAILURE:
      const {error: addServiceError} = action.payload;
      return {...state, loadingSave: false, errorSave: addServiceError};
    case EDIT_SERVICE_SUCCESS:
      return {...initialState, loadingSave: false, errorSave: null};
    case CHANGE_SERVICE_FIELD:
      const {name: serviceFieldName, value: serviceFieldValue} = action.payload;
      const {item} = state;
      return {...state, item: {...item, [serviceFieldName]: serviceFieldValue}};
    case CLEAR_SERVICE_ADD:
      return {...initialState, loadingService: false};
    case FETCH_EDIT_SERVICE_REQUEST:
      return {...state, loadingService: true, errorService: null};
    case FETCH_EDIT_SERVICE_FAILURE:
      const {error: fetchEditServiceError} = action.payload;
      return {...state, loadingService: false, errorService: fetchEditServiceError};
    case FETCH_EDIT_SERVICE_SUCCESS:
      const {service} = action.payload;
      return {...state, item: service, loadingService: false, error: null};
    default:
      return state;
  }
}