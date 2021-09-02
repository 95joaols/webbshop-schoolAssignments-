import { createContext, FC, useEffect, useState } from "react";
import { allProducts } from "../entity/Product";


interface ContextValue {
    
}

export const ProductContext = createContext<ContextValue>({

});

const ProductProvider: FC = (props) => {



    useEffect(() => {
        localStorage.setItem( 'allProducts', JSON.stringify(allProducts))
    });

    return (
        <ProductContext.Provider
            value={{

            }}>
                {}
        </ProductContext.Provider>
    );

};

export default ProductProvider;