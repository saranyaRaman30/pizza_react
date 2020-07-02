import React, { Component } from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import './css/ordernow.css';
import Listpage from './Listpage';

class Ordernow extends Component {

  constructor() {
    super();
    this.textval = React.createRef();
    this.state = {
      fields: {},
      errors: {},
      isLoggedIn : false 
    }
  }
  ordermethod() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    if(!fields["textval"]){
       formIsValid = false;
       errors["textval"] = "Required";
    }
    if(typeof fields["textval"] !== "undefined"){
       if(!fields["textval"].match(/^[0-9]+$/)){
          formIsValid = false;
          errors["textval"] = "Not a Valid Pincode";
       }        
    }
   this.setState({errors: errors});
   if(formIsValid == true){
     this.setState({isLoggedIn : true}); 
    //  window.open(Listpage, '_blank');
    window.location.reload(false);
   }
   return formIsValid;
  }
  pincodechanged(field, e){
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
  }

  render() { 
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <Router>
      <div className="ordernow-container">
        <p className="ordernow_label">Let's Start Ordering</p>
        <div className="ordernow_fields">
        <p className="ordernow_text">Yummy Pizza at your door step</p>
        <input type="text" maxLength="6" placeholder="Enter Pincode" ref={this.textval} className="ordernow_input" onChange={this.pincodechanged.bind(this, "textval")}></input>
        <span style={{color: "red"}}>{this.state.errors["textval"]}</span>
      
        <button className="ordernow_btn" onClick={this.ordermethod.bind(this, "textval")}> <NavLink to="/Listpage" exact >ORDER ONLINE NOW </NavLink></button>
        
        </div>        
        {/* { this.state.isLoggedIn ? : null } */}
        </div>
        </Router>
    );
  }

}

export default Ordernow;
