import React from "react";
import "./CSS/aboutus.css";




const AboutUs = () => (
    <div className="container-fluid" id="contId">
        <div className="row" id="rId">

            <div className="col-md-6" id="colId">
                <div className="card-body mt-5 p-0">
                    <div className="card-body text-center">
                        <h2 className="header">About Us</h2>
                        <p>
                            (Name) is a startup web based technology application to deliver car wash services directly to customer’s location.
                            Customers can make appointment with us and get services through Online Appointment.
                            We are growing in wide range of services across orlando. It is really surprising about our growth suddenly. 
                            We believ that all because of all our services.
                    
                        </p>
                    </div>
                </div>

                <div className="col-md-12 mt-4 p-0">

                    <div className="card-body text-center ">
                        <h2 className="header">Our Mission</h2>
                        <p>
                            To save our customers as much time as possible by providing the most convenient car wash services available. It is our mission to reach all our customers all over orlando in Florida by 2019.
                            Also we need to satisfy all our curstomers who are believing in our services.
                            To help our clients become more profitable, to provide services that will make carwashing easier, and together we will achieve success!
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-md-6 mt-5">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="2000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="./Images/Img1.png" alt="First slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="./Images/Img2.png" alt="Second slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="./Images/Img3.png" alt="Third slide"></img>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100" src="./Images/Img4.png" alt="Third slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="./Images/Img5.png" alt="Third slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="./Images/Img6.png" alt="Third slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="./Images/Img7.png" alt="Third slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="./Images/Img8.png" alt="Third slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="./Images/Img9.png" alt="Third slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="./Images/Img10.png" alt="Third slide"></img>
                        </div>
                    </div>
                </div>

                {/* <div className="card mt-5" id="slide">
                <h4 className="headerSmall">Equipments we uses here</h4>
                </div> */}
            </div>
        </div>

        <div className="quote mt-5">
         <p className="quteText">
            <i className="fas fa-quote-left fa-xs" id="quote"></i>
             We believe in excellent customer service, outstanding quality, well-crafted software for user convenient and customer satisfaction.
            <i className="fas fa-quote-right fa-xs" id="quote"></i>
        </p>
                
       </div>
       <div className="card-body mt-5" id="values">
            <h2 className="header">Our Values</h2>
            <div className="row mt-3 mb-3 text-center">
                    <div className="col">
                        <h5>Quality first</h5>
                        <i className="fas fa-award fa-3x" id="icon"></i>
                    </div>
                    <div className="col">
                        <h5>Honesty</h5>
                        <i className="fa fa-balance-scale fa-3x" id="icon"></i>
                    </div>
                    <div className="col">
                        <h5>Fair price</h5>
                        <i className="fa fa-tag mt-1 fa-3x" id="icon"></i>
                    </div>
                    <div className="col">
                        <h5>Customer Satisfaction</h5>
                        <i className="fa fa fa-star fa-3x" id="icon"></i>

                    </div>

                    <div className="col text-center">
                        <h5>Reliability</h5>
                        <i className="fas fa-handshake fa-3x" id="icon"></i>
                    </div>
                </div>
            </div>
           
        
    </div>
);
export default AboutUs;