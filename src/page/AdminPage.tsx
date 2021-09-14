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
    isError: boolean,
    message: string
  }

  const [ open, setOpen ] = useState(false);
  const [ selectedProduct, setSelectedProduct ] = useState<Product>(defaultProduct);
  const { products, deleteProduct, AddOrUpdateProduct } = useContext(ProductContext);
  const [ validationErrors, setValidationError ] = useState<validationObject[]>([]);

  const handleOpen = (product: Product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleOnClose = () => {
    setOpen(false);
    setValidationError([]);
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
    console.log('selectedProduct (submit - before): ', selectedProduct);

    for (const [key, value] of Object.entries(selectedProduct)) {
      console.log('key: ', key, ' value: ', value);
      console.log('validationLogic call: ', validationLogic(key, String(value)));
      if(!validationLogic(key, String(value))) {
        isValid = false;
        console.log('FALSE! isvalid (inside if): ', isValid);
      }
    }

    console.log('isValid (before edit): ', isValid);
    if(isValid)
      AddOrUpdateProduct(selectedProduct);
  };

  const validationLogic = (name: string, value: string): boolean => {
    let isValid: boolean = true;
    console.log('validationLogic name: ', name, ' value: ', value);

    if ((name === 'year' || name === 'rating' || name === 'price') && isNaN(+value)) {
      console.log('not a number');
      const newArray: validationObject[] = validationErrors.filter(
        (element) => element.name !== name);
      setValidationError([...newArray, { name: name, isError: true, message: 'Value must be a number' }]);
      isValid = false;
    }

    else if (name === 'year' && (+value < 0 || +value > 2000)) {
      console.log('year');
      const newArray: validationObject[] = validationErrors.filter(
        (element) => element.name !== name);
      setValidationError([...newArray, { name: name, isError: true, message: 'Year outside boundaries (0 to 2000)' }]);
      isValid = false;
    }

    else if (name === 'rating' && (+value < 0 || +value > 10)) {
      console.log('rating');
      const newArray: validationObject[] = validationErrors.filter(
        (element) => element.name !== name);
      setValidationError([...newArray, { name: name, isError: true, message: 'Rating outside boundaries (0 and 10)' }]);
      isValid = false;
    }

    else if (name === 'price' && (+value < 1 || +value > 5000)) {
      console.log('price');
      const newArray: validationObject[] = validationErrors.filter(
        (element) => element.name !== name);
      setValidationError([...newArray, { name: name, isError: true, message: 'Price outside boundaries (1 and 5000)' }]);
      isValid = false;
    }

    else if (value.length <= 0) {
      console.log('required');

      const newArray: validationObject[] = validationErrors.filter(
        (element) => element.name !== name);
      setValidationError([...newArray, { name: name, isError: true, message: 'Field required' }]);
      isValid = false;
    }

    else {
      console.log('remove:', validationErrors.filter ((element) => element.name !== name));

      setValidationError(validationErrors.filter (
        (element) => element.name !== name));
    }

    return (isValid);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('target name: ', event.target.name, ' length: ', event.target.value.length, ' value: ', event.target.value);        // Debug.
    console.log('validationErrors (handleChange): ', validationErrors);

    const isValid:boolean = validationLogic(event.target.name, event.target.value);
    console.log('isValid: ', isValid);

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
        <TextField error={validationErrors.find((element) => element.name === 'name')?.isError} helperText={validationErrors.find((element) => element.name === 'name')?.message} type="text" name="name" label="Name" value={selectedProduct.name} onChange={handleChange} />
        <TextField error={validationErrors.find((element) => element.name === 'year')?.isError} helperText={validationErrors.find((element) => element.name === 'year')?.message} type="number" name="year" label="Year" value={selectedProduct.year} onChange={handleChange} />
        <TextField error={validationErrors.find((element) => element.name === 'genre')?.isError} helperText={validationErrors.find((element) => element.name === 'genre')?.message} type="text" name="genre" label="Genre" value={selectedProduct.genre} onChange={handleChange} />
      </div>
        <div style={{display: "flex", flexDirection: "column"}}>
          <TextField error={validationErrors.find((element) => element.name === 'rating')?.isError} helperText={validationErrors.find((element) => element.name === 'rating')?.message} type="text" name="rating" label="Rating" value={selectedProduct.rating} onChange={handleChange} />
          <TextField error={validationErrors.find((element) => element.name === 'price')?.isError} helperText={validationErrors.find((element) => element.name === 'price')?.message} type="text" name="price" label="Price" value={selectedProduct.price} onChange={handleChange} />
          <TextField error={validationErrors.find((element) => element.name === 'description')?.isError} helperText={validationErrors.find((element) => element.name === 'description')?.message} type="text" name="description" label="Description" value={selectedProduct.description} onChange={handleChange} />
          <TextField error={validationErrors.find((element) => element.name === 'imageUrl')?.isError} helperText={validationErrors.find((element) => element.name === 'imageUrl')?.message} type="text" name="imageUrl" label="Image URL" value={selectedProduct.imageUrl} onChange={handleChange} />
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
