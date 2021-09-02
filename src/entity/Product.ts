import React from "react";
import * as products from '../../products.json';

export type Product = {
  Id: number;
  Name: string;
  year: number;
  genre: string;
  rating: number;
  price: number;
  description: string;
  imageUrl: string;
};
