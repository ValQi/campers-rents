import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { GlobalStyles } from './assets/styles/GlobalStyled.js';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/campers-rents">
        <App />
      </BrowserRouter>
    </Provider>
    <GlobalStyles />
  </React.StrictMode>
);