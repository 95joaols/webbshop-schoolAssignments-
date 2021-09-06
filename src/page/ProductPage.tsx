import { makeStyles } from "@material-ui/core";
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
    },    
    content1: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: "40rem",
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
        marginTop: "5rem",
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
    }
  });

interface Props extends RouteComponentProps<{ id: string }> {}

export default function ProductDetail({match}: Props) {
    const movie: Product = allProducts.find((item) => item.id == ((match.params.id as unknown) as number) )!;
        
        const classes = useStyles();        

    return (
        <div className={classes.root}>
            <div className={classes.content1}>
                <h1>{movie?.name}</h1>
                    <img className={classes.img} src={movie?.imageUrl} alt={movie?.name}></img>
            </div>
            <div className={classes.content2}>
                <div className={classes.pricebox}>
                    <h1>{movie?.price}kr</h1>
                </div>
                <div>
                    <AddProductToCart product={movie} />
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
                </div>
            </div>
        </div>
    );

}