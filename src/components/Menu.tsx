import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import DropDownCart from "./DropDownCart";
import { Box, Container } from "@material-ui/core";

export const Menu: React.FC = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      "& h1": {
        fontWeight: "lighter",
        fontSize: 68,
        color: "transparent",
        position: "absolute",
        opacity: 0,
        marginTop: 0,
        marginLeft: "-.5em",
        animation: `$cinematicInOut 5s ${theme.transitions.easing.easeInOut} infinite`,
      },
    },
    button: {
      backgroundColor: "none",
      color: "white",
    },
    toolbar: {
      minHeight: 128,
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
      flexDirection: "column",
    },
    buttoncontainer: {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      flexGrow: 1,
      justifyContent: "space-between",
      alignItems: "flex-end",
    },
    directionRow: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      position: "absolute",
      zIndex: 1,
    },
    cartPosition: {
      width: "97%",
      justifyContent: "flex-end",
      zIndex: 0
    },
    "@keyframes cinematicInOut": {
      "0%": {
        textShadow: "0 0 0 white",
        opacity: 1,
        marginLeft: 0,
      },
      "60%": {
        textShadow: "0 0 0 white",
        opacity: 1,
        marginLeft: 0,
      },
      "75%": {
        textShadow: "0 0 1rem white",
        opacity: "0,75",
        marginLeft: "-.5em",
      },
      "100%": {
        textShadow: "0 0 0 white",
        opacity: 1,
        marginLeft: 0,
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Container maxWidth="md">
          <Box display={{ xs: 'none', md: 'block'}} marginLeft="10rem">
          <h1>Our Awesome Webshop</h1>
          </Box>
          <Box display={{ xs: 'block', md: 'none'}}>
          <h1>Webshop</h1>
          </Box>
          </Container>
          <div className={classes.buttoncontainer}>
            <div className={`${classes.directionRow}`}>
              <Button
                className={classes.button}
                component={Link}
                to="/"
              >
                Start
              </Button>
              <Button
                className={classes.button}
                component={Link}
                to="/shoppingcart"
              >
                Kassa
              </Button>
              <Button
                className={classes.button}
                component={Link}
                to="/admin"
              >
                Admin
              </Button>
            </div>
            <div className={`${classes.directionRow} ${classes.cartPosition}`}>
              <DropDownCart></DropDownCart>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
