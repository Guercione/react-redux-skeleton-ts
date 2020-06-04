import { Reducer } from 'redux';
import _ from 'lodash';
import { Types } from 'typesafe-actions';
import { TodosTypes, TodosState, Task } from 'store/types/todosTypes';

const INICIAL_STATE: TodosState = {
  list: [],
  loading: false,
};

const dispatch = {
  [TodosTypes.REQUEST_LOAD]: ({ state }) => ({ ...state, loading: true }),
  [TodosTypes.REQUEST_SUCCESS]: ({ action }) => ({
    list: [action.payload.data],
    loading: false,
  }),
  [TodosTypes.REQUEST_FAILURE]: () => ({ list: [], loading: false }),
  [TodosTypes.SET_NEW_TASK]: ({ state, action }) => ({
    ...state,
    list: [
      ...state.list,
      {
        userId: 1,
        id: _.uniqueId('id_'),
        complete: false,
        title: action?.payload?.data || '',
      },
    ],
  }),
  [TodosTypes.REMOVE_TASK]: ({ state, action }) => ({
    ...state,
    list: [
      ...state.list.filter((task: Task) => task.id !== action?.payload?.data),
    ],
  }),
};

const Todos: Reducer<TodosState> = (state = INICIAL_STATE, action) =>
  dispatch[action?.type]
    ? dispatch[action?.type]({ state, action })
    : INICIAL_STATE;

export default Todos;
