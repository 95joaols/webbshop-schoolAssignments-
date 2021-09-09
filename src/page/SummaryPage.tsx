import { Container, TableFooter } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CustomerContext } from "../contexts/CustomerContext";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";

const SummaryPage: React.FC = () => {
  const { shoppingCartItems } = useContext(ShoppingCartContext);
  const { customer } = useContext(CustomerContext);

  function calculateTotal() {
    let sum = 0;
    shoppingCartItems.forEach(
      (product) => (sum += product.product.price * product.quantity)
    );
    return sum;
  }

  const useStyles = makeStyles(() => ({
    productTable: {
      marginTop: 24,
      marginBottom: 24,
    },
    tableHead: {
      fontWeight: 700,
    },
    footerText: {
      fontSize: 22,
      fontWeight: 700,
      color: "black",
    },
    cardRow: {
      display: "flex",
      flexDirection: "row",
    },
    cardColumn: {
      display: "flex",
      flexDirection: "column",
    },
    cardEven: {
      justifyContent: "space-evenly",
    },
    customerDetalis: {
      paddingTop: 8,
      paddingRight: 8,
      textAlign: "left",
    },
    button: {
      display: "inherit",
      justifyContent: "inherit",
      width: "30%",
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="md" className={classes.productTable}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHead}>Id</TableCell>
              <TableCell className={classes.tableHead}>Produktnamn</TableCell>
              <TableCell className={classes.tableHead}>Styckpris</TableCell>
              <TableCell className={classes.tableHead}>Antal</TableCell>
              <TableCell align="right" className={classes.tableHead}>
                Totalt pris
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shoppingCartItems.map((product) => (
              <TableRow key={product.product.id}>
                <TableCell>{product.product.id}</TableCell>
                <TableCell>{product.product.name}</TableCell>
                <TableCell>{product.product.price}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell align="right">
                  {product.product.price * product.quantity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell className={classes.footerText}>Summa:</TableCell>
              <TableCell align="right" className={classes.footerText}>
                {calculateTotal()}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Container>
      <Container maxWidth="md">
        <Card className={classes.productTable}>
          <CardContent className={`${classes.cardRow} ${classes.cardEven}`}>
            <div className={classes.cardColumn}>
              <Typography className={classes.customerDetalis} variant="h5">
                Leveransadress:
              </Typography>
            </div>
            <div className={classes.cardColumn}>
              <div className={classes.cardRow}>
                <Typography className={classes.customerDetalis} variant="h5">
                  {customer.firstName}
                </Typography>
                <Typography className={classes.customerDetalis} variant="h5">
                  {customer.lastName}
                </Typography>
              </div>
              <Typography className={classes.customerDetalis} variant="h6">
                {customer.address}
              </Typography>
              <div className={classes.cardRow}>
                <Typography className={classes.customerDetalis} variant="h6">
                  {customer.zip}
                </Typography>
                <Typography className={classes.customerDetalis} variant="h6">
                  {customer.city}
                </Typography>
                <Typography className={classes.customerDetalis} variant="h6">
                  {customer.country}
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className={`${classes.cardRow} ${classes.cardEven}`}>
            <Button
              className={classes.button}
              component={Link} to="/shoppingcart"
              variant="contained"
              color="primary"
            >
              Gå tillbaka
            </Button>
          {/* TODO: Lägg till modal på denna knapp --> */}
            <Button
              className={classes.button}
              component={Link} to="/"
              variant="contained"
              color="primary"
            >
              Bekräfta
            </Button>
        </div>
      </Container>
    </div>
  );
};

export default SummaryPage;
