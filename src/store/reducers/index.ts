import { combineReducers } from 'redux';

// INTERFACES
import { TodosState } from 'store/types/todosTypes';

// REDUCERS
import todos from './todosReducer';

export default combineReducers({ todos });

export interface AplicationStore {
  todos: TodosState;
}
