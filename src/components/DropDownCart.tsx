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
import DropDownCartItem from './DropDownCartItem';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge, IconButton } from '@material-ui/core';

// const StyledMenu = withStyles({
//   paper: {
//     border: '1px solid #d3d4d5',
//   },
// })((props: MenuProps) => (
//   <Menu
//     elevation={0}
//     getContentAnchorEl={null}
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'center',
//     }}
//     transformOrigin={{
//       vertical: 'top',
//       horizontal: 'center',
//     }}
//     {...props}
//   />
// ));

// const StyledMenuItem = withStyles((theme) => ({
//   root: {
//     '&:focus': {
//       backgroundColor: theme.palette.primary.main,
//       '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
//         color: theme.palette.common.white,
//       },
//     },
//   },
// }))(MenuItem);

const DropDownCart: React.FC = () => {
  const { shoppingCartItems } = useContext(ShoppingCartContext);
  const [anchorElement, setAnchorElevation] =
  React.useState<null | HTMLElement>(null);

function handleClick(event: React.MouseEvent<HTMLElement>) {
  setAnchorElevation(event.currentTarget);
}

function handleClose() {
  setAnchorElevation(null);
}

  const useStyles = makeStyles((theme) => ({
    buttonCell: {
      display: "flex",
      justifyContent: "center",
    },
    dropDownQuantity: {
      textAlign: "right"
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
  }));

  const classes = useStyles();



  return (
    <div>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Badge badgeContent={shoppingCartItems.length}>
        <ShoppingCartIcon color="secondary"/>
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
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
      >
        <MenuItem>
        <ListItemText primary="Produkt" />
        <ListItemText className={classes.dropDownQuantity} primary="Antal" />
        </MenuItem>
        {
          shoppingCartItems.map((product) => {
            return <DropDownCartItem imageUrl={product.product.imageUrl} quantity={product.quantity} title={product.product.name}/>
          })
        }
      </Menu>
    </div>
  );
}

export default DropDownCart;