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
  //all products in the web
  const [products, setProducts] = useState<Product[]>([]);
  const [lastId, setLastId] = useState<number>(14);

  //Add or Update the product depend of if it has a id or not.
  const AddOrUpdateProduct = (product: Product) => {
    let newArray: Product[];
    if (+product.id > 0) {
      //remove the product that have the id of the new product
      newArray = products.filter((element) => element.id !== product.id);
    } else {
      //Get the new id and set the id
      product.id = lastId + 1;
      //update the hock
      setLastId(product.id);
      //copy the products and do nothing
      newArray = [...products];
    }
    //Update the Products
    setProducts([...newArray, product]);
  };

  const deleteProduct = (id: number) => {
    //remove the product that have the id.
    setProducts(products.filter((element) => element.id !== id));
  };

  //init the data from the localStorage if it is any
  useEffect(() => {
    (async function () {
      try {
        //load from localStorage
        const localStorageAllProducts = localStorage.getItem("allProducts");
        const localStorageLastId = localStorage.getItem("lastId");

        //check if we have got any data
        if (localStorageAllProducts && localStorageLastId) {
          //parse the Products
          const parasedProducts: Product[] = await JSON.parse(
            localStorageAllProducts
          );
          //parse the id
          const parsedId: number = await JSON.parse(localStorageLastId);

          //check and set
          if (parasedProducts.length && parsedId) {
            setProducts(parasedProducts);
            setLastId(parsedId);
          } else {
            //set the deffalt data
            setProducts(allProducts);
            setLastId(14);
          }
        } else {
          //set the deffalt data
          setProducts(allProducts);
          setLastId(14);
        }
      } catch (error) {}
    })();
  }, []);

  //update localStorage when we update products.
  useEffect(() => {
    localStorage.setItem("allProducts", JSON.stringify(products));
  }, [products]);
  
  //update localStorage when we update lastId
  useEffect(() => {
    localStorage.setItem("lastId", JSON.stringify(lastId));
  }, [lastId]);

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
