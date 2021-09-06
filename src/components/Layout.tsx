import { FC, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { Menu } from "./Menu";

const HomePage = lazy(() => import("../page/HomePage"));
const ProductDetail = lazy(() => import("../page/ProductPage"));
const CheckoutPage = lazy(() => import("../page/CheckoutPage"));
const SummaryPage = lazy(() => import("../page/SummaryPage"));


export const Layout: FC = () => {
  return (
    <>
      <Menu />
      <Suspense fallback={"<p>loading</p>"}>
        <Switch>
          <Route path="/summary" component={SummaryPage} />
          <Route path="/shoppingcart" component={CheckoutPage} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Suspense>
    </>
  );
};
