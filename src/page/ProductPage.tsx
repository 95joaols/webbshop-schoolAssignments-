import React from "react";
import { RouteComponentProps } from "react-router";
import { Box, Container, makeStyles } from "@material-ui/core";
import { AddProductToCart } from "../components/AddProductToCart";
import { allProducts } from "../entity/Product";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 170
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  contentimg: {
    display: "flex",
    flexDirection: "column",
    minWidth: "40%",
    marginTop: "1rem",
  },
  img: {
    width: "18rem",
    height: "auto",
  },
  content2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "20rem",
    marginTop: "1rem",
  },
  pricebox: {
    display: "flex",
    background: "red",
    padding: "0.5rem",
    marginBottom: "1rem",
    height: "3rem",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "15px",
  },
  infobox: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "3rem",
  },
});

interface Props extends RouteComponentProps<{ id: string }> {}

export default function ProductDetail({ match }: Props) {
  const movie = allProducts.find(
    (item) => item.id === +(match.params.id as unknown as number)
  )!;

  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      <Box>
        <h1>{movie.name}</h1>
      </Box>
      <Container className={classes.content}>
        <Box className={classes.contentimg}>
          <img
            className={classes.img}
            src={movie.imageUrl}
            alt={movie.name}
          ></img>
        </Box>
        <Box className={classes.content2}>
          <Box className={classes.pricebox}>
            <h1>{movie.price}kr</h1>
          </Box>
          <Box>
            <AddProductToCart product={movie} />
          </Box>
          <Container className={classes.infobox}>
            <Box>
              <h4>
                Released <em>{movie.year}</em>{" "}
              </h4>
            </Box>
            <Box>
              <h4>
                Rated <em>{movie.rating}</em> on IMDB
              </h4>
            </Box>
            <Box>
              <h4>{movie.genre}</h4>
            </Box>
            <Box>
              <p>"{movie.description}"</p>
            </Box>
          </Container>
        </Box>
      </Container>
    </Container>
  );
}
