import { useState, useContext } from 'react';
import { Product } from "../entity/Product";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { FormHelperText, FormControl, Input, InputLabel, List, ListItem, ListItemText, Button } from '@material-ui/core';
import { AdminModal } from './AdminModal';
import { ProductContext } from '../contexts/ProductContext';

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

export const AdminComponent: React.FC = () => {
  const classes = useStyles();
  const [ open, setOpen ] = useState(false);
  const [ selectedProduct, setSelectedProduct ] = useState<Product>({
    id: -551,
    name: '',
    year: -1,
    genre: '',
    rating: -1,
    price: -1,
    description: '',
    imageUrl: ''
  });
  const { products, updateProduct, deleteProduct, addProduct } = useContext(ProductContext);

  const handleOpen = (product: Product) => {
    setSelectedProduct(product);
    setOpen(true);
    console.log('handleOpen');
  };

  const handleDelete = (id: number) => {
    console.log('handleDelete: ', id);
    deleteProduct(id);
  };

  const handleAddNew = () => {
    console.log('handleAddNew');
    // console.log(products);                  // Debug.
    // addProduct({
    //   id: -1,
    //   name: '',
    //   year: -1,
    //   genre: '',
    //   rating: -1,
    //   price: -1,
    //   description: '',
    //   imageUrl: ''
    // });
    setOpen(true);
    // updateProduct({
    //   id: 3,
    //   name: '',
    //   year: -1,
    //   genre: '',
    //   rating: -1,
    //   price: -1,
    //   description: '',
    //   imageUrl: ''
    // });
  };

  return (
    <div className={classes.root}>
      <List component="nav">
      { products.map((p) => (
        <div key={p.id}>
          <ListItem button onClick={() => handleOpen(p)}>
            <ListItemText primary={p.id} />
            <ListItemText primary={p.name} />
            <ListItemText primary={p.year} />
            <ListItemText primary={p.genre} />
            <ListItemText primary={p.description} />
            <ListItemText primary={p.price} />
          </ListItem>
            <Button onClick={() => handleDelete(p.id)}>Delete</Button>
        </div>
      ))}
        <Button onClick={handleAddNew}>Add new</Button>
      </List>
        <AdminModal isOpen={open} setOpenHook={setOpen} productForModal={selectedProduct} productToParent={setSelectedProduct} />
    </div>
  );
};
