import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import React from "react";
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
import Button from "@material-ui/core/Button";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import { CustomerContext } from "../contexts/CustomerContext";
import { ShoppingCartItem } from "../entity/ShoppingCartItem";

export const CheckoutPage: React.FC = () => {
  let [totalPrice, setTotalPrice] = useState<number>(0);
  const { shoppingCartItems, updateShoppingCart } =
    useContext(ShoppingCartContext);
  const { customer, updateCustomer } = useContext(CustomerContext);

  function calculateTotal() {
    let sum: number = 0;
    shoppingCartItems.forEach(
      (product) => (sum += product.product.price * product.quantity)
    );
    setTotalPrice(sum);
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

  function addCustomerProperty(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    updateCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  }

  //TODO: Eventuellt behövs deps [calculateTotal, totalPrice]
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
    buttonCell: {
      display: "flex",
      justifyContent: "center",
    },
    button: {
      display: "inherit",
      justifyContent: "inherit",
      width: "50%",
    },
    quantityCell: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    deleteIcon: {
      cursor: "pointer",
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="md" className={classes.productTable}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  className={classes.tableHead}
                  component="th"
                  scope="row"
                >
                  Produktnamn
                </TableCell>
                <TableCell
                  className={classes.tableHead}
                  style={{ width: 150 }}
                  align="right"
                >
                  Pris
                </TableCell>
                <TableCell
                  className={classes.tableHead}
                  style={{ width: 150 }}
                  align="right"
                >
                  Antal
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shoppingCartItems.map((item) => (
                <TableRow key={item.product.name}>
                  <TableCell component="th" scope="row">
                    {item.product.name}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {item.product.price}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    <div className={classes.quantityCell}>
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
                  className={classes.tableHead}
                  component="th"
                  scope="row"
                >
                  Totalt pris:
                </TableCell>
                <TableCell
                  className={classes.tableHead}
                  style={{ width: 160 }}
                  align="right"
                >
                  {totalPrice}
                </TableCell>
                <TableCell style={{ width: 160 }}></TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Container>

      <Container maxWidth="md">
        <Typography variant="h6" gutterBottom>
          Leveransadress
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Förnamn"
              value={customer.firstName}
              onChange={(e) => addCustomerProperty(e)}
              fullWidth
              autoComplete="shipping given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Efternamn"
              value={customer.lastName}
              onChange={(e) => addCustomerProperty(e)}
              fullWidth
              autoComplete="shipping family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address"
              name="address"
              label="Adress"
              value={customer.address}
              onChange={(e) => addCustomerProperty(e)}
              fullWidth
              autoComplete="shipping address-line1"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Postnummer"
              value={customer.zip}
              onChange={(e) => addCustomerProperty(e)}
              fullWidth
              autoComplete="shipping postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Stad"
              value={customer.city}
              onChange={(e) => addCustomerProperty(e)}
              fullWidth
              autoComplete="shipping address-level2"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="country"
              name="country"
              label="Land"
              value={customer.country}
              onChange={(e) => addCustomerProperty(e)}
              fullWidth
              autoComplete="shipping country"
            />
          </Grid>
          <Grid item xs={12} className={classes.buttonCell}>
            <Link to="/summary" className={classes.button}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Skicka
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
