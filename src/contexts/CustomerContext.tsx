import { createContext, FC, useState } from "react";
import { Customer } from "../entity/Customer";


interface ContextValue {
    customer: Customer;
    updateCustomer: (customer: Customer) => void
}

export const CustomerContext = createContext<ContextValue>({
    customer: {} as Customer,
    updateCustomer: () => {}
});

const CustomerProvider: FC = (props) => {
    const [customer, setCustomer] = useState<Customer>(
        {} as Customer
      );

      const updateCustomer = (customer: Customer) => {
        setCustomer(customer)
    }


    return (
        <CustomerContext.Provider
            value={{
                customer,
                updateCustomer
                }}>
                {props.children}
        </CustomerContext.Provider>
    );

};

export default CustomerProvider
