import React from "react";
import { ProductCardList } from "../components/ProductCardList";
import { ProductContext } from "../contexts/ProductContext";

interface props {}

export default class HomePage extends React.Component<props> {
  static contextType = ProductContext;

  render() {
    return (
      <ProductContext.Consumer>
        {(value) => <ProductCardList products={value.products} />}
      </ProductContext.Consumer>
    );
  }
}
