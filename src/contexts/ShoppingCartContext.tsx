import { createContext, FC, useState } from "react";
import { ShoppingCartItem } from "../entity/ShoppingCartItem";

interface ContextValue {
  shoppingCartItems: ShoppingCartItem[];
  updateShoppingCart: (shoppingCartItems: ShoppingCartItem[]) => void;
  addToShoppingCart: (shoppingCartItem: ShoppingCartItem) => void;
}

export const ShoppingCartContext = createContext<ContextValue>({
  shoppingCartItems: [],
  updateShoppingCart: () => {},
  addToShoppingCart: () => {},
});

const ShoppingCartProvider: FC = (props) => {
  const [shoppingCartItems, setShoppingCartItems] = useState<
    ShoppingCartItem[]
  >([]);

  const updateShoppingCart = (shoppingCartItems: ShoppingCartItem[]) => {
    setShoppingCartItems(shoppingCartItems);
  };

  const addToShoppingCart = (shoppingCartItem: ShoppingCartItem) => {
    //see if the CartItem exist if it das we are picking the ref out.
    const CartItem = shoppingCartItems.find(
      (item) => item.product.id === shoppingCartItem.product.id
    );
    if (CartItem) {
      //modifier the ref
      CartItem.quantity = +CartItem.quantity + +shoppingCartItem.quantity;
      setShoppingCartItems([...shoppingCartItems]);
    } else {
      //Adding it
      setShoppingCartItems([...shoppingCartItems, shoppingCartItem]);
    }
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCartItems,
        updateShoppingCart,
        addToShoppingCart,
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
