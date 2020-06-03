import React from 'react';
import { connect } from 'react-redux';
import { AplicationStore } from 'store/reducers';
import {
  actionTodosRequestLoad,
  actionTodosSetNewTask,
} from 'store/actions/todosActions';
import { IndexProps } from './model';

import List from './List';

const TodoList: React.FC<IndexProps> = ({
  taskList,
  requestLoad,
  addNewTask,
}) => {
  const [task, setTask] = React.useState<string>('');

  React.useEffect(() => {
    requestLoad();
  }, [requestLoad]);

  function handleInputTaskName(e: React.ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        name="todolist-task-name"
        value={task}
        onChange={handleInputTaskName}
      />
      <button type="button" onClick={() => addNewTask(task)}>
        Add
      </button>
      <List list={taskList} />
    </div>
  );
};

const mapStateToProps = (store: AplicationStore) => ({
  taskList: store.todos.list,
  loading: store.todos.loading,
});

export default connect(mapStateToProps, {
  addNewTask: actionTodosSetNewTask,
  requestLoad: actionTodosRequestLoad,
})(TodoList);
