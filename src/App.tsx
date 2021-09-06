import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import CustomerProvider from "./contexts/CustomerContext";
import ShoppingCartProvider from "./contexts/ShoppingCartContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ShoppingCartProvider>
          <CustomerProvider>
            <Suspense fallback={"<p>loading</p>"}>
              <Layout />
            </Suspense>
          </CustomerProvider>
        </ShoppingCartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
