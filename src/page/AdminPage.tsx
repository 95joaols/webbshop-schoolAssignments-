import { useState, useContext } from 'react';
import { Product } from '../entity/Product';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Button, TextField, Typography, Container } from '@material-ui/core';
import { ProductContext } from '../contexts/ProductContext';
import { useForm, SubmitHandler } from 'react-hook-form';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: '100%',
      padding: "16px",
      color: 'black',
      backgroundColor: '#ffffff',
      marginTop: 170
    },
    product: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "white",
      border: "1px solid",
      borderRadius: "16px",
    },
    row: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
    },
    title: {
      paddingLeft: "16px",
      width: "40%"
    },
    year: {
      textAlign: "center",
      width: "15%"
    },
    genre: {
      textAlign: "center",
      width: "30%"
    },
    price: {
      paddingRight: "16px",
      textAlign: "right",
      width: "15%"
    },
    button: {
      width: "fit-content",
      "& :hover": {
        fontWeight: 600
      }
    },
    fit: {
      display: "flex",
      justifyContent: "center",
      marginTop: "16px",
      height: "fit-content",
    },
    modalCol: {
      display: "flex",
      flexDirection: "column",
      margin: "32px",
      width: "50%"
    },
    modalWidth: {
      width: "80%",
      padding: "16px"
    },
    max780Top: {
      "@media (max-width:780px)": {
        marginTop: 0,
        width: "100%"
      }
    },
    max780Bott: {
      "@media (max-width:780px)": {
        marginBottom: 0,
        width: "100%"
      }
    },
    max780Col: {
      "@media (max-width:780px)": {
        flexDirection: "column",
        alignItems: "center",
      }
    }
  }),
);

 const AdminPage: React.FC = () => {
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
    console.log(data);
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
  <div className={`${classes.product} ${classes.modalWidth}`}>
    <h1>Edit</h1>
      { <form className={`${classes.row} ${classes.max780Col}`} onSubmit={handleSubmit(onSubmit)}>
          <div className={`${classes.modalCol} ${classes.max780Bott}`}>
            <fieldset disabled>
              <TextField type="number" label="Id" defaultValue={selectedProduct.id} {...register("id")} />
            </fieldset>
            <TextField type="text" label="Name" defaultValue={selectedProduct.name} {...register("name")} />
            <TextField type="number" label="Year" defaultValue={selectedProduct.year} {...register("year")}/>
            <TextField type="text" label="Genre" defaultValue={selectedProduct.genre} {...register("genre")} />
          </div>
          <div className={`${classes.modalCol} ${classes.max780Top}`}>
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
    <div className={`${classes.product} ${classes.modalWidth}`}>
    <h1>Create new</h1>
      { <form className={`${classes.row} ${classes.max780Col}`} onSubmit={handleSubmit(onSubmit)}>
      <div className={`${classes.modalCol} ${classes.max780Bott}`}>
          <TextField type="text" label="Name" {...register("name")} />
          <TextField type="number" label="Year" {...register("year")}/>
          <TextField type="text" label="Genre" {...register("genre")} />
        </div>
        <div className={`${classes.modalCol} ${classes.max780Top}`}>
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
      <Button onClick={handleAddNew} color="primary" variant="contained">Add new</Button>
      <Container maxWidth="md">
        <List component="nav">
        <div className={classes.row}>
        <Typography className={classes.title} variant="h6">
          Titel
        </Typography>
        <Typography className={classes.year} variant="h6">
          År
        </Typography>
        <Typography className={classes.genre} variant="h6">
          Genre
        </Typography>
        <Typography className={classes.price} variant="h6">
          Pris
        </Typography>
        </div>
      { products.sort((a, b) => a.id - b.id).map((p) => (
        <div key={p.id} style={{backgroundColor: "#3f51b5", marginTop: "1rem", borderRadius: "1rem"}}>
          <ListItem  className={classes.product} button onClick={() => handleOpen(p)}>
            <div className={classes.row}>
              <ListItemText className={classes.title} primary={p.name} />
            <ListItemText className={classes.year} primary={p.year} />
            <ListItemText className={classes.genre} primary={p.genre} />
            <ListItemText className={classes.price} primary={p.price} />
            </div>
            
            <Button className={classes.button} onClick={() => handleDelete(p.id)} variant="outlined">Delete</Button>
          </ListItem>
        </div>
      ))}
      </List>
      </Container>
        <Modal className={classes.fit} open={open} onClose={() => {setOpen(false)}}>
        {selectedProduct.id > 0 ? modalBodyEditProduct : modalBodyNewProduct}
      </Modal>
      
    </div>
  );
};
export default AdminPage;
