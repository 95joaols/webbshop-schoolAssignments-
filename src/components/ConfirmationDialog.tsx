import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import { CustomerContext } from "../contexts/CustomerContext";
import { Customer } from "../entity/Customer";
import { customerErrors } from "../entity/CustomerValidation";
import { Typography } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmationDialog: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const { updateShoppingCart } = useContext(ShoppingCartContext);
  const { updateCustomer, setValidationErrors } = useContext(CustomerContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const resetContexts = () => {
    updateShoppingCart([]);
    updateCustomer({} as Customer);
    setValidationErrors(customerErrors);
  };

  const useStyles = makeStyles(() => ({
    cardRow: {
      display: "inherit",
      flexDirection: "inherit",
      width: "50%",
      justifyContent: "center",
    },
    button: {
      width: "100%",
    },
    max500Text: {
      "@media (max-width:500px)": {
        fontSize: 12,
        paddingRight: 0
      }
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.cardRow}>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        <Typography className={classes.max500Text}>Bekr??fta</Typography>
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Din order ??r lagd!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Varorna kommer att packas och levereras till din adress s?? fort som
            m??jligt.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={resetContexts}
            component={Link}
            to="/"
          >
            St??ng
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmationDialog;
