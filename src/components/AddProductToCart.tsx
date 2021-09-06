import { TextField, Button, makeStyles } from "@material-ui/core";
import { FC, useState } from "react";
import { Product } from "../entity/Product";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection:"column",
  },
  input: {},
});

interface props {
  product: Product;
}

export const AddProductToCart: FC<props> = ({ product }) => {
  const classes = useStyles();

  const [nr, setNr] = useState(1);
  const changeNr = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value as unknown as number;
    setNr(newValue < 1 ? 1 : newValue);
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
        value={nr}
        onChange={changeNr}
        className={classes.input}
      />
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={() => {}}
      >
        Add To Cart
      </Button>
    </div>
  );
};
