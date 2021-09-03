import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import MenuIcon from "@material-ui/icons/Menu";
// import SearchIcon from "@material-ui/icons/Search";
// import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import { CheckoutPage } from "./CheckoutPage";
import { Link } from "react-router-dom";

export const Menu: React.FC = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    button: {
      marginRight: theme.spacing(2),
    },
    toolbar: {
      minHeight: 128,
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
      flexDirection: "column",
    },
    title: {},
    buttoncontainer: {
      width: "100%",
      display: "flex",
      flexGrow: 1,
      justifyContent: "space-between",
      alignItems: "flex-end",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h2" noWrap>
            Webshop
          </Typography>
          <div className={classes.buttoncontainer}>
            <div>
              <Link to="/">
                <Button className={classes.button} variant="outlined">
                  Start
                </Button>
              </Link>
              <Link to="/shoppingcart">
                <Button className={classes.button} variant="outlined">
                  Kundvagn
                </Button>
              </Link>
            </div>
            <div>
              <Button className={classes.button} variant="outlined">
                Admin
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
