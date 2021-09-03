import { createContext, useContext, useState } from 'react';
import { Product } from '../entity/Product';
import { AdminComponent } from './Admin';

export const Context = createContext<any>('defaultValue');

  const productsarray: Product[] = [{
    Id: 0,
    Name: "Temp",
    price: 9,
    description:"descriptio1",
    imageUrl:"https://via.placeholder.com/300x140"
  },
  {
    Id: 1,
    Name: "Temp2",
    price: 10,
    description:"description2",
    imageUrl:"https://via.placeholder.com/300x140"
  }];

export const AdminContext = () => {
  const [productContext, setProductContext] = useState<Product[]>(productsarray);                 // Debug.
  const [selectedProductContext, setSelectedProductContext] = useState<Product>({Id: -1, Name: '', price: -1, description: '', imageUrl: ''});

  return (
    <Context.Provider value={[selectedProductContext, setSelectedProductContext]}>
      <AdminComponent product={ productsarray } />
    </Context.Provider>
  );
}
