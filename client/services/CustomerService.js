const baseURL = 'http://192.168.0.20:8080/customers/';

export async function getCustomerById(id) {
    try {
    const data = await fetch(baseURL + id);
    return data.json();
    } catch (error) {
        console.error(error);
        }
}


export const getCustomerByEmail = (email) => {
    try {
    console.log(email);
    return fetch(baseURL + 'byEmail/' + email)
        .then(res => res.json());
    } catch (error) {
        console.error(error);
        }

}

export const addRestaurantToCustomerFavourites = (customerId, restaurantId) => {
    try {
    return fetch(baseURL + customerId + '/restaurant/' + restaurantId,{
        method: "PATCH"
    })
        .then(res => res.json());
    } catch (error) {
        console.error(error);
        }
}