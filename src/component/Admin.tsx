import React from "react";
import { Product } from "../entity/Product";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Modal from '@material-ui/core/Modal';
import { FormHelperText, FormControl, Input, InputLabel, Button } from '@material-ui/core';

interface props {
  product: Product[];
}

function getModalStyle() {
  return {
    top: 50,
    left: 50,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: '#d71f5f',
    },
    modal: {
      position: 'absolute',
      width: 400,
      backgroundColor: '#bf95d4',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

export const AdminComponent: React.FC<props> = ({product}) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState<Product>(product[0]);    // TODO

  const handleOpen = (product: Product) => {
    setOpen(true);
    setSelectedProduct(product);
    console.log(product.Id);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit! ', event);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('target: ', event.target);
    console.log('input: ', event);
    console.log('value: ', event.target.value);
    setSelectedProduct({
      ...selectedProduct,
      Name: event.target.value 
    })
    console.log('after: ', selectedProduct);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
  <div style={modalStyle} className={classes.modal}>
    <h2 id="simple-modal-title">Text in a modal!</h2>
    <p id="simple-modal-description">

    <form onSubmit={handleSubmit}>
      <input type="text" value={selectedProduct.Name} onChange={handleChange} />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>

    { selectedProduct.Id }
    { selectedProduct.Name }
    { selectedProduct.price }
    { selectedProduct.description }
    </p>
  </div>
  );

  return (
    <div className={classes.root}>
    <List component="nav" aria-label="main mailbox folders">
    { product.map((p) => (
      <ListItem button onClick={() => handleOpen(p)}>
        <ListItemText primary={p.Id} />
        <ListItemText primary={p.Name} />
        <ListItemText primary={p.description} />
        <ListItemText primary={p.price} />
      </ListItem>
    ))}
    </List>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};
