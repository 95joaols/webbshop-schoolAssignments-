import { makeStyles } from "@material-ui/core/styles";
import { ProductCardSkeleton } from "./ProductCardSkeleton";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

export const ProductCardListSkeleton: React.FC = () => {
  const classes = useStyles();
  const loop = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className={classes.root}>
      {loop.map((i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
};
