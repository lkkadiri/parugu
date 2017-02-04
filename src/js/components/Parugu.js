import React, {PropTypes} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Menubar from './Menubar';
import MainBody from './MainBody';
import classNames from 'classnames';
export default class Parugu extends React.Component {
  render() {
    return (
      <div className="parugu">
        <Navbar/>
        <MainBody/>
        <Footer/>
      </div>
    )
  }
}
