import React from 'react';
import './Cart.css';

const Cart = () => {
    const cartItems = [
        { id: 1, name: 'Item 1', price: '$99.99' },
        { id: 2, name: 'Item 2', price: '$149.99' },
        { id: 3, name: 'Item 3', price: '$79.99' },
    ];

    return (
        <div className="page-content">
            <h1>Shopping Cart</h1>
            <div className="cart-content">
                <p>Your cart has {cartItems.length} items</p>
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <span>{item.name}</span>
                            <div className="item-details">
                                <span>{item.price}</span>
                                <button className="remove-btn">
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-summary">
                    <h3>Cart Total: $329.97</h3>
                    <button className="checkout-btn">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;