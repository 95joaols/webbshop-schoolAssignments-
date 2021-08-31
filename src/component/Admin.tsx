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

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       width: '100%',
//       maxWidth: 360,
//       backgroundColor: theme.palette.background.paper,
//     },
//   }),
// );

interface props {
  product: Product[];
}

// function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
//   return <ListItem button component="a" {...props} />;
// }

// export default function SimpleList() {

// export const Menu: React.FC = () => {
// export const AdminComponent = () => {

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
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

  const handleOpen = () => {
    setOpen(true);
    setSelectedProduct(product[0]);       // TODO
  };

  const handleClose = () => {
    setOpen(false);
  };

 const body = (
  <div style={modalStyle} className={classes.paper}>
    <h2 id="simple-modal-title">Text in a modal</h2>
    <p id="simple-modal-description">
    { selectedProduct.Name }
    </p>
  </div>
  );

  return (
    <div className={classes.root}>
    <List component="nav" aria-label="main mailbox folders">
    { product.map((p) => (
      <ListItem button onClick={handleOpen}>
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




    // <div className={classes.root}>
    //   <List component="nav" aria-label="main mailbox folders">
    //     <ListItem button>
    //       <ListItemText primary={product.Name} />
    //       <ListItemText primary={product.description} />
    //     </ListItem>
    //     <ListItem button>
    //       <ListItemText primary="Drafts" />
    //     </ListItem>
    //   </List>
    //   <Divider />
    //   <List component="nav" aria-label="secondary mailbox folders">
    //     <ListItem button>
    //       <ListItemText primary="Trash" />
    //     </ListItem>
    //     <ListItemLink href="#simple-list">
    //       <ListItemText primary="Spam" />
    //     </ListItemLink>
    //   </List>
    // </div>
  );
};





// export const AdminComponent = () => {
//   return (
//     <p>LISTA MED PRODUKTER</p>
//   );
// };
