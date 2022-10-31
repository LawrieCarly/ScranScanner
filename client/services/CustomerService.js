import REACT_APP_DEV_IP from './constant';

const baseURL = `http://${REACT_APP_DEV_IP}:8080/customers/`;

export async function getCustomerById(id) {
    try {
        const data = await fetch(baseURL + id);
        return data.json();
    } 
    catch (error) {
        console.error(error);
    }
}

export const getCustomerByEmail = (email) => {
    try {
        const data = fetch(baseURL + 'byEmail/' + email);
        return data.json();
    } 
    catch (error) {
        console.error(error);
    }

}

export const addRestaurantToCustomerFavourites = (customerId, restaurantId) => {
    try {
        const data = fetch(baseURL + customerId + '/restaurant/' + restaurantId, {method: "PATCH"});
        return data.json();
    } 
    catch (error) {
        console.error(error);
    }
}