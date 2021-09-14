import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { Container } from "@material-ui/core";
import { useContext } from "react";
import { CustomerContext } from "../contexts/CustomerContext";
import { CustomerValidation } from "../entity/CustomerValidation";
import { CustomerErrors } from "../entity/CustomerErrors";

interface Props {
  onSetCustomer: () => void;
  validationErrors: CustomerErrors;
  onSetValidationError: (value: React.SetStateAction<CustomerErrors>) => void;
}

const CustomerInput: React.FC<Props> = ({ onSetCustomer, validationErrors, onSetValidationError }) => {
  const { customer, updateCustomer } = useContext(CustomerContext);

  function addCustomerProperty(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    onSetValidationError({
      ...validationErrors,
      [e.target.name]: CustomerValidation(e.target.name, e.target.value)
    })
    updateCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
    onSetCustomer();
  }

  return (
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
            onChange={(e) => {
              addCustomerProperty(e);
            }}
            fullWidth
            autoComplete="shipping given-name"
            error={validationErrors.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Efternamn"
            value={customer.lastName}
            onChange={(e) => {
              addCustomerProperty(e);
            }}
            fullWidth
            autoComplete="shipping family-name"
            error={validationErrors.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Adress"
            value={customer.address}
            onChange={(e) => {
              addCustomerProperty(e);
            }}
            fullWidth
            autoComplete="shipping address-line1"
            error={validationErrors.address}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Postnummer"
            value={customer.zip}
            onChange={(e) => {
              addCustomerProperty(e);
            }}
            fullWidth
            autoComplete="shipping postal-code"
            error={validationErrors.zip}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Stad"
            value={customer.city}
            onChange={(e) => {
              addCustomerProperty(e);
            }}
            fullWidth
            autoComplete="shipping address-level2"
            error={validationErrors.city}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Land"
            value={customer.country}
            onChange={(e) => {
              addCustomerProperty(e);
            }}
            fullWidth
            autoComplete="shipping country"
            error={validationErrors.country}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Telefonnummer"
            value={customer.phoneNumber}
            onChange={(e) => {
              addCustomerProperty(e);
            }}
            fullWidth
            autoComplete="shipping phone"
            error={validationErrors.phoneNumber}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Epost"
            value={customer.email}
            onChange={(e) => {
              addCustomerProperty(e);
            }}
            fullWidth
            autoComplete="shipping email"
            error={validationErrors.email}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CustomerInput;
