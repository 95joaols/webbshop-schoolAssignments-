import { makeStyles } from "@material-ui/core/styles";
import { Product } from "../entity/Product";
import ErrorBoundary from "./ErrorBoundary";
import { ProductCard } from "./ProductCard";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
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
      {products.map((product, index) => (
        //add ErrorBoundary shape of a card
        <ErrorBoundary styleType="card">
          <ProductCard
            key={product.id}
            product={product}
            timeToShow={index * 150}
          />
        </ErrorBoundary>
      ))}
    </div>
  );
};
