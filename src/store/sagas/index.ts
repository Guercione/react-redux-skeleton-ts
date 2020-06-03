import { all, takeLatest } from 'redux-saga/effects';

import { TodosTypes } from 'store/types/todosTypes';
import { todosRequestLoadSaga } from './todosSaga';

export default function* rootSaga() {
  return yield all([takeLatest(TodosTypes.REQUEST_LOAD, todosRequestLoadSaga)]);
}
