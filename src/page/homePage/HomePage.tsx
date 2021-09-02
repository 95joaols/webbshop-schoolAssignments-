import React from "react";
import { Product } from "../../entity/Product";
import { ProductCardList } from "../../components/ProductCardList";

const temp: Product[] = [
  {
    Id: 1,
    Name: "Temp Product",
    year: 1995,
    genre: "horro",
    rating: 5,
    price: 9,
    description: "null",
    imageUrl: "https://via.placeholder.com/300x120",
  },
  {
    Id: 2,
    Name: "Tbvncct",
    year: 1995,
    genre: "horro",
    rating: 5,
    price: 476,
    description: "null",
    imageUrl: "https://via.placeholder.com/300x120",
  },
  {
    Id: 3,
    Name: "Tbvncct",
    year: 1995,
    genre: "horro",
    rating: 5,
    price: 476,
    description: "null",
    imageUrl: "https://via.placeholder.com/300x120",
  },
  {
    Id: 4,
    Name: "Tbvncct",
    year: 1995,
    genre: "horro",
    rating: 5,
    price: 476,
    description: "null",
    imageUrl: "https://via.placeholder.com/300x120",
  },
  {
    Id: 5,
    Name: "Tbvncct",
    year: 1995,
    genre: "horro",
    rating: 5,
    price: 476,
    description: "null",
    imageUrl: "https://via.placeholder.com/300x120",
  },
  {
    Id: 6,
    Name: "Tbvncct",
    year: 1995,
    genre: "horro",
    rating: 5,
    price: 476,
    description: "null",
    imageUrl: "https://via.placeholder.com/300x120",
  },
  {
    Id: 7,
    Name: "Tbvncct",
    year: 1995,
    genre: "horro",
    rating: 5,
    price: 476,
    description: "null",
    imageUrl: "https://via.placeholder.com/300x120",
  },
  {
    Id: 8,
    Name: "Tbvncct hfght tfhtgfht fthgffgn nghtrf hghgf ",
    year: 1995,
    genre: "horro",
    rating: 5,
    price: 476,
    description: "null",
    imageUrl: "https://via.placeholder.com/300x120",
  },
];

interface props {}
export default class HomePage extends React.Component<props> {
  render() {
    return (
      <>
        <ProductCardList products={temp} />
      </>
    );
  }
}
