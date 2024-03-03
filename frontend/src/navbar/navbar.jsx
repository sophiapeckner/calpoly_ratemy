import React from "react";
import "./navbar.css"
import { Link } from 'react-router-dom';

export default function NavBar () {
    return (
        <div className="topNav">
            <div className="topLeft"></div>
            <div className="topCenter">
                <ul className="topNavList">
                    <li className="navListItem Org"><Link to="/Organizations">Organizations</Link></li>
                    <li className="navListItem Events">Events</li>
                </ul>
            </div>
            <div className="topRight">
                <ul className="topList">
                    <li className="navListItem Login"><Link to='/Login'>Login</Link></li>
                    <li className="navListItem SignUp"><Link to="/CreateAccount">Sign Up</Link></li>
                </ul>
            </div>
        </div>
    )
}