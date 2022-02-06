import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import Context from './context/Context';
import workerReducers from './feature/reducers/workersReducers';

const store = createStore(workerReducers, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Context>
        <App />
      </Context>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

