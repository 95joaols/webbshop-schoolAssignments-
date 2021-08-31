import './App.css';
import HomePage from './homePage/HomePage';
import { Menu } from './component/Menu';
import { ProductComponent } from './homePage/ProductComponent';
import { Product } from './entity/Product';

function App() {
 
  const addToCart =(product: Product,nr: number) =>
  {
    console.log("product",product,"nr", nr);
    
  }

  return (
    <div className="App">
        <Menu />
      <HomePage onAddToCart={ addToCart} />
    </div>
  );
}

export default App;
