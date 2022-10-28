const baseURL = 'http://192.168.7.212:8080/availabilities/'



// Update selected booking availability to false 
export function updateBookingAvailabilityToFalse(availabilityObject) {
  try {
  return fetch(baseURL + availabilityObject.id.toString() + {
    method: 'PUT',
    body: JSON.stringify(availabilityObject),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
  } catch (error) {
    console.error(error);
    }
};
