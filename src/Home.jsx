import { useState } from 'react';
import './Home.css';

const Home = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const mangoProducts = [
    {
      id: 1,
      name: 'Alphonso Mango',
      image: './assets/react.svg',
      price: 5.99,
    },
    {
      id: 2,
      name: 'Kesar Mango',
      image: 'path_to_image',
      price: 4.99,
    },
    // Add more mango products here...
  ];

  return (
    <div className="home-page">
      <header className="header-home">
        <nav className="menu">
          <a href="#" className="logo">
            MangoStore
          </a>
          <div className="search-bar">
            <input type="text" placeholder="Search for mangoes" />
            <button>
              <i className="fa fa-search"></i>
            </button>
          </div>
          <div className="menu-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Profile</a>
            <a href="#">Cart ({cart.length})</a>
          </div>
        </nav>
      </header>

      <h1>Welcome to MangoStore</h1>
      <div className="product-grid">
        {mangoProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
