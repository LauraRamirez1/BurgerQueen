import React, { Component } from 'react';
import burguerQueen from '../burguerQueen.png';
import Button from './button';
import Waiter from './waiter';
import Kitchen from './kitchen';

class Navigation extends Component {
  logo = {
    width: '100px',
    justifyContent: 'left',
    }

  navbarBurger = {
    background: 'black',
    textAlign: 'left',
  }

constructor(props){
  super(props);
  this.state = {
    showKitchen: false,
    showWaiter: false,
  }

  this.WaiterFunc = this.WaiterFunc.bind(this);
  this.KitchenFunc = this.KitchenFunc.bind(this);
}
WaiterFunc (){
  this.setState({
    ...this.state,
    showWaiter : true,
    showKitchen : false
  })
}
KitchenFunc (){
  this.setState({
    ...this.state,
    showWaiter : false,
    showKitchen : true
  })
}

render () {
  return (
    <div>
      <div className= "navbarBurger" style={this.navbarBurger}>
        <img src={burguerQueen} className="logo-img" alt="logo" style={this.logo} />    
          <Button title = "MESERO" actiOnClick={this.WaiterFunc}/>
          <Button title = "COCINA" actiOnClick ={this.KitchenFunc}/>
      </div>
      <div id="containerMenu">
        {
          this.state.showWaiter && 
          <Waiter></Waiter>
        }
        {
          this.state.showKitchen &&
          <Kitchen></Kitchen>
        }
      </div>
  </div>
  );
}
}
export default Navigation;
