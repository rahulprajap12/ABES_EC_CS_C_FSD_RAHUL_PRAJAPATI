import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cartCount }) => {
    return (
        <div>
            <nav className="navbar">
                <Link to="/" className="nav-brand">
                    Amazon Clone
                </Link>
                <div className="nav-links">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                    <Link to="/about" className="nav-link">
                        About
                    </Link>
                    <Link to="/cart" className="nav-link cart-icon">
                        Cart
                        <span className="cart-count">{cartCount}</span>
                    </Link>
                </div>
            </nav>
            {/* <div className="secondary-nav">
                <a href="#">Today's Deals</a>
                <a href="#">Customer Service</a>
                <a href="#">Registry</a>
                <a href="#">Gift Cards</a>
                <a href="#">Sell</a>
            </div> */}
        </div>
    );
};

export default Navbar;