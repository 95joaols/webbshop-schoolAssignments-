import { makeStyles } from "@material-ui/core/styles";
import { Product } from "../entity/Product";
import { ProductComponent } from "./ProductComponent";

const useStyles = makeStyles({
  root: {
    display:"flex",
  },

});

interface props {
  products: Product[];
  onAddToCart: (product: Product,nr: number) => void;
}

export const ProductList: React.FC<props> = ({ products, onAddToCart }) => {
    const classes = useStyles();
    return (<div className={classes.root}>
        {products.map((product) => <ProductComponent key={product.Id} product={product} onClick={onAddToCart}/>)}
    </div>)
 }
