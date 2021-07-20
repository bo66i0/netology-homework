import {ofType} from 'redux-observable';
import {of} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {map, switchMap, catchError, tap} from 'rxjs/operators';
import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICE_VIEW_REQUEST
} from '../actions/actionTypes';
import {
  fetchServicesFailure,
  fetchServicesSuccess,
  fetchServiceViewFailure,
  fetchServiceViewSuccess
} from '../actions/actionCreators';

export const fetchServicesEpic = action$ => action$.pipe(
  ofType(FETCH_SERVICES_REQUEST),
  switchMap(o => ajax.getJSON(process.env.REACT_APP_API_URL).pipe(
    //retry(3),
    map(o => fetchServicesSuccess(o)),
    catchError(e => of(fetchServicesFailure(e)))
  ))
);

export const fetchServiceViewEpic = action$ => action$.pipe(
  ofType(FETCH_SERVICE_VIEW_REQUEST),
  map(o => o.payload.id),
  switchMap(o => ajax.getJSON(`${process.env.REACT_APP_API_URL}/${o}`).pipe(
    //retry(3),
    map(o => fetchServiceViewSuccess(o)),
    catchError(e => of(fetchServiceViewFailure(e)))
  ))
);