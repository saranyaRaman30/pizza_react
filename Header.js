import React, { Component } from 'react';
import logo from './assests/logo.jpg'
import shoppingbag from './assests/shopping-bags.svg'
import user from './assests/user.svg'
import './css/header.css';
import Popup from './Popup';

class Header extends Component{
  constructor() {
    super();
    this.state = {
      showPopup : false 
    }
  }
  openPopup(){
    this.setState({
      showPopup: !this.state.showPopup  
    });
  }
  render() {
    return (
      <div className="header-container">
        <div className="header-left">
          <img src={logo} className="logo" alt="logo" height="110" />
        </div>
        <div className="header-right">
          <img src={shoppingbag} className="shoppingbag" alt="logo" onClick={this.openPopup.bind(this)} />
          <img src={user} className="userprofile" alt="logo" height="35" />
          {this.state.showPopup ?  
          <Popup closepopup={this.openPopup.bind(this)} ></Popup>
          : null  
          }  
        </div>
      </div>
    );
  }
}

export default Header;
