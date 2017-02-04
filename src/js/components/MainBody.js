import React, {PropTypes} from 'react';
import Menubar from './Menubar';
import classNames from 'classnames';
export default class Parugu extends React.Component {
  render() {
    return (
      <div className="main-content">
        <Menubar/>
      </div>
    )
  }
}
