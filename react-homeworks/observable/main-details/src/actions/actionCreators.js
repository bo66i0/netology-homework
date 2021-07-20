import {
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICE_VIEW_FAILURE,
  FETCH_SERVICE_VIEW_REQUEST,
  FETCH_SERVICE_VIEW_SUCCESS
} from './actionTypes';

export const fetchServicesRequest = () => (
  {type: FETCH_SERVICES_REQUEST}
);

export const fetchServicesFailure = (error) => (
  {type: FETCH_SERVICES_FAILURE, payload: {error}}
);

export const fetchServicesSuccess = (items) => (
  {type: FETCH_SERVICES_SUCCESS, payload: {items}}
);

export const fetchServiceViewRequest = (id) => (
  {type: FETCH_SERVICE_VIEW_REQUEST, payload: {id}}
);

export const fetchServiceViewFailure = (error) => (
  {type: FETCH_SERVICE_VIEW_FAILURE, payload: {error}}
);

export const fetchServiceViewSuccess = (item) => (
  {type: FETCH_SERVICE_VIEW_SUCCESS, payload: {item}}
);
