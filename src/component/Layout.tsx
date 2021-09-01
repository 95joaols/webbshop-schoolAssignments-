import { FC } from "react"
import { Product } from "../entity/Product"
import HomePage from "../page/homePage/HomePage"
import { Menu } from "./Menu"

export const Layout: FC = () => {
     const addToCart =(product: Product,nr: number) =>
  {
    console.log("product",product,"nr", nr);
    
  }
    return (
        <>
            <Menu />
            <HomePage onAddToCart={ addToCart} />
        </>
    )
}