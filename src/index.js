import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import Context from './context/Context';
import { store, persisted } from './feature/reducers/store/store';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Context>
        <PersistGate loading={null} persisted={persisted}>
          <App />
        </PersistGate>
      </Context>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

