import { TextField, Button, makeStyles } from "@material-ui/core";
import { FC, useContext, useState } from "react";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import { Product } from "../entity/Product";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  input: {},
});

interface props {
  product: Product;
}

export const AddProductToCart: FC<props> = ({ product }) => {
  const classes = useStyles();
  const { addToShoppingCart } = useContext(ShoppingCartContext);

  const [quantity, setQuantity] = useState(1);
  const changeNr = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value as unknown as number;
    setQuantity(newValue < 1 ? 1 : newValue);
  };
  return (
    <div className={classes.root}>
      <TextField
        id="outlined-number"
        label="Quantity"
        type="number"
        margin="dense"
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        value={quantity}
        onChange={changeNr}
        className={classes.input}
      />
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={() => {
          addToShoppingCart({ product, quantity });
        }}
      >
        Add To Cart
      </Button>
    </div>
  );
};
