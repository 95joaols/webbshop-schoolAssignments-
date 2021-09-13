import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Container } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import { makeStyles } from "@material-ui/core/styles";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { useEffect, useContext } from "react";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import { ShoppingCartItem } from "../entity/ShoppingCartItem";
import { Link } from "react-router-dom";

interface Props {
  totalPrice: number;
  onSetPrice: (price: number) => void;
}

const ShoppingCartTable: React.FC<Props> = ({ totalPrice, onSetPrice }) => {
  const { shoppingCartItems, updateShoppingCart } =
    useContext(ShoppingCartContext);
  const [noProductsError, setNoProductsMsg] = useState<string>("");

  const ifNoProductMessage = () => {
    const noProductsMessage: string = "Varukorgen är tom";
    if (totalPrice === 0) setNoProductsMsg(noProductsMessage);
    else setNoProductsMsg("");
  };

  function calculateTotal() {
    let sum: number = 0;
    shoppingCartItems.forEach(
      (product) => (sum += product.product.price * product.quantity)
    );
    onSetPrice(sum);
    ifNoProductMessage();
  }

  function deleteItem(shoppingCartItem: ShoppingCartItem) {
    const modifiedShoppingCart = shoppingCartItems.filter(
      (item) => item.product.id !== shoppingCartItem.product.id
    );
    updateShoppingCart(modifiedShoppingCart);
  }

  function adjustQuantity(shoppingCartItem: ShoppingCartItem) {
    if (shoppingCartItem.quantity <= 0) shoppingCartItem.quantity = 1;
    const indexToReplace = shoppingCartItems.findIndex(
      (item) => item.product.id === shoppingCartItem.product.id
    );
    if (indexToReplace >= 0) {
      shoppingCartItems[indexToReplace] = shoppingCartItem;
    }
    calculateTotal();
  }

  useEffect(() => {
    calculateTotal();
  });

  const useStyles = makeStyles((theme) => ({
    productTable: {
      marginTop: 24,
      marginBottom: 24,
    },
    tableHead: {
      fontWeight: 700,
    },
    center: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    deleteIcon: {
      cursor: "pointer",
    },
    errorText: {
      color: "red",
    },
    image: {
      maxHeight: "100px",
    },
    imageCell: {
      width: 50,
      padding: 8,
    },
    priceQuantityCell: {
      width: 150,
    },
    link: {
      textDecoration: "none",
      color: "black",
      display: "flex",
    },
  }));

  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.productTable}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                className={`${classes.tableHead} ${classes.imageCell}`}
              ></TableCell>
              <TableCell
                className={classes.tableHead}
                component="th"
                scope="row"
              >
                Produktnamn
              </TableCell>
              <TableCell
                className={`${classes.tableHead} ${classes.priceQuantityCell}`}
                align="right"
              >
                Pris
              </TableCell>
              <TableCell
                className={`${classes.tableHead} ${classes.priceQuantityCell}`}
                align="right"
              >
                Antal
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shoppingCartItems.map((item) => (
              <TableRow key={item.product.id}>
                <Link
                  to={`/product/${item.product.id}`}
                  className={classes.link}
                >
                  <TableCell
                    className={`${classes.imageCell} ${classes.center}`}
                    align="left"
                  >
                    <img
                      src={item.product.imageUrl}
                      className={classes.image}
                      alt={item.product.name}
                    ></img>
                  </TableCell>

                  <TableCell component="th" scope="row">
                    {item.product.name}
                  </TableCell>
                </Link>
                <TableCell className={classes.priceQuantityCell} align="right">
                  {item.product.price}
                </TableCell>
                <TableCell className={classes.priceQuantityCell} align="right">
                  <div className={classes.center}>
                    <TextField
                      id="qantity"
                      type="number"
                      margin="dense"
                      size="small"
                      variant="outlined"
                      value={item.quantity}
                      onChange={(e) => {
                        item.quantity = parseInt(e.target.value);
                        adjustQuantity(item);
                      }}
                    />
                    <DeleteForeverOutlinedIcon
                      className={classes.deleteIcon}
                      onClick={() => deleteItem(item)}
                      fontSize="large"
                      color="secondary"
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell
                className={`${classes.tableHead} ${classes.imageCell}`}
              ></TableCell>
              <TableCell
                className={classes.tableHead}
                component="th"
                scope="row"
              >
                Totalt pris:
              </TableCell>
              <TableCell
                className={`${classes.tableHead} ${classes.priceQuantityCell}`}
                align="right"
              >
                {totalPrice}
              </TableCell>
              <TableCell
                className={`${classes.errorText} ${classes.priceQuantityCell}`}
                align="right"
              >
                {noProductsError}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ShoppingCartTable;
