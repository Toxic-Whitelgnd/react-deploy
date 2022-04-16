import React from "react";
import { Link } from "react-router-dom";

export function Home(){
    return(
        <div>
            <h1> [Home Page] </h1>

            <nav>
                <Link to="About">About</Link>
                <Link to="Contact">Contact us page</Link>

            </nav>
        </div>

    );
}

export function About(){
    return(
        <div>
            <h1> [About Page] </h1>
        </div>
    );
}

export function Contact(){
    return(
        <div>
            <h1> Contact Page </h1>
        </div>
    );
}

