import { Task } from 'store/types/todosTypes';

interface IndexStoreProps {
  taskList: Task[];
}

interface IndexActionsDispatch {
  requestLoad(): void;
  addNewTask(title: string): void;
  removeTask(id: string | number): void;
}

export type IndexProps = IndexStoreProps & IndexActionsDispatch;

interface ListParentProps {
  list: Task[];
  handleItem(id: string | number): void;
}

export type ListProps = ListParentProps;
