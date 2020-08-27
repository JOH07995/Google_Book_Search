import React from "react";
import "./style.css";

function Hero() {
    return (
        <div
            className="hero text-center"
            style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1533669955142-6a73332af4db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2878&q=80")',
            }}
        >
            <h3>Search for your Next Great Read</h3>

        </div>
    );
}

export default Hero;