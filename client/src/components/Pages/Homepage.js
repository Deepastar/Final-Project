import React, { Component } from 'react';
import "./Homepage.css";
class Homepage extends Component {
  render() {
    return (
      <div className="container">
      <div className="row">
      <p><font color="maroon" className="homeText">Book Online</font></p>
      <i className="fas fa-arrow-right fa-7x p-5"></i>
      <img src="./Images/booking.png" alt="Booking" id="logo"></img>
      </div>
      <div className="row">
      <p><font color="maroon" className="homeText">Pay Online</font></p>
      <i className="fas fa-arrow-right fa-7x p-5"></i>
       <img src="./Images/pay.png" alt="Pay" id="logo"></img>
      </div>
      <div className="row">
      <p><font color="maroon" className="homeText">Choose Offer</font></p>
      <i className="fas fa-arrow-right fa-7x p-5"></i>
       <img src="./Images/offer.png" alt="Offer" id="logo"></img>
      </div>
      </div>
    )
  }
}
export default Homepage;