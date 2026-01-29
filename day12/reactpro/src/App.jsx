import React from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import "./App.css";

export default function App() {
  const products = [
    { name: "Laptop", price: "₹55,000", rating: 4 },
    { name: "Headphones", price: "₹2,999", rating: 5 },
    { name: "Smartwatch", price: "₹4,499", rating: 3 },
    { name: "Shoes", price: "₹1,999", rating: 4 },
  ];

  return (
    <>
      <Navbar />
      <div className="product-grid">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </>
  );
}
