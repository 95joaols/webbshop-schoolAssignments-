import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../page/homePage/HomePage";
import { Menu } from "./Menu";

export const Layout: FC = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </>
  );
};
