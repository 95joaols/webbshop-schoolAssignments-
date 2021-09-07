import { Box, Container, makeStyles } from "@material-ui/core";
import React from "react";
import { RouteComponentProps } from "react-router";
import { AddProductToCart } from "../components/AddProductToCart";
import { allProducts } from "../entity/Product";
import { Product } from "../entity/Product";

const useStyles = makeStyles({
  root: {
    display: "flex",
    padding: "1rem 5rem",
    justifyContent: "center",
    flexDirection: "column",
  },
  content:{
    display: "flex",
    flexWrap: "wrap",
    paddingLeft: "1rem",
  },
  content1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minWidth: "50%",
  },
  img: {
    width: "20rem",
    height: "auto",
  },
  content2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "20rem",
  },
  pricebox: {
    display: "flex",
    background: "red",
    padding: "0.5rem",
    marginTop: "2rem",
    marginBottom: "1rem",
    height: "3rem",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "15px",
  },
  sidebox: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "3rem",
  },
  boxcontent: {
    display: "flex",
    alignItems: "center",
  },
});

interface Props extends RouteComponentProps<{ id: string }> {}

export default function ProductDetail({ match }: Props) {
  const movie: Product = allProducts.find(
    (item) => item.id == (match.params.id as unknown as number)
  )!;

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box>
          <h1>{movie?.name}</h1>
      </Box>
      <Container className={classes.content}>
        <Box className={classes.content1}>
          <img
            className={classes.img}
            src={movie?.imageUrl}
            alt={movie?.name}
          ></img>
        </Box>
        <Box className={classes.content2}>
          <Box className={classes.pricebox}>
            <h1>{movie?.price}kr</h1>
          </Box>
          <Box>
            <AddProductToCart product={movie} />
          </Box>
          <Container className={classes.sidebox}>
            <Box className={classes.boxcontent}>
              <h4>
                Released <em>{movie?.year}</em>
              </h4>
            </Box>
            <Box className={classes.boxcontent}>
              <h4>
                Rated <em>{movie?.rating}</em> on IMDB
              </h4>
            </Box>
            <Box className={classes.boxcontent}>
              <h4>{movie?.genre}</h4>
            </Box>
            <Box className={classes.boxcontent}>
              <p>"{movie?.description}"</p>
            </Box>
          </Container>
        </Box>
      </Container>
    </Container>
  );
}
