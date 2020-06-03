import { Reducer } from 'redux';
import _ from 'lodash';
import * as Types from 'store/types/todosTypes';

const INICIAL_STATE: Types.TodosState = {
  list: [{ userId: 1, id: 0, title: 'teste', completed: false }],
  loading: false,
};

const dispatch = {
  [Types.TodosTypes.REQUEST_LOAD]: ({ state }) => ({ ...state, loading: true }),
  [Types.TodosTypes.REQUEST_SUCCESS]: ({ action }) => ({
    list: [action.payload.data],
    loading: false,
  }),
  [Types.TodosTypes.REQUEST_FAILURE]: () => ({ list: [], loading: false }),
  [Types.TodosTypes.SET_NEW_TASK]: ({ state, action }) => ({
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
};

const Todos: Reducer<Types.TodosState> = (state = INICIAL_STATE, action) =>
  dispatch[action?.type]
    ? dispatch[action?.type]({ state, action })
    : INICIAL_STATE;

export default Todos;
