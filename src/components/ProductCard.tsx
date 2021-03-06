import { Product } from "../entity/Product";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { AddProductToCart } from "./AddProductToCart";
import { Link } from "react-router-dom";
import { Box, Tooltip, Zoom } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    margin: 10,
    height: 590,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  media: {
    height: 300,
    backgroundSize: "contain",
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
  timeToShow: number;
}

export const ProductCard: React.FC<props> = ({ product, timeToShow }) => {
  const [show, setShow] = useState(false);

  //set the timer to make it show
  const timerId = setInterval(() => {
    setShow(true);
    clearInterval(timerId);
  }, timeToShow);

  const classes = useStyles();
  const url = `/product/${product.id}`;

  return (
    <Zoom in={show}>
      <Box maxWidth="50%">
      <Card className={classes.root}>
        <Link to={url} className={classes.link}>
          <CardMedia
            className={classes.media}
            image={product.imageUrl}
            title={product.name}
          />
        </Link>
        <CardContent className={classes.Content}>
          <Link to={url} className={classes.link}>
            <Tooltip title={product.name} aria-label="add">
              <Typography gutterBottom component="p">
                {product.name}
              </Typography>
            </Tooltip>
          </Link>
        </CardContent>
        <CardContent className={classes.Content}>
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
      </Box>
    </Zoom>
  );
};
