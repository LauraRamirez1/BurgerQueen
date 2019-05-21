import React, { Component } from 'react';
import burguerQueen from '../burguerQueen.png';
import Button from './button';

class Navigation extends Component {
  logo = {
    width: '100px',
    justifyContent: 'left',
  }

  navbarBurger = {
    background: 'black',
    textAlign: 'left',
  }

  render() {
    return (
      <nav className="navbarBurger" style={this.navbarBurger}>
        <img src={burguerQueen} className="logo-img" alt="logo" style={this.logo} />
        <Button title="COCINA" />
        <Button title="MESERO" />
      </nav>
    );
  }
}
export default Navigation;
