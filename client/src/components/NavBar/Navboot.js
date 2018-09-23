import React from "react";
import { Link } from "react-router-dom";

const Navboot = () => (
    <div>
        <nav className="navbar navbar-expand-lg bg-warning">
            <ul className="navbar-nav">
                <li className="nav-link mr-4 ml-4">
                <Link to="/aboutus" className={window.location.pathname === "/aboutus" ? "nav-link active": "nav-link"}>
                    About Us
                </Link>
                </li>
                <li className="nav-link mr-4 ml-4">
                <Link to="/servicePage" className={window.location.pathname === "/servicePage" ? "nav-link active": "nav-link"}>
                    Service
                </Link>

                </li>
                <li className="nav-link mr-4 ml-4">
                <Link to="/appt" className={window.location.pathname === "/appt" ? "nav-link active": "nav-link"}>
                    Online Appoitment
                </Link>
                </li>
                <li className="nav-link mr-4 ml-4">
                <Link to="/contactUs" className={window.location.pathname === "/contactUs" ? "nav-link active": "nav-link"}>
                    Contact Us
                </Link>
                </li>
            </ul>
            <div className="collapse navbar-collapse justify-content-end">

            <Link to="/auth" className={window.location.pathname === "/auth" ? "nav-link active": "nav-link"}>
                Sign Up/Login
            </Link>
            
            </div>
        </nav>
    </div>
);

export default Navboot;
