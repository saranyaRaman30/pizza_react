import React, { Component } from 'react'
import './css/listpage.css';
import Header from './Header';
import data from './Jsondata';

class Listpage extends Component {

  constructor() {
    super();
    this.buttonval1 = React.createRef();
    this.buttonval2 = React.createRef();
    this.buttonval3 = React.createRef();
    this.buttonval4 = React.createRef();
    this.filterChange = this.filterChange.bind(this);
    this.state = {
      displayCategory: "all"
    }

  }
  componentDidMount() {

  }
  filterChange(e) {
    this.setState({
      displayCategory: e.currentTarget.value
    });
  }

  render() {
    const {  type, displayCategory } = this.state;
    return (
      <div className="Pizzalistpage">
        <Header></Header>
        <div className="Listpage-container">
          <div className="filter_pizzatype">
            <button value="all" ref={this.buttonval3} onClick={this.filterChange.bind(this)} >All</button>
            <button value="veg" ref={this.buttonval1} onClick={this.filterChange.bind(this)} >Veg</button>
            <button value="nonveg" ref={this.buttonval2} onClick={this.filterChange.bind(this)} >Non-veg</button>
            <button value="beverage" ref={this.buttonval4} onClick={this.filterChange.bind(this)} >Beverages</button>

          </div>
          {
            data.filter(
              ({ type }) =>
                displayCategory === type || displayCategory === "all"
            )
              .map(({ path, name, desc }) => {
                return (
                  <div className="pizzalist" >
                    <img src={path} width="260"></img>
                    <div className="pizza_details">
                      <h1>{name}</h1>
                      <p>{desc}</p>
                      <select className="pizza_size">
                        <option>Regular</option>
                        <option>Medium</option>
                        <option>Large</option>
                      </select>
                      <button className="addtocart">Add To Cart</button>
                    </div>
                  </div>
                )
              })}

        </div>
      </div>
    );
  }

}

export default Listpage;









