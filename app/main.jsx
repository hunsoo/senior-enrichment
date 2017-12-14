'use strict'
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
//import { ConnectedRouter as Router } from 'react-router-redux';
import store, {history} from './store';
import Main from './components/Main';

import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles/';
import indigo from 'material-ui/colors/indigo';
import blueGrey from 'material-ui/colors/blueGrey';
import red from 'material-ui/colors/red';

const theme = createMuiTheme({
  type: 'dark',
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary: indigo,
    secondary: blueGrey,
    error: red
  }
});

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      {/* <Router history={history}> */}
      <Router>
        <Main />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("main")
);
