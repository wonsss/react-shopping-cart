import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import ThemeStyle from 'styles/ThemeStyle';
import configureStore from 'store/configureStore';
import { Provider } from 'react-redux';
import { GlobalStyle } from 'styles/GlobalStyle';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('mocks/worker');
  worker.start();
}

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={ThemeStyle.lightTheme}>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
);
