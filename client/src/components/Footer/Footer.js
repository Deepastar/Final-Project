import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import "./footer.css";

class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="stylish-color-dark" className="font-small pt-4 mt-4" id="footerMain">
                <Container fluid className="text-center text-md-left" id="footer">
                    <Row className="text-center text-md-left" id="footID">
                        <Col md="3" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercasefont-weight-bold">Car Wash Service</h6>
                            <p>Save your valuable time and money here.</p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none"/>
                        <Col md="2" lg="2" xl="2" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Services</h6>
                            <p><a href="#!">Basic car wash</a></p>
                            <p><a href="#!">Premium car wash</a></p>
                            <p><a href="#!">Ultra Premium car wash</a></p>
                            <p><a href="#!">Factory detailing</a></p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none"/>
                        <Col md="3" lg="2" xl="2" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                            <p><a href="#!">Your Account</a></p>
                            <p><a href="#!">Become a Partner</a></p>
                            <p><a href="#!">Service Charges</a></p>
                            <p><a href="#!">Help center</a></p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none"/>
                        <Col md="4" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p><i className="fa fa-home mr-3" id="footIcon"></i> Orlando, FL 32826, US</p>
                            <p><i className="fa fa-envelope mr-3" id="footIcon"></i> info@gmail.com</p>
                            <p><i className="fa fa-phone mr-3" id="footIcon"></i> + 01 234 567 88</p>
                            <p><i className="fa fa-print mr-3" id="footIcon"></i> + 01 234 567 89</p>
                        </Col>
                    </Row>
                    {/* <hr/> */}
                    <Row className="d-flex align-items-center" id="panelFoot1">
                        <Col md="8" lg="8">
                            <p className="text-center text-md-left dark-text" id="panelFoot">&copy; {(new Date().getFullYear())} Copyright: <a className="link" id="panelFoot" href="https://www.carwashservice.com"> www.carwashservice.com </a></p>
                        </Col>
                        <Col md="4" lg="4" className="ml-lg-0">
                            <div className="text-center text-md-right">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-facebook" id="footIcon"></i></a></li>
                                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-twitter" id="footIcon"></i></a></li>
                                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-google-plus" id="footIcon"></i></a></li>
                                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-linkedin" id="footIcon"></i></a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Footer>
        );
    }
}

export default FooterPage;
// ________________________________________________________________



// import React, { Component } from 'react';
// class Footer extends Component {
    
  
//     render() {
//         return (
//           <footer>
//             <ul className="site-links">
//               <li>
//                 {/* &copy; {this.state.year} CoderJourney */}
//                 This is a list
//               </li>
//             </ul>
//           </footer>
//         );
//     }
// }
// export default Footer;
