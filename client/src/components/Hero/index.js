import React from "react";
import "./style.css";

function Hero() {
    return (
        <div
            className="hero text-center"
            style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1553880287-f6d6720a05a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80")',
            }}
        >
            <h3>Search for your Next Great Read</h3>

        </div>
    );
}

export default Hero;