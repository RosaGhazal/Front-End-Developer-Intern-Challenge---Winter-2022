import React from "react";
import { Link } from "react-router-dom";
import './index.css';

export default function Home() {
    return (
        <>
        <div className="home">
            <Link className="homeLink" to="/nasaphoto" >Watch the universe!</Link>

        </div>
        <div className="footerStyle">
            <p>Astronomy Picture of the Day</p>
            <p>Shopify Challenge, Developed By Rosa Ghazal</p>
        </div>

        </>
    );
}

