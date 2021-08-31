import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './homePage/HomePage';
import { Menu } from './component/Menu';
import { ProductComponent } from './component/ProductComponent';
import { Product } from './entity/Product';

function App() {
  const tempprodyct: Product = {
    Id: 0,
    Name: "Temp",
    price: 9,
    description:"null",
    imageUrl:"https://via.placeholder.com/300x140"
  }

  return (
    <div className="App">
        <Menu />
      <HomePage />
      <ProductComponent product={ tempprodyct} />
    </div>
  );
}

export default App;
