import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import servicesReducer from '../reducers/services';
import serviceView from '../reducers/serviceView';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {fetchServicesEpic, fetchServiceViewEpic} from '../epics';

const reducer = combineReducers({
  services: servicesReducer,
  serviceView: serviceView
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epic = combineEpics(
  fetchServicesEpic,
  fetchServiceViewEpic
);
const epicMiddleware = createEpicMiddleware();
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);
export default store;