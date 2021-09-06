import { makeStyles } from "@material-ui/core";
import React from "react";
import { RouteComponentProps } from "react-router";
import { AddProductToCart } from "../components/AddProductToCart";
import { allProducts } from "../entity/Product";
import { Product } from "../entity/Product";

const useStyles = makeStyles({
    root: {
      display: "flex",
    //   flexWrap: "wrap",
      padding: "1rem 10rem",
      justifyContent: "center",
    },
    
    content1: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: "80%",
        minWidth: "60%",
        padding: "1rem",
        
      },
      img: {
        width: "90%",
        height: "auto",
    },
    content2: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: "25%",
        maxWidth: "40%",
      },
    pricebox: {
        display: "flex",
        background: "red",
        padding: "0.5rem",
        marginTop: "5rem",
        height: "3rem",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "15px",
    },
    sidebox: {
        display: "flex",
        flexDirection: "column",
        marginTop: "1rem",
        padding: "1rem",
    },
    boxcontent: {
        display: "flex",        
        alignItems: "center",
        
    }
  });

interface Props extends RouteComponentProps<{ id: string }> {}

export default function ProductDetail({match}: Props) {
    const movie = allProducts.find((item) => item.id == ((match.params.id as unknown) as number) )
        console.log("movie",match.params.id,movie);

        const classes = useStyles();        

    return (
        <div className={classes.root}>
            <div className={classes.content1}>
                <h1>{movie?.name}</h1>
                <img className={classes.img} src={movie?.imageUrl} alt={movie?.name} width="500" height="600"></img>
            </div>
            <div className={classes.content2}>
                <div className={classes.pricebox}>
                    <h1>{movie?.price}kr</h1>
                </div>
                <div className={classes.sidebox}>
                    <div className={classes.boxcontent}>
                        <h4>Released <em>{movie?.year}</em></h4>
                    </div>                
                    <div className={classes.boxcontent}>
                        <h4>Rated <em>{movie?.rating}</em> on IMDB</h4>
                    </div>                
                    <div className={classes.boxcontent}>
                        <h4>{movie?.genre}</h4>
                    </div>
                    <div className={classes.boxcontent}>                        
                        <p>"{movie?.description}"</p>
                    </div>
                    {/* <AddProductToCart product={movie} /> */}
                </div>
            </div>
        </div>
    );

}