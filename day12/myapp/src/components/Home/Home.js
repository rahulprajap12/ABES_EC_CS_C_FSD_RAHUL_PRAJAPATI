import React from 'react';
import './Home.css';

const Home = () => {
    const products = [
        { id: 1, name: 'Product 1', price: '$99.99' },
        { id: 2, name: 'Product 2', price: '$149.99' },
        { id: 3, name: 'Product 3', price: '$79.99' },
        { id: 4, name: 'Product 4', price: '$199.99' },
    ];

    return (
        <div className="page-content">
            <h1>Welcome to Amazon Clone</h1>
            <div className="featured-products">
                <h2>Featured Products</h2>
                <div className="products-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-image">
                                {product.name}
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                                <button className="add-to-cart-btn">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;