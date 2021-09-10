import { useState, useContext } from 'react';
import { Product } from '../entity/Product';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Button, TextField } from '@material-ui/core';
import { ProductContext } from '../contexts/ProductContext';
import { useForm, SubmitHandler } from 'react-hook-form';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      color: 'white',
      backgroundColor: '#ffffff',
    },
    modal: {
      display: 'flex',
      flexDirection: 'column',
      top: '1%',
      left: '50%',
      marginTop: '-100',
      marginLeft: '-150',
      position: 'absolute',
      backgroundColor: '#ffffff',
      borderRadius: '2rem',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

export const AdminPage: React.FC = () => {
  const classes = useStyles();
  const [ open, setOpen ] = useState(false);
  const [ selectedProduct, setSelectedProduct ] = useState<Product>({
    id: -1,
    name: '',
    year: -1,
    genre: '',
    rating: -1,
    price: -1,
    description: '',
    imageUrl: ''
  });
  const { products, deleteProduct, AddOrUpdateProduct} = useContext(ProductContext);
  const { register, handleSubmit, unregister } = useForm<Product>();

  const onSubmit: SubmitHandler<Product> = (data) => {
    AddOrUpdateProduct(data);
  };

  const handleOpen = (product: Product) => {
    unregister(['id', 'name', 'year', 'genre', 'rating', 'price', 'description', 'imageUrl']);
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleDelete = (id: number) => {
    deleteProduct(id);
  };

  const handleAddNew = () => {
    unregister(['id', 'name', 'year', 'genre', 'rating', 'price', 'description', 'imageUrl']);
    setSelectedProduct({
      id: -1,
      name: '',
      year: -1,
      genre: '',
      rating: -1,
      price: -1,
      description: '',
      imageUrl: ''
    });
    setOpen(true);
  };

  const modalBodyEditProduct = (
  <div className={classes.modal}>
    <h1>Edit</h1>
      { <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexDirection: "row"}}>
          <div style={{display: "flex", flexDirection: "column"}}>
          <fieldset disabled>
            <TextField type="number" label="Id" defaultValue={selectedProduct.id} {...register("id")} />
          </fieldset>
            <TextField type="text" label="Name" defaultValue={selectedProduct.name} {...register("name")} />
            <TextField type="number" label="Year" defaultValue={selectedProduct.year} {...register("year")}/>
            <TextField type="text" label="Genre" defaultValue={selectedProduct.genre} {...register("genre")} />
          </div>
          <div style={{display: "flex", flexDirection: "column"}}>
            <TextField type="number" label="Rating" defaultValue={selectedProduct.rating} {...register("rating")} />
            <TextField type="number" label="Price" defaultValue={selectedProduct.price} {...register("price")} />
            <TextField type="text" label="Description" defaultValue={selectedProduct.description} {...register("description")} />
            <TextField type="url" label="Image URL" defaultValue={selectedProduct.imageUrl} {...register("imageUrl")} />
          </div>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
      </form> }
  </div>
  );

  const modalBodyNewProduct = (
  <div className={classes.modal}>
    <h1>Create new</h1>
      { <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexDirection: "row"}}>
          <div style={{display: "flex", flexDirection: "column"}}>
            <TextField type="text" label="Name" {...register("name")} />
            <TextField type="number" label="Year" {...register("year")}/>
            <TextField type="text" label="Genre" {...register("genre")} />
          </div>
          <div style={{display: "flex", flexDirection: "column"}}>
            <TextField type="number" label="Rating" {...register("rating")} />
            <TextField type="number" label="Price" {...register("price")} />
            <TextField type="text" label="Description" {...register("description")} />
            <TextField type="url" label="Image URL" {...register("imageUrl")} />
          </div>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
      </form> }
  </div>
  );

  return (
    <div className={classes.root}>
      <List component="nav">
      { products.sort((a, b) => a.id - b.id).map((p) => (
        <div key={p.id} style={{backgroundColor: "#3f51b5", marginTop: "1rem", borderRadius: "1rem"}}>
          <ListItem button onClick={() => handleOpen(p)}>
            <ListItemText primary={p.name} />
            <ListItemText primary={p.year} />
            <ListItemText primary={p.genre} />
            <ListItemText primary={p.price} />
          </ListItem>
            <Button onClick={() => handleDelete(p.id)}>Delete</Button>
        </div>
      ))}
        <Button onClick={handleAddNew}>Add new</Button>
      </List>
      <Modal open={open} onClose={() => {setOpen(false)}}>
        {selectedProduct.id > 0 ? modalBodyEditProduct : modalBodyNewProduct}
      </Modal>
    </div>
  );
};
