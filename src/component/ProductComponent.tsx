import { Product } from "../entity/Product";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    display: "flex",
  },
  media: {
    height: 140,
    width: 140,
  },
  Content: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
    
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
});

interface props {
  product: Product;
}

export const ProductComponent: React.FC<props> = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.imageUrl}
        title={product.Name}
      />
      <div className={classes.details}>
        <CardContent className={classes.Content}>
          <Typography gutterBottom variant="h5" component="h2">
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
        </CardContent>
        <CardActions>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            margin="dense"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            defaultValue={1}
          />
          <Button size="small" color="primary">
            Add
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};
