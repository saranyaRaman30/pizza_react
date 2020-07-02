import React, { Component } from 'react'
import './css/footer.css';
import fb from './assests/fb.jpg'
import twitter from './assests/twitter.png'
import insta from './assests/insta.jpg'

class Footer extends Component {

  constructor() {
    super();
   
  }
 

  render() {  
    return (
      <div className="Footer-container">
        <div className ="Footer_left">
          <a href="#" className="Footer-aboutus Footer">About Us</a>
          <a  href="#" className="Footer-Terms Footer">Terms and Conditions</a>
          <a  href="#" className="Footer-FAQ Footer">Covid-19 FAQ</a>
        </div>
        <div className ="Footer_right">
          <span className="Followus">Follow Us:</span>
          <a href="https://www.facebook.com/pizzahutindia"><img src={fb} className="fb icon" alt="logo" height="25" /></a>
          <a href="https://twitter.com/PizzaHutIN"><img src={twitter} className="twitter icon" alt="logo" height="25" /></a>
          <a href="https://www.instagram.com/pizzahut_india/"><img src={insta} className="insta icon" alt="logo" height="25" /></a>
        </div>
      </div>
    );
  }

}

export default Footer;
