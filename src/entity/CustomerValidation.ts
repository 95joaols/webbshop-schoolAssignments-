import { CustomerErrors } from "./CustomerErrors";

export let customerErrors: CustomerErrors = {
  firstName: false,
  lastName: false,
  address: false,
  zip: false,
  city: false,
  country: false,
  phoneNumber: false,
  email: false,
};

export const CustomerValidation = (parameter: string, value: string) => {
  switch (parameter) {
    case "firstName": {
      if (!value || value.length === 0 || !value.match(/^[a-zA-Z]+$/)) return true;
      else return false;
    }
    case "lastName": {
      if (!value || value.length === 0 || !value.match(/^[a-zA-Z]+$/)) return true;
      else return false;
    }
    case "address": {
      if (!value || value.length === 0) return true;
      else return false;
    }
    case "zip": {
      if (!value || !value.match(/^\d{5}$/)) return true;
      else return false;
    }
    case "city": {
      if (!value || value.length === 0) return true;
      else return false;
    }
    case "country": {
      if (!value || value.length === 0) return true;
      else return false;
    }
    case "phoneNumber": {
      if (!value || value.length === 0 || !value.match(/^\d+$/))
        return true;
      else return false;
    }
    case "email": {
      if (!value || value.length === 0 || !value.match(/^\S+@\S+\.\S+$/))
        return true;
      else return false;
    }
  }
};
