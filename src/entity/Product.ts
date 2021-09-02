import React from "react";
import * as products from '../../products.json';

export type Product = {
    Id: number,
    Name: string,
    // year: number,
    // genre: string,
    // rating: number,
    price: number,
    description: string,
    imageUrl: string
}

export let allProducts: Product[];

export function SaveProductsToLocalStorage() {
    localStorage.setItem("allProducts", JSON.stringify(allProducts));
}

export function GetProductsFromLocalStorage() {
    const productString = localStorage.getItem("allProducts");

    if (!productString) {
        allProducts = JSON.parse(products).map((product) => {
            return new product(
                product.
            );
        })
    }
}