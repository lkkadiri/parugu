import React, {PropTypes} from 'react';
import IconButton from 'material-ui/IconButton';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        Parugu 2017
        <IconButton iconClassName="muidocs-icon-custom-github" />
      </footer>
    )
  }
}
module.exports = Footer;
