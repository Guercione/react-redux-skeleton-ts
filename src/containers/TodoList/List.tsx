import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import { ListProps } from './model';

const styles = makeStyles({
  li: {
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'line-through',
    },
  },
});

const List: React.FC<ListProps> = ({ list, handleItem }) => {
  const classes = styles();
  return (
    <ul>
      {list?.map((task, index: number) => (
        <li key={task.id} className={classes.li}>
          <div
            role="button"
            tabIndex={index}
            onClick={() => handleItem(task.id)}
            onKeyPress={() => handleItem(task.id)}
          >
            {task.title}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
