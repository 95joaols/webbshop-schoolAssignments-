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
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Open Menu
      </Button>
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
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </MenuItem>
      </Menu>
    </div>
  );
}

export default DropDownCart;