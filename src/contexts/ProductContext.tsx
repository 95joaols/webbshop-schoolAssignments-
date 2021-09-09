import { createContext, FC, useEffect, useState } from 'react';
import { Product, allProducts } from '../entity/Product';

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
  const [lastId, setLastId] = useState<number>(14);

  const AddOrUpdateProduct = (product: Product) => {
    if (product.id > 0) {
      const newArray: Product[] = products.filter(
        (element) => element.id !== product.id);
      const newArrayAppend: Product[] = [...newArray, product];
      setProducts(newArrayAppend);
    }

    else {
      const newId: number = lastId+1;
      setLastId(newId);
      const productWithId: Product = {
        id: newId,
        name: product.name,
        year: product.year,
        genre: product.genre,
        rating: product.rating,
        price: product.price,
        description: product.description,
        imageUrl: product.imageUrl
      };
      const newArray: Product[] = [...products];
      const newArrayAppend: Product[] = [...newArray, productWithId];
      setProducts(newArrayAppend);
    }
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter((element) => element.id !== id));
  };

  useEffect(() => {
    (async function () {
      try {
        const localStorageAllProducts = localStorage.getItem("allProducts");
        const localStorageLastId = localStorage.getItem("lastId");
        if (localStorageAllProducts && localStorageLastId) {
          const parasedProducts: Product[] = await JSON.parse(localStorageAllProducts);
          const parsedId: number = await JSON.parse(localStorageLastId);
          if (parasedProducts.length) {
            setProducts(parasedProducts);
            setLastId(parsedId);
          }
          else {
            setProducts(allProducts);
            setLastId(14);
          }
        }
        else {
          setProducts(allProducts);
          setLastId(14);
        }
      } catch (error) {}
    })();
  }, []);

  useEffect(() => {
    localStorage.setItem("allProducts", JSON.stringify(products));
    localStorage.setItem("lastId", JSON.stringify(lastId));
  }, [products, lastId]);

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
