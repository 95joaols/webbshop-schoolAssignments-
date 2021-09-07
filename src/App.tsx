import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import CustomerProvider from "./contexts/CustomerContext";
import ShoppingCartProvider from "./contexts/ShoppingCartContext";
import ProductProvider from "./contexts/ProductContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ShoppingCartProvider>
          <CustomerProvider>
            <ProductProvider>
              <Layout />
            </ProductProvider>
          </CustomerProvider>
        </ShoppingCartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
