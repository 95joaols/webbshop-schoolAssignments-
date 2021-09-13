import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import { ProductCardList } from "../components/ProductCardList";
import { ProductContext } from "../contexts/ProductContext";

interface props {}

export default class HomePage extends React.Component<props> {
  static contextType = ProductContext;

  render() {
    return (
      <div style={{marginTop: 170}}>
        <ErrorBoundary>
          <ProductContext.Consumer>
            {(value) => <ProductCardList products={value.products} />}
          </ProductContext.Consumer>
        </ErrorBoundary>
      </div>
    );
  }
}
