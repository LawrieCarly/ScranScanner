baseURL = "http://192.168.0.50:8080/customers/byEmail/"

export const getCustomerByEmail = (email) => {
    console.log(email);
    return fetch(baseURL + email)
        .then(res => res.json());

}