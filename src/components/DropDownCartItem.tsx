import React, { useContext } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import { ProductContext } from '../contexts/ProductContext';

interface Props {
    imageUrl: string,
    quantity: number,
    title: string
}

const DropDownCartItem: React.FC<Props> = ({ imageUrl, quantity, title }) => {


  const useStyles = makeStyles((theme) => ({
    image: {
      width: "15%"
    },
    quantity: {
        textAlign: "right"
    }
  }));

  const classes = useStyles();



  return (
    <div>
        <MenuItem>
          <img className={classes.image} src={imageUrl} alt="" />
          <ListItemText primary={title} />
          <ListItemText className={classes.quantity} primary={quantity}/>
        </MenuItem>
    </div>
  );
}

export default DropDownCartItem;