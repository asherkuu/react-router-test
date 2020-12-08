import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const navStyle = {
        color: "white",
    };
    return (
        <nav>
            <Link to="/" style={navStyle}>
                <h3>Logo</h3>
            </Link>
            <ul>
                <Link to="/about" style={navStyle}>
                    <li>About</li>
                </Link>
                <Link to="/shop" style={navStyle}>
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Nav;
