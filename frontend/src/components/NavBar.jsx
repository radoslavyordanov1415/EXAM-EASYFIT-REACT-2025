import React from "react";
import logo from '../assets/img/logo.png';
import { Link } from "react-router-dom";
import '../styles/NavBar.css';
export default function NavBar() {
    return (
        <div className="navbar">
            <div className="leftSide">
                <img src={logo} />
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/logout">Logout</Link>
            </div>
        </div>
    )


}