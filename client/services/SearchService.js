

export const getRestaurants = () => {
  return fetch(`http://192.168.100.139:8080/restaurants`)
    .then(res => res.json());
}

// `http://192.168.100.139:8080/restaurants?location=${location}partSize=${partySize}&date=${date}`