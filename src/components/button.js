import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() { console.log('Hola'); }

  render() {
    return (
      <button className="btn btn-warning btn-lg" onClick={this.handleClick}>
        {this.props.title}
      </button>
    );
  }
}
export default Button;
