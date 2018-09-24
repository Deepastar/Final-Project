import React from "react";
// import NavApi from "./util/NavApi";
import Navboot from "./components/NavBar/Navboot";
import AboutUs from "./components/Pages/AboutUs";
import ServicePage from "./components/Pages/ServicePage";
import ContactUs from "./components/Pages/ContactUs"
import Appointment from "./components/Pages/Appointment"
import Auth from "./components/Pages/Auth"
import Jumbotron from "./components/Jumbotron/Jumbotron"
import { BrowserRouter as Router, Route } from 'react-router-dom';


const App = () => (
    <div className="container-fluid">
        <Router>
            <div>
                <Navboot />
                <Jumbotron> Car Wash Service </Jumbotron>
                <Route exact path="/aboutus" component={AboutUs} />
                <Route exact path="/servicePage" component={ServicePage} />
                <Route exact path="/contactUs" component={ContactUs} />
                <Route exact path="/appt" component={Appointment} />
                <Route exact path="/auth" component={Auth} />
            </div>
        </Router>   
    </div>
);

export default App;
