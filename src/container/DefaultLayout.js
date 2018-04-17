import React, { Component } from 'react';
import HeaderNav from '../components/basic/HeaderNav';
import Footer from '../components/basic/Footer';

class DefaultLayout extends Component {
  render() {
    return (
      <div>
        <HeaderNav />
          {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default DefaultLayout;