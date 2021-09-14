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
import ConfirmationDialog from "../components/ConfirmationDialog";
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
    root: {
      marginTop: 170
    },
    productTable: {
      marginTop: 24,
      marginBottom: 24,
    },
    tableHead: {
      fontWeight: 700,
    },
    footerText: {
      fontSize: 18,
      fontWeight: 700,
      color: "black",
    },
    cardRow: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
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
      width: "50%",
    },
    max500Cell: {
      "@media (max-width:500px)": {
        display: "none"
      }
    },
    max500Col: {
      "@media (max-width:500px)": {
        flexDirection: "column",
        alignItems: "center"
      }
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md" className={classes.productTable}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell width="5%" className={`${classes.tableHead} ${classes.max500Cell}`}>Id</TableCell>
              <TableCell width="50%" className={classes.tableHead}>Produktnamn</TableCell>
              <TableCell width="10%" className={classes.tableHead}>Styckpris</TableCell>
              <TableCell width="25%" className={classes.tableHead}>Antal</TableCell>
              <TableCell width="10%" align="right" className={classes.tableHead}>
                Totalt pris
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shoppingCartItems.map((product) => (
              <TableRow key={product.product.id}>
                <TableCell className={classes.max500Cell} width="5%">{product.product.id}</TableCell>
                <TableCell width="50%">{product.product.name}</TableCell>
                <TableCell width="10%">{product.product.price}</TableCell>
                <TableCell width="25%">{product.quantity}</TableCell>
                <TableCell width="10%" align="right">
                  {product.product.price * product.quantity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell className={classes.max500Cell} width="5%"></TableCell>
              <TableCell width="50%"></TableCell>
              <TableCell width="10%"></TableCell>
              <TableCell width="25%" className={classes.footerText}>Summa:</TableCell>
              <TableCell width="10%" align="right" className={classes.footerText}>
                {calculateTotal()}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Container>
      <Container maxWidth="md">
        <Card className={classes.productTable}>
          <CardContent className={`${classes.cardRow} ${classes.cardEven} ${classes.max500Col}`}>
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
              <Typography className={classes.customerDetalis} variant="body1">
                {customer.phoneNumber}
              </Typography>
              <Typography className={classes.customerDetalis} variant="body1">
                {customer.email}
              </Typography>
            </div>
          </CardContent>
        </Card>
        <div className={`${classes.cardRow} ${classes.cardEven}`}>
          <div className={classes.cardRow}>
            <Button
              className={classes.button}
              component={Link}
              to="/shoppingcart"
              variant="contained"
              color="primary"
            >
              Tillbaka
            </Button>
          </div>
          <div className={classes.cardRow}>
            <ConfirmationDialog />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SummaryPage;
