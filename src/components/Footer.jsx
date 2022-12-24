import React from "react";
import ReactDOM from "react-dom";

function Footer()
{   
    const date = new Date();
    const year = date.getFullYear();

    return <div>
        <footer>
        <p>copyright © {year}</p>
        </footer>
    </div>;
}

export default Footer;