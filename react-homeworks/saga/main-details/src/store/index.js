import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import servicesReducer from '../reducers/services';
import serviceView from '../reducers/serviceView';
import createSagaMiddleware from 'redux-saga';
import saga from '../sagas';

const reducer = combineReducers({
  services: servicesReducer,
  serviceView: serviceView
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(saga);
export default store;