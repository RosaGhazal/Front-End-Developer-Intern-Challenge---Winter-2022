import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="navStyle">
            <ul>
                <Link className="link" to="/">Home</Link>
            </ul>
        </div>
    );
}
