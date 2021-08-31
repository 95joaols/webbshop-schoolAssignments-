import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './homePage/HomePage';
import { Menu } from './component/Menu';
import { ProductComponent } from './component/ProductComponent';
import { AdminComponent } from './component/Admin';
import { Product } from './entity/Product';

function App() {
  const tempprodyct: Product = {
    Id: 0,
    Name: "Temp",
    price: 9,
    description:"null",
    imageUrl:"https://via.placeholder.com/300x140"
  }

  const productsarray: Product[] = [{
    Id: 0,
    Name: "Temp",
    price: 9,
    description:"descriptio1",
    imageUrl:"https://via.placeholder.com/300x140"
  },
  {
    Id: 1,
    Name: "Temp2",
    price: 10,
    description:"description2",
    imageUrl:"https://via.placeholder.com/300x140"
  }];

  return (
    <div className="App">
        <Menu />
      <HomePage />
      <ProductComponent product={ tempprodyct } />
      <AdminComponent product={ productsarray } />
    </div>
  );
}

export default App;
