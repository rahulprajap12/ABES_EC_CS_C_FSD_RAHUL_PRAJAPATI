import React from "react";
import { Star } from "lucide-react";
import "./ProductCard.css";

export default function ProductCard({ name, price, rating }) {
  return (
    <div className="card">
      <img
        src={`https://via.placeholder.com/200x150?text=${name}`}
        alt={name}
        className="card-img"
      />
      <h3 className="card-title">{name}</h3>
      <p className="card-price">{price}</p>
      <div className="card-rating">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} fill="gold" color="gold" />
        ))}
      </div>
      <button className="add-btn">Add to Cart</button>
    </div>
  );
}
