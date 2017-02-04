import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Index = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<Index />, document.querySelector('body'));
