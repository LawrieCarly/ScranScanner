baseURL = "http://192.168.0.50/customers/byEmail"

export const getCustomerByEmail = (email) => {
    return fetch(baseURL, {
        method: 'GET',
        body: JSON.stringify(email),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json());

}