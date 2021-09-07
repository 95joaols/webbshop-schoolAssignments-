import Grid from "@material-ui/core/Grid";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { customerErrors } from "../entity/CustomerValidation";
import ShoppingCartTable from "../components/ShoppingCartTable";
import CustomerInput from "../components/CustomerInput";

const CheckoutPage: React.FC = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  function disableIfError() {
    if (Object.values(customerErrors).includes(true) || totalPrice === 0)
      return true;
  }

  const useStyles = makeStyles((theme) => ({
    buttonCell: {
      display: "flex",
      justifyContent: "center",
    },
    button: {
      margin: "1rem",
      display: "inherit",
      justifyContent: "inherit",
      width: "30%",
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <ShoppingCartTable
        totalPrice={totalPrice}
        onSetPrice={(price) => {
          setTotalPrice(price);
        }}
      />
      <CustomerInput />
      <Grid item xs={12} className={classes.buttonCell}>
        <Button
          className={classes.button}
          component={Link}
          to="/summary"
          variant="contained"
          color="primary"
          disabled={disableIfError()}
        >
          Skicka
        </Button>
      </Grid>
    </div>
  );
};

export default CheckoutPage;
