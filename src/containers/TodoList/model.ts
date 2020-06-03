import { Task } from 'store/types/todosTypes';

interface IndexStoreProps {
  taskList: Task[];
}

interface IndexActionsDispatch {
  requestLoad(): void;
  addNewTask(title: string): void;
}

export type IndexProps = IndexStoreProps & IndexActionsDispatch;

interface ListParentProps {
  list: Task[];
}

export type ListProps = ListParentProps;
