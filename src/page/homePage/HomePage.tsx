import React from "react";
import { Product } from "../../entity/Product";
import { ProductList } from "../../components/ProductList";

const temp: Product[] = [
  {
    Id: 1,
    Name: "Temp Product",
    year: 1995,
    genre: "horro",
    rating: 5,
    price: 9,
    description: "null",
    imageUrl: "https://via.placeholder.com/144x120",
  },
  {
    Id: 2,
    Name: "Tbvncct",
    year: 1995,
    genre: "horro",
    rating: 5,
    price: 476,
    description: "null",
    imageUrl: "https://via.placeholder.com/144x120",
  },
];

interface props {}
export default class HomePage extends React.Component<props> {
  render() {
    return (
      <>
        <ProductList products={temp} />
      </>
    );
  }
}
