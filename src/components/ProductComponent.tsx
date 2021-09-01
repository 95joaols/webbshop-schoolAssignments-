import { Product } from "../entity/Product";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { AddProductToCart } from "./AddProductToCart";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 144,
    margin: 10,
  },
  media: {
    width: 144,
    height: 120,
  },
  Content: {
    paddingBottom: 0,
  },
  details: {},
  input: {},
});

interface props {
  product: Product;
}

export const ProductComponent: React.FC<props> = ({ product }) => {
  const classes = useStyles();
  const url = `/detail/${product.Id}`;

  return (
    <Card className={classes.root}>
      <Link to={url}>
        <CardMedia
          className={classes.media}
          image={product.imageUrl}
          title={product.Name}
        />
      </Link>
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
          <AddProductToCart />
        </CardContent>
      </div>
    </Card>
  );
};
