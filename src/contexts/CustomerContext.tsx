import { createContext, FC, useState } from "react";
import { Customer } from "../entity/Customer";
import { CustomerErrors } from "../entity/CustomerErrors";
import { customerErrors } from "../entity/CustomerValidation";

interface ContextValue {
  customer: Customer;
  updateCustomer: (customer: Customer) => void;
  validationErrors: CustomerErrors;
  setValidationErrors: (customerErrors: CustomerErrors) => void;
}

export const CustomerContext = createContext<ContextValue>({
  customer: {} as Customer,
  updateCustomer: () => {},
  validationErrors: {} as CustomerErrors,
  setValidationErrors: () => {},
});

const CustomerProvider: FC = (props) => {
  const [customer, setCustomer] = useState<Customer>({} as Customer);
  const [validationErrors, setValidationErrors] =
    useState<CustomerErrors>(customerErrors);

  const updateCustomer = (customer: Customer) => {
    setCustomer(customer);
  };

  return (
    <CustomerContext.Provider
      value={{
        customer,
        updateCustomer,
        validationErrors,
        setValidationErrors,
      }}
    >
      {props.children}
    </CustomerContext.Provider>
  );
};

export default CustomerProvider;
