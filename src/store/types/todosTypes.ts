export enum TodosTypes {
  REQUEST_LOAD = '@todo/REQUEST_LOAD',
  REQUEST_SUCCESS = '@todo/REQUEST_SUCCESS',
  REQUEST_FAILURE = '@todo/REQUEST_FAILURE',
  SET_NEW_TASK = '@todo/SET_NEW_TASK',
}

export interface TodosState {
  readonly list: Task[];
  readonly loading: boolean;
}

export interface Task {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
