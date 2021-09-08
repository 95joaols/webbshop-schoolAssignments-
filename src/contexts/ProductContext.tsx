import { createContext, FC, useEffect, useState } from "react";
import { Product, allProducts } from "../entity/Product";

interface ContextValue {
  products: Product[];
  AddOrUpdateProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
}

export const ProductContext = createContext<ContextValue>({
  products: [],
  AddOrUpdateProduct: () => {},
  deleteProduct: () => {},
});

const ProductProvider: FC = (props) => {
  const [products, setProducts] = useState<Product[]>([]);

  const AddOrUpdateProduct = (product: Product) => {
    const newArray: Product[] = products.filter(
      (element) => element.id !== product.id
    );
    const newArrayAppend: Product[] = [...newArray, product];

    setProducts(newArrayAppend);
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter((element) => element.id !== id));
  };

  useEffect(() => {
    (async function () {
      try {
        const localStorageAllProducts = localStorage.getItem("allProducts");
        if (localStorageAllProducts) {
          const data: Product[] = await JSON.parse(localStorageAllProducts);
          if (data.length) {
            setProducts(data);
          } else {
            setProducts(allProducts);
          }

          console.log("data", data);
        } else {
          setProducts(allProducts);
          console.log("allProducts", allProducts);
        }
      } catch (error) {}
    })();
  }, []);

  useEffect(() => {
    localStorage.setItem("allProducts", JSON.stringify(products));
  }, [products]);

  return (
    <ProductContext.Provider
      value={{
        products,
        AddOrUpdateProduct,
        deleteProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
