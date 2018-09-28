import React from "react";
// import NavApi from "./util/NavApi";
import Navboot from "./components/NavBar/Navboot";
import AboutUs from "./components/Pages/AboutUs";
import ServicePage from "./components/Pages/ServicePage";
import ContactUs from "./components/Pages/ContactUs"
import Appointment from "./components/Pages/Appointment"
import Auth from "./components/Pages/SignIn"
import SignUp from "./components/Pages/SignUp"
import Jumbotron from "./components/Jumbotron/Jumbotron"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from "./components/Pages/Homepage";
import FooterPage from "./components/Footer/Footer";


const App = () => (
    <div className="container-fluid">
        <Router>
            <div>
                <Navboot />
                <Jumbotron> Car Wash Service </Jumbotron>
                <Route exact path="/" component={Homepage}/> 
                <Route exact path="/aboutus" component={AboutUs} />
                <Route exact path="/servicePage" component={ServicePage} />
                <Route exact path="/contactUs" component={ContactUs} />
                <Route exact path="/appt" component={Appointment} />
                <Route exact path="/auth" component={Auth} />
                <Route exact path="/signUp" component={SignUp}/>
            </div>
        </Router>  
        <FooterPage />  
    </div>
);

export default App;
