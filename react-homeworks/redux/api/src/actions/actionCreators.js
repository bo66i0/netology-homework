import {
  CHANGE_SERVICE_FIELD,
  CLEAR_SERVICE_ADD,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
  EDIT_SERVICE_FAILURE,
  EDIT_SERVICE_REQUEST,
  EDIT_SERVICE_SUCCESS,
  FETCH_EDIT_SERVICE_REQUEST,
  FETCH_EDIT_SERVICE_FAILURE,
  FETCH_EDIT_SERVICE_SUCCESS,
  REMOVE_SERVICE_SUCCESS,
  REMOVE_SERVICE_REQUEST,
  REMOVE_SERVICE_FAILURE
} from './actionTypes';

export const fetchServicesRequest = () => (
  {type: FETCH_SERVICES_REQUEST}
);

export const fetchServicesFailure = error => (
  {type: FETCH_SERVICES_FAILURE, payload: {error}}
);

export const fetchServicesSuccess = items => (
  {type: FETCH_SERVICES_SUCCESS, payload: {items}}
);

export const editServiceRequest = () => (
  {type: EDIT_SERVICE_REQUEST}
);

export const editServiceFailure = error => (
  {type: EDIT_SERVICE_FAILURE, payload: {error}}
);

export const editServiceSuccess = (name, price) => (
  {type: EDIT_SERVICE_SUCCESS, payload: {name, price}}
);

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function clearServiceAdd() {
  return {type: CLEAR_SERVICE_ADD}
}

export const fetchEditServiceRequest = () => {
  return {type: FETCH_EDIT_SERVICE_REQUEST}
};

export const fetchEditServiceFailure = error => {
  return {type: FETCH_EDIT_SERVICE_FAILURE, payload: {error}}
};

export const fetchEditServiceSuccess = service => {
  return {type: FETCH_EDIT_SERVICE_SUCCESS, payload: {service}}
};

export const removeServiceRequest = id => {
  return {type: REMOVE_SERVICE_REQUEST, payload: {id}}
};

export const removeServiceFailure = (id,error) => {
  return {type: REMOVE_SERVICE_FAILURE, payload: {id, error}}
};

export const removeServiceSuccess = id => {
  return {type: REMOVE_SERVICE_SUCCESS, payload: {id}}
};

//////////////////////////////////

export const fetchServices = () => async dispatch => {
  dispatch(fetchServicesRequest());
  try {
    const response = await fetch(process.env.REACT_APP_API_URL);
    if(!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(fetchServicesSuccess(data));
  } catch(e) {
    dispatch(fetchServicesFailure(e.message));
  }
};

export const fetchEditingService = id => async dispatch => {
  dispatch(fetchEditServiceRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`);
    if(!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(fetchEditServiceSuccess(data));
  } catch(e) {
    dispatch(fetchEditServiceFailure(e.message));
  }
};

export const editService = ({id, name, price, content}, history) => async dispatch => {
  dispatch(editServiceRequest());
  try {
    const response = await fetch(process.env.REACT_APP_API_URL, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({id, name, price, content})
    });
    if(!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(editServiceSuccess());
    dispatch(fetchServices());
    history.push('/');
  } catch(e) {
    dispatch(editServiceFailure(e.message));
  }
};

export const removeService = id => async dispatch => {
  dispatch(removeServiceRequest(id));
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
      method: 'DELETE'
    });
    if(!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(removeServiceSuccess(id));
  } catch(e) {
    dispatch(removeServiceFailure(id, e.message));
  }
};


// export const addService = (id, name, price, content) => async dispatch => {
//   dispatch(addServiceRequest());
//   try {
//     const response = await fetch(process.env.REACT_APP_API_URL, {
//       method: 'POST',
//       headers: {'Content-type': 'application/json'},
//       body: JSON.stringify({id, name, price, content})
//     });
//     if(!response.ok) {
//       throw new Error(response.statusText);
//     }
//     dispatch(addServiceSuccess());
//   } catch(e) {
//     dispatch(addServiceFailure(e.message));
//   }
//   dispatch(fetchServices());
// };