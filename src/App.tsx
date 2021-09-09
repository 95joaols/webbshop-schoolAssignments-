import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import CustomerProvider from "./contexts/CustomerContext";
import ProductProvider from "./contexts/ProductContext";
import ShoppingCartProvider from "./contexts/ShoppingCartContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ShoppingCartProvider>
          <CustomerProvider>
            <ProductProvider>
              <Suspense fallback={"<p>loading</p>"}>
                <Layout />
              </Suspense>
            </ProductProvider>
          </CustomerProvider>
        </ShoppingCartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
