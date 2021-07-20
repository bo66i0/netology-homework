import {
  CLEAR_SERVICE_ADD,
  CHANGE_SERVICE_FIELD,
  ADD_SERVICE_FAILURE,
  ADD_SERVICE_REQUEST,
  ADD_SERVICE_SUCCESS, EDIT_SERVICE
} from '../actions/actionTypes';

const initialState = {
  item: {name: '', price: '', id: null},
  loading: false,
  error: null
};

export default function serviceAddReducer(state=initialState, action) {
  switch(action.type) {
    case ADD_SERVICE_REQUEST:
      return {...state, loading: true, error: null};
    case ADD_SERVICE_FAILURE:
      const {error} = action.payload;
      return {...state, loading: false, error};
    case ADD_SERVICE_SUCCESS:
      return {...initialState};
    case CHANGE_SERVICE_FIELD:
      const {name: serviceFieldName, value: serviceFieldValue} = action.payload;
      const {item} = state;
      return {...state, item: {...item, [serviceFieldName]: serviceFieldValue}};
    case CLEAR_SERVICE_ADD:
      return {...initialState};
    case EDIT_SERVICE:
      const {id: editServiceId, name: editServiceName, price: editServicePrice} = action.payload;
      console.log(action.payload);
      return {...state, item: {id: editServiceId, name: editServiceName, price: editServicePrice}};
    default:
      return state;
  }
}