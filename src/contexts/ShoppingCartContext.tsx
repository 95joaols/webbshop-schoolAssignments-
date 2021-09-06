import { createContext, FC, useState } from "react";
import { ShoppingCartItem } from "../entity/ShoppingCartItem";


interface ContextValue {
    shoppingCartItems: ShoppingCartItem[];
    updateShoppingCart: (shoppingCartItems: ShoppingCartItem[]) => void
}

export const ShoppingCartContext = createContext<ContextValue>({
    shoppingCartItems: [],
    updateShoppingCart: () => {}
});

const ShoppingCartProvider: FC = (props) => {
    const [shoppingCartItems, setShoppingCartItems] = useState<ShoppingCartItem[]>(
        []
      );

      const updateShoppingCart = (shoppingCartItems: ShoppingCartItem[]) => {
        setShoppingCartItems(shoppingCartItems)
    }


    return (
        <ShoppingCartContext.Provider
            value={{
                shoppingCartItems,
                updateShoppingCart
                }}>
                {props.children}
        </ShoppingCartContext.Provider>
    );

};

export default ShoppingCartProvider
