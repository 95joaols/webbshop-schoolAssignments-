import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { Container } from "@material-ui/core";
import { useContext } from "react";
import { CustomerContext } from "../contexts/CustomerContext";
import {
  CustomerValidation,
  customerErrors,
} from "../entity/CustomerValidation";

interface Props {
  onSetCustomer: () => void;
}

const CustomerInput: React.FC<Props> = ({ onSetCustomer }) => {
  const { customer, updateCustomer } = useContext(CustomerContext);

  useEffect(() => {
    onSetCustomer();
  });

  function addCustomerProperty(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
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
              CustomerValidation("firstName", e.target.value);
              addCustomerProperty(e);
            }}
            fullWidth
            autoComplete="shipping given-name"
            error={customerErrors.firstName}
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
              CustomerValidation("lastName", e.target.value);
              addCustomerProperty(e);
            }}
            fullWidth
            autoComplete="shipping family-name"
            error={customerErrors.lastName}
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
              CustomerValidation("address", e.target.value);
              addCustomerProperty(e);
            }}
            fullWidth
            autoComplete="shipping address-line1"
            error={customerErrors.address}
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
              CustomerValidation("zip", e.target.value);
              addCustomerProperty(e);
            }}
            fullWidth
            autoComplete="shipping postal-code"
            error={customerErrors.zip}
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
              CustomerValidation("city", e.target.value);
              addCustomerProperty(e);
            }}
            fullWidth
            autoComplete="shipping address-level2"
            error={customerErrors.city}
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
              CustomerValidation("country", e.target.value);
              addCustomerProperty(e);
            }}
            fullWidth
            autoComplete="shipping country"
            error={customerErrors.country}
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
              CustomerValidation("phoneNumber", e.target.value);
              addCustomerProperty(e);
            }}
            fullWidth
            autoComplete="shipping phone"
            error={customerErrors.phoneNumber}
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
              CustomerValidation("email", e.target.value);
              addCustomerProperty(e);
            }}
            fullWidth
            autoComplete="shipping email"
            error={customerErrors.email}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CustomerInput;
