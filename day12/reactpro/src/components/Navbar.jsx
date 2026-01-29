import React from "react";
import { ShoppingCart, Home, Info } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">amazone</h1>
      <nav className="nav-links">
        <a href="#home" className="nav-item">
          <Home size={18} /> Home
        </a>
        <a href="#cart" className="nav-item">
          <ShoppingCart size={18} /> Cart
        </a>
        <a href="#about" className="nav-item">
          <Info size={18} /> About
        </a>
      </nav>
    </header>
  );
}
