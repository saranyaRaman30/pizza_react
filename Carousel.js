import React, { Component } from 'react'
import coupon1 from './assests/coupon1.jpg'
import coupon2 from './assests/coupon2.jpg'
import coupon3 from './assests/coupon3.jpg'
import coupon4 from './assests/coupon4.jpg'
import coupon5 from './assests/coupon5.jpg'
import './css/caurosel.css';

class Carousel extends Component {
  intervalID;
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      images: [coupon1, coupon2, coupon3,coupon4,coupon5],
      isTransitioning: false,
      goingLeft: false,
      timer: null
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(this.showNextSet, 1500);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  showNextSet = () => {
    const currentIndex = (this.state.currentIndex + 1) % this.state.images.length;
    this.setState({ currentIndex });
  }
  render() {

    const { currentIndex, isTransitioning, goingLeft, images } = this.state;
    return (
      <div className="carousel__wrapper">
        <p className="carousel__text">Our Most Popular Deals</p>
        <div className="carousel__container">
          {images.map((img, index) => {
            let className = 'carousel__image'
            if (index === currentIndex) className += ' active';
            return <img src={img} className={className} key={`img-${index}`} />;
          })}
        </div>
      </div>
    );
  }

}

export default Carousel;
