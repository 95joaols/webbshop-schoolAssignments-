import React from "react";
import { allProducts } from "../entity/Product";
import { Product } from "../entity/Product";

interface Props {
    product: Product;
}

export default function ProductDetail({ product }: Props ) {
    const movie = allProducts.find((item) => item.id === product.id )

    return (
        <div>
            <h1>{movie?.name}</h1>
        </div>
    );

}