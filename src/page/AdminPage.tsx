import { useState, useContext } from 'react';
import { Product } from '../entity/Product';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Button, TextField } from '@material-ui/core';
import { ProductContext } from '../contexts/ProductContext';
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

const AdminPage: React.FC = () => {
  const classes = useStyles();

  const defaultProduct: Product = {
    id: -1,
    name: '',
    year: -1,
    genre: '',
    rating: -1,
    price: -1,
    description: '',
    imageUrl: ''
  }

  type validationObject = {
    name: string,
    message: string
  }

  const [ open, setOpen ] = useState(false);
  const [ selectedProduct, setSelectedProduct ] = useState<Product>(defaultProduct);
  const { products, deleteProduct, AddOrUpdateProduct } = useContext(ProductContext);
  const [ validationErrors, setValidationErrors ] = useState<validationObject[]>([]);

  const handleOpen = (product: Product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleOnClose = () => {
    setOpen(false);
    setValidationErrors([]);
  }

  const handleDelete = (id: number) => {
    deleteProduct(id);
  };

  const handleAddNew = () => {
    setSelectedProduct(defaultProduct);
    setOpen(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let isValid:boolean = true;

    for (const [key, value] of Object.entries(selectedProduct)) {
      if(!validationLogic(key, String(value))) {
        isValid = false;
      }
    }

    if(isValid)
      AddOrUpdateProduct(selectedProduct);
  };

  const setError = (name: string, message: string) => {
    const newArray: validationObject[] = validationErrors.filter(
      (element) => element.name !== name);
    setValidationErrors([...newArray, { name: name, message: message }]);
  }

  const validationLogic = (name: string, value: string): boolean => {
    let isValid: boolean = true;
    const urlRegex = new RegExp('^https?://');
    const year:number = new Date().getFullYear();

    if ((name === 'year' || name === 'rating' || name === 'price') && isNaN(+value)) {
      setError(name, 'Value must be a number');
      isValid = false;
    }

    else if (name === 'imageUrl' && !urlRegex.test(value)) {
      setError(name, 'Not a valid URL');
      isValid = false;
    }

    else if (name === 'year' && (+value < 0 || +value > year)) {
      setError(name, 'Year outside boundaries (0 to ' + year + ')');
      isValid = false;
    }

    else if (name === 'rating' && (+value < 0 || +value > 10)) {
      setError(name, 'Rating outside boundaries (0 to 10)');
      isValid = false;
    }

    else if (name === 'price' && (+value < 1 || +value > 5000)) {
      setError(name, 'Price outside boundaries (1 to 5000)');
      isValid = false;
    }

    else if (value.length <= 0) {
      setError(name, 'Field required');
      isValid = false;
    }

    else if (validationErrors.length > 0) {
      setValidationErrors(validationErrors.filter (
        (element) => element.name !== name));
    }

    return (isValid);
  };

  const isError = (name: string):boolean => {
    return validationErrors.find((element) => element.name === name) ? true : false;
  }

  const errorMessage = (name: string): string | undefined => {
    return validationErrors.find((element) => element.name === name)?.message;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    validationLogic(event.target.name, event.target.value);
    setSelectedProduct({
      ...selectedProduct,
      [event.target.name]: event.target.value 
    })
  };

  const modalBody = (
  <div className={classes.modal}>
    {selectedProduct.id > 0 ? <h1>Edit</h1> : <h1>Create New</h1>}
    {<form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "row"}}>
      <div style={{display: "flex", flexDirection: "column"}}>
        {selectedProduct.id > 0 && <TextField type="number" label="Id" value={selectedProduct.id} onChange={handleChange} />}
        <TextField error={isError('name')} helperText={errorMessage('name')} type="text" name="name" label="Name" value={selectedProduct.name} onChange={handleChange} />
        <TextField error={isError('year')} helperText={errorMessage('year')} type="text" name="year" label="Year" value={selectedProduct.year} onChange={handleChange} />
        <TextField error={isError('genre')} helperText={errorMessage('genre')} type="text" name="genre" label="Genre" value={selectedProduct.genre} onChange={handleChange} />
      </div>
        <div style={{display: "flex", flexDirection: "column"}}>
          <TextField error={isError('rating')} helperText={errorMessage('rating')} type="text" name="rating" label="Rating" value={selectedProduct.rating} onChange={handleChange} />
          <TextField error={isError('price')} helperText={errorMessage('price')} type="text" name="price" label="Price" value={selectedProduct.price} onChange={handleChange} />
          <TextField error={isError('description')} helperText={errorMessage('description')} type="text" name="description" label="Description" value={selectedProduct.description} onChange={handleChange} />
          <TextField error={isError('imageUrl')} helperText={errorMessage('imageUrl')} type="text" name="imageUrl" label="Image URL" value={selectedProduct.imageUrl} onChange={handleChange} />
        </div>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
    </form>}
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
      <Modal open={open} onClose={handleOnClose}>
        {modalBody}
      </Modal>
    </div>
  );
};

export default AdminPage;
