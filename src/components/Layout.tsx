import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { CheckoutPage } from "./CheckoutPage";
import HomePage from "../page/HomePage";
import ProductDetail from "../page/ProductPage";
import { Menu } from "./Menu";

export const Layout: FC = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route path="/shoppingcart" component={CheckoutPage} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  );
};
