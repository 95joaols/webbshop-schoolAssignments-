import { makeStyles } from "@material-ui/core/styles";
import { Product } from "../entity/Product";
import { ProductCard } from "./ProductCard";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    // alignItems: "strech",
  },
});

interface props {
  products: Product[];
}

export const ProductCardList: React.FC<props> = ({ products }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          timeToShow={index * 150}
        />
      ))}
    </div>
  );
};
