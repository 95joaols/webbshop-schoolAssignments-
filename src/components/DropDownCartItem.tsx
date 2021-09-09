import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";

interface Props {
  imageUrl: string;
  quantity: number;
  title: string;
}

const DropDownCartItem: React.FC<Props> = ({ imageUrl, quantity, title }) => {
  const useStyles = makeStyles((theme) => ({
    image: {
      width: "15%",
    },
    quantity: {
      textAlign: "right",
    },
    title: {
      padding: "8px",
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <MenuItem>
        <img className={classes.image} src={imageUrl} alt="" />
        <ListItemText className={classes.title} primary={title} />
        <ListItemText
          className={`${classes.quantity} ${classes.title}`}
          primary={quantity}
        />
      </MenuItem>
    </div>
  );
};

export default DropDownCartItem;
