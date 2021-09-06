import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { CheckoutPage } from "../page/CheckoutPage";
import HomePage from "../page/HomePage";
import ProductDetail from "../page/ProductPage";
import { Menu } from "./Menu";
import { SummaryPage } from "../page/SummaryPage";

export const Layout: FC = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route path="/summary" component={SummaryPage} />
        <Route path="/shoppingcart" component={CheckoutPage} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  );
};
