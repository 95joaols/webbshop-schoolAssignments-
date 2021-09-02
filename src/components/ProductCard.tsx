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
  link: {
    textDecoration: "none",
    color: "black",
  },
});

interface props {
  product: Product;
}

export const ProductCard: React.FC<props> = ({ product }) => {
  const classes = useStyles();
  const url = `/detail/${product.Id}`;

  return (
    <Card className={classes.root}>
      <Link to={url} className={classes.link}>
        <CardMedia
          className={classes.media}
          image={product.imageUrl}
          title={product.Name}
        />
      </Link>
      <CardContent className={classes.Content}>
        <Link to={url} className={classes.link}>
          <Typography noWrap gutterBottom component="p">
            {product.Name}
          </Typography>
          <Typography variant="body2" component="p">
            Year: {product.year}
          </Typography>
          <Typography variant="body2" component="p">
            Genre: {product.genre}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            Rating: {product.rating}
          </Typography>
        </Link>

        <Typography
          gutterBottom
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {product.price}kr
        </Typography>
        <AddProductToCart product={product} />
      </CardContent>
    </Card>
  );
};
