import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'theme-ui'
import TuiThemes from './TuiThemes/TuiThemes'
import App from './App';

ReactDOM.render(
  <ThemeProvider theme={TuiThemes}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
