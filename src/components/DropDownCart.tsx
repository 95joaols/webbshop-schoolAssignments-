import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import DropDownCartItem from './DropDownCartItem';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge, IconButton } from '@material-ui/core';

const DropDownCart: React.FC = () => {
  const { shoppingCartItems } = useContext(ShoppingCartContext);
  const [anchorElement, setAnchorElement] =
  React.useState<null | HTMLElement>(null);

function handleClick(event: React.MouseEvent<HTMLElement>) {
  setAnchorElement(event.currentTarget);
}

function handleClose() {
  setAnchorElement(null);
}

function badgeCounter() {
  return shoppingCartItems.reduce((pv, cv) => { return pv + cv.quantity; }, 0);
}

  const useStyles = makeStyles((theme) => ({
    buttonCell: {
      display: "flex",
      justifyContent: "center",
    },
    dropDownQuantity: {
      textAlign: "right",
    },
    button: {
      margin: "1rem",
      display: "inherit",
      justifyContent: "inherit",
      width: "30%",
    },
    link: {
      textDecoration: "none",
      color: "black",
    },
    root: {
        '&:focus': {
          backgroundColor: theme.palette.primary.main,
          '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            color: theme.palette.common.white,
          },
        },
      },
    icon: {
      color: "white"
    },
    head: {
      padding: "8px"
    },
    badgeAnimation: {
      animation: `$badgeLoad 1s ${theme.transitions.easing.easeInOut} 1`,
    },
    "@keyframes badgeLoad": {
      "0%": {
        width: 2000,
      },
      "100%": {
        width: 24
      }
    }
  }));

  const classes = useStyles();



  return (
    <div>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Badge className={classes.badgeAnimation} badgeContent={badgeCounter()} color="secondary">
          <ShoppingCartIcon className={classes.icon} />
        </Badge>
      </IconButton>
      <Menu
        id="customized-menu"
        anchorEl={anchorElement}
        keepMounted
        open={Boolean(anchorElement)}
        onClose={handleClose}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>
          <ListItemText className={classes.head} primary="Produkt" />
          <ListItemText
            className={`${classes.dropDownQuantity} ${classes.head}`}
            primary="Antal"
          />
        </MenuItem>
        {shoppingCartItems.map(({ product, quantity }) => {
          return (
            <DropDownCartItem
              id={product.id}
              imageUrl={product.imageUrl}
              quantity={quantity}
              title={product.name}
            />
          );
        })}
      </Menu>
    </div>
  );
}

export default DropDownCart;