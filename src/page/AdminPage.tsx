import { useState, useContext } from 'react';
import { Product } from '../entity/Product';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Button, TextField, Typography, Container } from '@material-ui/core';
import { ProductContext } from '../contexts/ProductContext';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      padding: "16px",
      color: "black",
      backgroundColor: "#ffffff",
      marginTop: 170,
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
      width: "40%",
    },
    year: {
      textAlign: "center",
      width: "15%",
    },
    genre: {
      textAlign: "center",
      width: "30%",
    },
    price: {
      paddingRight: "16px",
      textAlign: "right",
      width: "15%",
    },
    listitem: {
      backgroundColor: "#3f51b5",
      marginTop: "1rem",
      borderRadius: "1rem",
    },
    button: {
      width: "fit-content",
      "& :hover": {
        fontWeight: 600,
      },
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
      width: "50%",
    },
    modalWidth: {
      width: "80%",
      padding: "16px",
    },
    max780Top: {
      "@media (max-width:780px)": {
        marginTop: 0,
        width: "100%",
      },
    },
    max780Bott: {
      "@media (max-width:780px)": {
        marginBottom: 0,
        width: "100%",
      },
    },
    max780Col: {
      "@media (max-width:780px)": {
        flexDirection: "column",
        alignItems: "center",
      },
    },
  })
);

const AdminPage: React.FC = () => {
  const classes = useStyles();

  // The default (empty) prodcut, used when creating new and setting the initial state.
  const defaultProduct: Product = {
    id: -1,
    name: '',
    year: -1,
    genre: '',
    rating: -1,
    price: -1,
    description: '',
    imageUrl: ''
  };

  // Object used for validation, saves the name of the input field and an error message.
  type validationObject = {
    name: string,
    message: string
  };

  // State used for opening the modal.
  const [ open, setOpen ] = useState(false);
  // Product that's selected from the list, used in the modal.
  const [ selectedProduct, setSelectedProduct ] = useState<Product>(defaultProduct);
  const { products, deleteProduct, AddOrUpdateProduct } = useContext(ProductContext);
  // List with all validation errors in the form.
  const [ validationErrors, setValidationErrors ] = useState<validationObject[]>([]);

  // When the modal is opened.
  const handleOpen = (product: Product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  // When the modal is closed. Clears the list with validationErrors the old ones wont be there when the next one opens.
  const handleOnClose = () => {
    setOpen(false);
    setValidationErrors([]);
  };

  // When pressing the delete button in the list.
  const handleDelete = (id: number) => {
    deleteProduct(id);
  };

  // When pressing the "Add new" button.
  const handleAddNew = () => {
    setSelectedProduct(defaultProduct);
    setOpen(true);
  };

  // When pressing submit. It first does validation. if the form is valid add or update the product then close the form.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let isValid:boolean = true;

    for (const [key, value] of Object.entries(selectedProduct)) {
      if(!validationLogic(key, String(value))) {
        isValid = false;
      }
    }

    if(isValid) {
      AddOrUpdateProduct(selectedProduct);
      handleOnClose();
    }
  };

  // Used inside validationLogic() to create a new validationObject and add it to the array of errors.
  const setError = (name: string, message: string) => {
    const newArray: validationObject[] = validationErrors.filter(
      (element) => element.name !== name);
    setValidationErrors([...newArray, { name: name, message: message }]);
  };

  // All the validation logic.
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

  // Function used in the TextFields of the modal/form to mark it red if validation fails.
  const isError = (name: string):boolean => {
    return validationErrors.find((element) => element.name === name) ? true : false;
  };

  // Function used in the TextFields of the modal/form to print an error message.
  const errorMessage = (name: string): string | undefined => {
    return validationErrors.find((element) => element.name === name)?.message;
  };

  // Function used to handle changes of an input field. First validates and then updates the of the field.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    validationLogic(event.target.name, event.target.value);
    setSelectedProduct({
      ...selectedProduct,
      [event.target.name]: event.target.value 
    })
  };

  // Body used in the modal.
  const modalBody = (
  <div className={`${classes.product} ${classes.modalWidth}`}>
    {selectedProduct.id > 0 ? <h1>Edit</h1> : <h1>Create New</h1>}
    {<form onSubmit={handleSubmit} className={`${classes.row} ${classes.max780Col}`}>
      <div className={`${classes.modalCol} ${classes.max780Bott}`}>
        {selectedProduct.id > 0 && <TextField type="number" label="Id" value={selectedProduct.id} onChange={handleChange} />}
        <TextField error={isError('name')} helperText={errorMessage('name')} type="text" name="name" label="Name" value={selectedProduct.name} onChange={handleChange} />
        <TextField error={isError('year')} helperText={errorMessage('year')} type="text" name="year" label="Year" value={selectedProduct.year} onChange={handleChange} />
        <TextField error={isError('genre')} helperText={errorMessage('genre')} type="text" name="genre" label="Genre" value={selectedProduct.genre} onChange={handleChange} />
      </div>
        <div className={`${classes.modalCol} ${classes.max780Top}`}>
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

  // The list that's seen when entering the admin page.
  return (
    <div className={classes.root}>
      <Button onClick={handleAddNew} color="primary" variant="contained">
        Add new
      </Button>
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
        {products.sort((a, b) => a.id - b.id).map((p) => (
          <div key={p.id} className={classes.listitem}>
            <ListItem className={classes.product} button onClick={() => handleOpen(p)}>
              <div className={classes.row}>
                <ListItemText className={classes.title} primary={p.name} />
                <ListItemText className={classes.year} primary={p.year} />
                <ListItemText className={classes.genre} primary={p.genre} />
                <ListItemText className={classes.price} primary={p.price} />
              </div>
              <Button className={classes.button} variant="outlined" onClick={(e) => { handleDelete(p.id); e.stopPropagation(); }}>
                Delete
              </Button>
            </ListItem>
          </div>
        ))}
        </List>
      </Container>
      <Modal open={open} onClose={handleOnClose} className={classes.fit}>
        {modalBody}
      </Modal>
    </div>
  );
};

export default AdminPage;
