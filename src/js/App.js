import React, {PropTypes} from 'react';
import Parugu from './components/Parugu';
import classNames from 'classnames';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
export default class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Parugu/>
      </div>
    )
  }
}
