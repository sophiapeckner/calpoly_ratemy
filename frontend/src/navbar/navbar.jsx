import React from "react";
import "./navbar.css"

export default function NavBar () {
    return (
        <div className="topNav">
            <div className="topLeft"></div>
            <div className="topCenter">
                <ul className="topNavList">
                    <li className="navListItem Org">Organizations</li>
                    <li className="navListItem Events">Events</li>
                </ul>
            </div>
            <div className="topRight">
                <ul className="topList">
                    <li className="navListItem Login">Login</li>
                    <li className="navListItem SignUp">Sign Up</li>
                </ul>
            </div>
        </div>
    )
}