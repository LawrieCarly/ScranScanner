const baseURL = 'http://192.168.100.139:8080/customers/';

export async function getCustomerById(id) {
    const data = await fetch(baseURL + id);
    return data.json()
}

export const getCustomerByEmail = (email) => {
    console.log(email);
    return fetch(baseURL + email)
        .then(res => res.json());

}