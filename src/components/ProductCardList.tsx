import { makeStyles } from "@material-ui/core/styles";
import { Product } from "../entity/Product";
import { ProductCard } from "./ProductCard";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
});

interface props {
  products: Product[];
}

export const ProductCardList: React.FC<props> = ({ products }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {products.map((product) => (
        <ProductCard key={product.Id} product={product} />
      ))}
    </div>
  );
};
