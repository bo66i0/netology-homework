import {spawn, takeLatest, put, call} from 'redux-saga/effects';
import {FETCH_SERVICE_VIEW_REQUEST, FETCH_SERVICES_REQUEST} from '../actions/actionTypes';
import {fetchServices} from '../api';
import {
  fetchServicesFailure,
  fetchServicesSuccess,
  fetchServiceViewFailure,
  fetchServiceViewSuccess
} from '../actions/actionCreators';

function* handleFetchServices() {
  try {
    const services = yield call(fetchServices);
    yield put(fetchServicesSuccess(services));
  } catch(e) {
    yield put(fetchServicesFailure(e.message));
  }
}

function* handleFetchViewService(action) {
  try {
    const service = yield call(fetchServices, action.payload.id);
    yield put(fetchServiceViewSuccess(service));
  } catch(e) {
    yield put(fetchServiceViewFailure(e));
  }
}

function* watchFetchServices() {
  yield takeLatest(FETCH_SERVICES_REQUEST, handleFetchServices);
}

function* watchFetchViewService() {
  yield takeLatest(FETCH_SERVICE_VIEW_REQUEST, handleFetchViewService);
}

export default function* saga() {
  yield spawn(watchFetchServices);
  yield spawn(watchFetchViewService);
}