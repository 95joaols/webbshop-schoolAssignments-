import Grid from "@material-ui/core/Grid";
import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartTable from "../components/ShoppingCartTable";
import CustomerInput from "../components/CustomerInput";
import ErrorBoundary from "../components/ErrorBoundary";
import { CustomerContext } from "../contexts/CustomerContext";

const CheckoutPage: React.FC = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { validationErrors } = useContext(CustomerContext);

  useEffect(() => {
    disableIfError();
  });

  function disableIfError() {
    if (Object.values(validationErrors).includes(true) || totalPrice === 0) {
      setDisabled(true);
    } else setDisabled(false);
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: 170,
    },
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
    link: {
      textDecoration: "none",
      color: "black",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ErrorBoundary>
        <ShoppingCartTable
          totalPrice={totalPrice}
          onSetPrice={(price) => {
            setTotalPrice(price);
            disableIfError();
          }}
        />
      </ErrorBoundary>
      <CustomerInput/>
      <Grid item xs={12} className={classes.buttonCell}>
        <Button
          className={classes.button}
          component={Link}
          to="/summary"
          variant="contained"
          color="primary"
          disabled={disabled}
        >
          Skicka
        </Button>
      </Grid>
    </div>
  );
};

export default CheckoutPage;
