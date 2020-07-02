import React, { Component } from 'react';
import './css/header.css';
import close from './assests/close.png';

class Popup extends Component {
  constructor() {
    super();
    this.currentval = React.createRef();
    this.state = {
      presentvalue: 0
    }
   
  }
  decrement(){
   var decrementedval = this.currentval.current.value - 1
   this.setState({     
    presentvalue: decrementedval
  });
  }
  increment(){
    var incrementedval = this.currentval.current.value + 1
    this.setState({
      presentvalue: incrementedval
    });

  }
  render() {
    const { presentvalue} = this.state;
    return (
      <div className="Popup_container">
        <div className='popup'>  
          <div className='popup_inner'>         
          <img src={close} className="close" alt="close" width="30" onClick={this.props.closepopup}/>
          <div className="popup_content">
          <h1>sai</h1>
          <div class="quantity">
            <button className="minus_icon" onClick={this.decrement.bind(this)}> – </button>
            <div className="total_value"><input type="text"  className="total_value_text" ref={this.currentval} /></div>
            <button className="plus_icon"  onClick={this.increment.bind(this)}> + </button>
          </div>
          </div>
          </div>  
        </div> 
      </div>
    );
  }
}

export default Popup;
