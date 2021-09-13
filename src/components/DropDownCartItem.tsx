import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  imageUrl: string;
  quantity: number;
  title: string;
}

const DropDownCartItem: React.FC<Props> = ({
  id,
  imageUrl,
  quantity,
  title,
}) => {
  const useStyles = makeStyles((theme) => ({
    image: {
      width: "8%",
    },
    quantity: {
      textAlign: "right",
    },
    title: {
      padding: "8px",
    },
    link: {
      textDecoration: "none",
      color: "black",
      display: "flex",
    },
  }));

  const classes = useStyles();
  const url = `/product/${id}`;

  return (
    <div>
      <MenuItem>
          <img className={classes.image} src={imageUrl} alt="" />
        <Link to={url} className={classes.link}>
          <Box overflow="hidden">
            <ListItemText className={classes.title} primary={title} />
          </Box>
        </Link>
        <ListItemText
          className={`${classes.quantity} ${classes.title}`}
          primary={quantity}
        />
      </MenuItem>
    </div>
  );
};

export default DropDownCartItem;
