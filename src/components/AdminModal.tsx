import { useState, useContext, Dispatch, SetStateAction } from 'react';
import { Product } from '../entity/Product';
import Modal from '@material-ui/core/Modal';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { FormHelperText, FormControl, Input, InputLabel, List, ListItem, ListItemText, Button } from '@material-ui/core';
import { ProductContext } from '../contexts/ProductContext';
//import { useForm } from '../hooks/useForm';
import { useForm, SubmitHandler } from 'react-hook-form';

interface props {
  isOpen: boolean;
  setOpenHook: any;
  productForModal: Product;
  productToParent: Dispatch<SetStateAction<Product>>;
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

export const AdminModal: React.FC<props> = ({isOpen, setOpenHook, productForModal, productToParent}) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const { products, updateProduct } = useContext(ProductContext);
  const [ pro, setpro ] = useState<Product>(productForModal);

  const produktToEdit:Product = {
    id: 55,
    description: "gfh",
    genre: "blj",
    imageUrl: "hgfhbn fcg",
    name:"cjvbj",
    price: 567,
    rating: 5,
    year:456
  };
  console.log('produktToEdit:',produktToEdit,"productForModal:",productForModal);
  const { register, handleSubmit, watch, formState: { errors }, getValues } = useForm<Product>({defaultValues:productForModal});
  const onSubmit: SubmitHandler<Product> = data => console.log("SubmitHandler: ", data);

  console.log('startval',productForModal);
  // setpro(productForModal);

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log('Submit',values);
  // };

  const modalBodyEditProduct = (
  <div style={modalStyle} className={classes.modal}>
    {
      <form onSubmit={handleSubmit(onSubmit)}>
      <input type="number" defaultValue={produktToEdit.id} disabled />
      <input type="text"  {...register("name")} />
      <input type="number" {...register("year")} />
      <input type="text"  {...register("genre")} />
      <input type="number"  {...register("rating")} />
      <input type="number" {...register("price")} />
      <input type="text" {...register("description")} />
      <input type="url" {...register("imageUrl")} />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>}
  </div>
  );

  const modalBodyNewProduct = (
  <div style={modalStyle} className={classes.modal}>
    <p>hej</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name")} />
      <input type="number" {...register("year")} />
      <input type="text" {...register("genre")} />
      <input type="number" {...register("rating")} />
      <input type="number" {...register("price")} />
      <input type="text" {...register("description")} />
      <input type="url" {...register("imageUrl")} />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  </div>
  );

  return(
    <Modal open={isOpen} onClose={() => setOpenHook(false)}>
      {productForModal.id >= 0 ? modalBodyEditProduct : modalBodyNewProduct}
    </Modal>
  );
};