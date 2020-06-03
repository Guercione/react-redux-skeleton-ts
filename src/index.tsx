import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from 'store';

import App from './containers';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
