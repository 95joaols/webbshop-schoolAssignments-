import React from 'react';
import { Product } from '../entity/Product';
import Modal from '@material-ui/core/Modal';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { FormHelperText, FormControl, Input, InputLabel, List, ListItem, ListItemText, Button } from '@material-ui/core';
import { Context } from './AdminContext';


interface props {
  isOpen: boolean;
  setOpenHook: any;
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

export const AdminModal: React.FC<props> = ({isOpen, setOpenHook}) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [context, setContext] = React.useContext(Context);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContext(context);
    console.log('Submit selectedProduct: ', context);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContext({
      ...context,
      [event.target.name]: event.target.value 
    })
    console.log('handleChange: ', context);
  };

  const modalBodyEditProduct = (
  <div style={modalStyle} className={classes.modal}>
    <form onSubmit={handleSubmit}>
      <input type="number" name="Id" value={context.Id} disabled />
      <input type="text" name="Name" value={context.Name} onChange={handleChange} />
      <input type="number" name="price" value={context.price} onChange={handleChange} />
      <input type="text" name="description" value={context.description} onChange={handleChange} />
      <input type="url" name="imageUrl" value={context.imageUrl} onChange={handleChange} />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  </div>
  );

  const modalBodyNewProduct = (
  <div style={modalStyle} className={classes.modal}>
    <form onSubmit={handleSubmit}>
      <input type="text" name="Name" onChange={handleChange} />
      <input type="number" name="price" onChange={handleChange} />
      <input type="text" name="description" onChange={handleChange} />
      <input type="url" name="imageUrl"  onChange={handleChange} />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  </div>
  );

  return(
    <Modal open={isOpen} onClose={() => setOpenHook(false)}>
      {context.Id >= 0 ? modalBodyEditProduct : modalBodyNewProduct}
    </Modal>
  );
};
