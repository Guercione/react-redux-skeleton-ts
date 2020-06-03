import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const TodoList = React.lazy(() => import('containers/TodoList'));
const Error404 = React.lazy(() => import('containers/Error/Error404'));

const Routes: React.FC = () => {
  return (
    <Router>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route component={Error404} />
        </Switch>
      </React.Suspense>
    </Router>
  );
};

export default Routes;
