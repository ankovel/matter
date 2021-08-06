import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Router from './components/Router/Router';
import theme from './theme';
import history from './helpers/history';
import './index.css';

ReactDOM.render(
  <BrowserRouter history={history}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
