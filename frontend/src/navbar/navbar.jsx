import React from "react";
import "./navbar.css"

export default function NavBar () {
    return (
        <div className="topNav">
            <div className="topCenter">
                <ul className="topNavList">
                    <li className="navListItem Org">Organizatons</li>
                    <li className="navListItem Events">Events</li>
                </ul>
            </div>
        </div>
    )
}