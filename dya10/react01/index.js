// Navbar Component
function Navbar({ cartCount }) {
    return (
        <div>
            <nav className="navbar">
                <a href="#" className="nav-brand">
                    Amazon Clone
                </a>
                <div className="nav-links">
                    <a href="#" className="nav-link" onClick={() => navigateTo('home')}>
                        Home
                    </a>
                    <a href="#" className="nav-link" onClick={() => navigateTo('about')}>
                        About
                    </a>
                    <a href="#" className="nav-link cart-icon" onClick={() => navigateTo('cart')}>
                        Cart
                        <span className="cart-count">{cartCount}</span>
                    </a>
                </div>
            </nav>
            <div className="secondary-nav">
                <a href="#">Today's Deals</a>
                <a href="#">Customer Service</a>
                <a href="#">Registry</a>
                <a href="#">Gift Cards</a>
                <a href="#">Sell</a>
            </div>
        </div>
    );
}

// Page Components
function Home() {
    return (
        <div className="page-content">
            <h1>Welcome to Amazon Clone</h1>
            <p>This is the home page of our Amazon-style website.</p>
            <div style={{ marginTop: '20px' }}>
                <h2>Featured Products</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
                    {['Product 1', 'Product 2', 'Product 3', 'Product 4'].map((product, index) => (
                        <div key={index} style={{ 
                            border: '1px solid #ddd',
                            padding: '15px',
                            borderRadius: '8px',
                            textAlign: 'center'
                        }}>
                            <div style={{ 
                                backgroundColor: '#f8f8f8',
                                height: '150px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '10px'
                            }}>
                                {product}
                            </div>
                            <button style={{
                                backgroundColor: '#f0c14b',
                                border: '1px solid #a88734',
                                borderRadius: '4px',
                                padding: '8px 16px',
                                cursor: 'pointer'
                            }}>
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function About() {
    return (
        <div className="page-content">
            <h1>About Us</h1>
            <p style={{ marginTop: '20px', lineHeight: '1.6' }}>
                Welcome to our Amazon Clone website. This is a demo project showcasing
                React components and navigation. We've implemented an Amazon-inspired
                design with a responsive navbar and basic routing functionality.
            </p>
        </div>
    );
}

function Cart() {
    return (
        <div className="page-content">
            <h1>Shopping Cart</h1>
            <div style={{ marginTop: '20px' }}>
                <p>Your cart has 3 items</p>
                <div style={{ 
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }}>
                    {['Item 1', 'Item 2', 'Item 3'].map((item, index) => (
                        <div key={index} style={{
                            border: '1px solid #ddd',
                            padding: '15px',
                            borderRadius: '8px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <span>{item}</span>
                            <button style={{
                                backgroundColor: '#dc3545',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                padding: '8px 16px',
                                cursor: 'pointer'
                            }}>
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Main App
function App() {
    const [currentPage, setCurrentPage] = React.useState('home');
    const [cartCount, setCartCount] = React.useState(3); // Demo cart count

    // Navigation function
    window.navigateTo = (page) => {
        setCurrentPage(page);
    };

    // Render current page
    const renderPage = () => {
        switch(currentPage) {
            case 'about':
                return <About />;
            case 'cart':
                return <Cart />;
            default:
                return <Home />;
        }
    };

    return (
        <div>
            <Navbar cartCount={cartCount} />
            {renderPage()}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

