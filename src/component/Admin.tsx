import React from 'react';
import { Product } from "../entity/Product";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { FormHelperText, FormControl, Input, InputLabel, List, ListItem, ListItemText, Button } from '@material-ui/core';
import { AdminModal } from './AdminModal';
import { Context } from './AdminContext';

interface props {
  product: Product[];
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
  const [open, setOpen] = React.useState(false);
  const [context, setContext] = React.useContext(Context);

  const handleOpen = (product: Product) => {
    setOpen(true);
    setContext(product);
    console.log('handleOpen');
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id: number) => {
    console.log('handleDelete: ', id);
  };

  const handleAddNew = () => {
    console.log('handleAddNew');
  };

  return (
    <div className={classes.root}>
      <List component="nav">
      { product.map((p) => (
        <div>
          <ListItem button onClick={() => handleOpen(p)}>
            <ListItemText primary={p.Id} />
            <ListItemText primary={p.Name} />
            <ListItemText primary={p.description} />
            <ListItemText primary={p.price} />
          </ListItem>
            <Button onClick={() => handleDelete(p.Id)}>Delete</Button>
        </div>
      ))}
        <Button onClick={handleAddNew}>Add new</Button>
      </List>
      <Context.Provider value={[context, setContext]}>
        <AdminModal isOpen={open} />
      </Context.Provider>
    </div>
  );
};
