import { makeStyles } from "@material-ui/core/styles";
import { Product } from "../entity/Product";
import { ProductComponent } from "./ProductComponent";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
});

interface props {
  products: Product[];
}

export const ProductList: React.FC<props> = ({ products }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {products.map((product) => (
        <ProductComponent key={product.Id} product={product} />
      ))}
    </div>
  );
};
