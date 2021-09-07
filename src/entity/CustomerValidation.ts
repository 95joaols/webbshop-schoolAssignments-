type CustomerErrors = {
    firstName: boolean,
    lastName: boolean,
    address: boolean,
    zip: boolean,
    city: boolean,
    country: boolean
}
export let customerErrors: CustomerErrors = {
    firstName: true,
    lastName: true,
    address: true,
    zip: true,
    city: true,
    country: true
}

export const CustomerValidation = (parameter : string, value : string) => {
    switch (parameter) {
        case 'firstName':
            {
                if (!value || value.length === 0) 
                    customerErrors.firstName = true;
                 else 
                    customerErrors.firstName = false;
                
                break;

            }
        case 'lastName':
            {
                if (!value || value.length === 0) 
                    customerErrors.lastName = true;
                 else 
                    customerErrors.lastName = false;
                
                break;
            }
        case 'address':
            {
                if (!value || value.length === 0) 
                    customerErrors.address = true;
                 else 
                    customerErrors.address = false;
                
                break;

            }
        case 'zip':
            {
                if (!value || !value.match(/^\d{5}$/)) 
                    customerErrors.zip = true;
                 else 
                    customerErrors.zip = false;
                
                break;
            }
        case 'city':
            {
                if (!value || value.length === 0) 
                    customerErrors.city = true;
                 else 
                    customerErrors.city = false;
                
                break;
            }
        case 'country':
            {
                if (!value || value.length === 0) 
                    customerErrors.country = true;
                 else 
                    customerErrors.country = false;
                
                break;
            }
    }
}
