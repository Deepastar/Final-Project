import React from "react";
import { Link } from "react-router-dom";
import "./Navboot.css";

const Navboot = () => (
    <div>
        <nav className="navbar navbar-expand-lg" id="navId">
            <a className="navbar-brand" href="/">{localStorage.getItem("userName")==null ? null: localStorage.getItem("userName")}</a>
            <ul className="navbar-nav">
                <li className="nav-link mr-4 ml-4">
                <Link to="/aboutus" className={window.location.pathname === "/aboutus" ? "nav-link active": "nav-link"}>
                    About
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
            <div className="navbar-nav" id="signIn">

            <Link to="/auth" className={window.location.pathname === "/auth" ? "nav-link active": "nav-link"}>
                {localStorage.getItem("userName") == null ? "Sign Up/Login" : "Logout"}
                {/* Sign Up/Login */}
            </Link>
            
            </div>
        </nav>
    </div>
);

export default Navboot;
