import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import App from './components/App';
import ThemeContext from './context/ThemeContext';
import { store, persistor } from './redux/store';
import './base.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeContext>
        <App />
      </ThemeContext>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
