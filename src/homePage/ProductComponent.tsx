import { Product } from "../entity/Product";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    maxWidth: 144,
    margin:10
  },
  media: {
    width: 144,
    height:120
  },
  Content: {
    paddingBottom: 0
    
  },
  details: {
  },
  input: {
  
  }
});


interface props {
  product: Product;
  onClick: (product: Product,nr: number) => void;
}

export const ProductComponent: React.FC<props> = ({ product,onClick }) => {
  const classes = useStyles();

  const [nr, setNr] = useState(1);
  const changeNr = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = (e.target.value as unknown)as number
    setNr(newValue < 1 ? 1 : newValue);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.imageUrl}
        title={product.Name}
      />
      <div className={classes.details}>
        <CardContent className={classes.Content}>
          <Typography gutterBottom component="p">
            {product.Name}
          </Typography>
         
        
          <Typography
            
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {product.price}kr
          </Typography>
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
            onClick={() => { onClick(product,nr)}}>
            Add To Cart
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};
