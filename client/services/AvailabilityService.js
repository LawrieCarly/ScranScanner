const baseURL = 'http://192.168.0.4:8080/availabilities/';


// Update selected booking availability to false 
export function updateBookingAvailabilityToFalse(availabilityObject) {
  return fetch(baseURL + {
    method: 'PUT',
    body: JSON.stringify(availabilityObject),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
};