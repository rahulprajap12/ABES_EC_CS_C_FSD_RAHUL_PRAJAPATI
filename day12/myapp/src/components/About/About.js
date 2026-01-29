import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="page-content">
            <h1>About Us</h1>
            <div className="about-content">
                <p>
                    Welcome to our Amazon Clone website. This is a demo project showcasing
                    React components and navigation. We've implemented an Amazon-inspired
                    design with a responsive navbar and basic routing functionality.
                </p>
                <div className="features">
                    <h2>Our Features</h2>
                    <ul>
                        <li>Responsive Design</li>
                        <li>User-friendly Navigation</li>
                        <li>Shopping Cart Functionality</li>
                        <li>Product Catalog</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;