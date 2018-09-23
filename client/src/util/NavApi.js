import React from "react";
// import Navboot from "../components/NavBar/Navboot";
import {BrowserRouter as Route} from 'react-router-dom';
import AboutUs from "../components/Pages/AboutUs";
import ServicePage from "../components/Pages/ServicePage";

const NavApi = () => (
    <div>
            <Route exact path="/aboutus" component={AboutUs}/>
            <Route exact path="/servicePage" component={ServicePage}/>
    </div>
);

export default NavApi;