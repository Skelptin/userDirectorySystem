import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import userSlice from './store/userSlice';
import App from './App';

ReactDOM.render(
  <Provider store={userSlice}>
    <App />
  </Provider>,
  document.getElementById('root')
);
