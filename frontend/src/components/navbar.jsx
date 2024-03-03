import React from "react";
import "./navbar.css"
import { Link } from 'react-router-dom';

export default function NavBar () {
    return (
        <div className="topNav">
            <div className="topLeft">
                <div className="NavListItem"><Link className="link" to="/Home">Home</Link></div>
            </div>
            <div className="topCenter">
                <ul className="topNavList">
                    <li className="navListItem Org"><Link className="link" to="/Organizations">Organizations</Link></li>
                    <li className="navListItem Events"><Link className="link" to="/Events">Events</Link></li>
                </ul>
            </div>
            <div className="topRight">
                <ul className="topList">
                    <li className="navListItem Login"><Link className="link" to='/Login'>Login</Link></li>
                    <li className="navListItem SignUp"><Link className="link" to="/CreateAccount">Sign Up</Link></li>
                </ul>
            </div>
        </div>
    )
}