import {
  REMOVE_SERVICE,
  CHANGE_SERVICE_FIELD,
  CLEAR_SERVICE_ADD,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS, ADD_SERVICE_FAILURE, ADD_SERVICE_REQUEST, ADD_SERVICE_SUCCESS, EDIT_SERVICE
} from './actionTypes';

export const fetchServicesRequest = () => (
  {type: FETCH_SERVICES_REQUEST}
);

export const fetchServicesFailure = message => (
  {type: FETCH_SERVICES_FAILURE, payload: {message}}
);

export const fetchServicesSuccess = items => (
  {type: FETCH_SERVICES_SUCCESS, payload: {items}}
);

export const addServiceRequest = () => (
  {type: ADD_SERVICE_REQUEST}
);

export const addServiceFailure = message => (
  {type: ADD_SERVICE_FAILURE, payload: {message}}
);

export const addServiceSuccess = (name, price) => (
  {type: ADD_SERVICE_SUCCESS, payload: {name, price}}
);

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}}
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function clearServiceAdd() {
  return {type: CLEAR_SERVICE_ADD}
}

export const editService = (id, name, price) => {
  return {type: EDIT_SERVICE, payload: {id, name, price}}
};

export const fetchServices = () =>  async dispatch => {
  dispatch(fetchServicesRequest());
  try {
    const response = await fetch(process.env.REACT_APP_API_URL);
    if(!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(fetchServicesSuccess(data));
  } catch (e) {
    dispatch(fetchServicesFailure(e.message));
  }
};

export const addService = (id, name, price) => async dispatch => {
  dispatch(addServiceRequest());
  try {
    const response = await fetch(process.env.REACT_APP_API_URL, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({id, name, price})
    });
    if(!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(addServiceSuccess());
  } catch (e) {
    dispatch(addServiceFailure(e.message));
  }
  dispatch(fetchServices());
};