import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#464141'
  },
  appBar: {
    height: 100
  },
});

const Navbar = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar showMenuIconButton={false} title='Parugu'>
      <IconButton iconClassName="muidocs-icon-custom-github" />
    </AppBar>
  </MuiThemeProvider>
);

export default Navbar;
