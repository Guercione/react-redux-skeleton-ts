import React from 'react';
import { ListProps } from './model';

const List: React.FC<ListProps> = ({ list }) => (
  <ul>
    {list?.map((task) => (
      <li key={task.id}>
        <span>{task.title}</span>
        <span>{task.completed}</span>
      </li>
    ))}
  </ul>
);

export default List;
