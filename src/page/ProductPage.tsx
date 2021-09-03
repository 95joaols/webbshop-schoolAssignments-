import React from "react";
import { RouteComponentProps } from "react-router";
import { allProducts } from "../entity/Product";
import { Product } from "../entity/Product";

interface Props extends RouteComponentProps<{ id: string }> {}

export default function ProductDetail({match}: Props) {
    const movie = allProducts.find((item) => item.id == ((match.params.id as unknown) as number) )
        console.log("movie",match.params.id,movie);
        

    return (
        <div>
            <h1>{movie?.name}</h1>
        </div>
    );

}