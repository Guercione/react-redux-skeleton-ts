import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, Store, applyMiddleware } from 'redux';
import sagas from 'store/sagas';
import rootReducer, { AplicationStore } from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store: Store<AplicationStore> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(sagas);

export default store;
