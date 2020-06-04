import { action } from 'typesafe-actions';
import * as Types from 'store/types/todosTypes';

export const actionTodosRequestLoad = () =>
  action(Types.TodosTypes.REQUEST_LOAD);
export const actionTodosRequestSuccess = (data: Types.Task[]) =>
  action(Types.TodosTypes.REQUEST_SUCCESS, { data });
export const actionTodosRequestFailure = () =>
  action(Types.TodosTypes.REQUEST_FAILURE);
export const actionTodosSetNewTask = (data: string) =>
  action(Types.TodosTypes.SET_NEW_TASK, { data });
export const actionTodosRemoveTask = (data: number) =>
  action(Types.TodosTypes.REMOVE_TASK, { data });
