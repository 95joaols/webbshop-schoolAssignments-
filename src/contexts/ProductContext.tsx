import { createContext, FC, useEffect, useState } from "react";
import { Product, allProducts } from "../entity/Product";

interface ContextValue {
  products: Product[];
  selectedProduct: Product;
//  setSelectedProduct: React.Dispatch<React.SetStateAction<Product>>;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
  addProduct: (product: Product) => void;
//  updateProductArray: (product: Product) => void;
}

export const ProductContext = createContext<ContextValue>({
  products: [],
  selectedProduct: {
      id: -1,
      name: 'test1',
      year: -1,
      genre: '',
      rating: -1,
      price: -1,
      description: '',
      imageUrl: ''
  },
  updateProduct: () => {},
  deleteProduct: () => {},
  addProduct: () => {},
//  updateProductArray: () => {}
});

const ProductProvider: FC = (props) => {
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [selectedProduct, setSelectedProduct] = useState<Product>({
    id: -1,
    name: 'test2',
    year: -1,
    genre: '',
    rating: -1,
    price: -1,
    description: '',
    imageUrl: ''
  });


  const updateProductArray = (product: Product) => {
    setSelectedProduct(product);
    console.log('set new: ', product);
    
    // setProducts(
    //   ...products,
  // )
    // setContext({
    //   ...context,
    //   [event.target.name]: event.target.value 
    // })
    // item = {
    //   [key]: value
    // };
    
    // setContext({
    //   ...context,
    //   [event.target.name]: event.target.value 
    // })

    // const newArray: Product[] = products.filter(element => element.id !== product.id);
    // const newArrayAppend: Product[] = [...newArray, product];
    // setProducts(newArrayAppend);
  }

  const updateProduct = (product: Product) => {
    const newArray: Product[] = products.filter(element => element.id !== product.id);
    const newArrayAppend: Product[] = [...newArray, product];
    setProducts(newArrayAppend);
  }

  const deleteProduct = (id: number) => {
    setProducts(products.filter(element => element.id !== id));
  }

  const addProduct = (product: Product) => {
    const newArray: Product[] = [...products, product];
    setProducts(newArray);
  }

  // useEffect(() => {
  //   localStorage.setItem( 'allProducts', JSON.stringify(allProducts))
  // });

  return (
    <ProductContext.Provider value={{
        selectedProduct,
        products,
        updateProduct,
        deleteProduct,
        addProduct
      }}>
        {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
