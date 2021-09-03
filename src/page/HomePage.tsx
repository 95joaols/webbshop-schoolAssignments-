import React from "react";
import { ProductCardList } from "../components/ProductCardList";
import { allProducts } from "../entity/Product";

interface props {}

export default class HomePage extends React.Component<props> {
  render() {
    return (
      <>
        <ProductCardList products={allProducts} />
      </>
    );
  }
}
