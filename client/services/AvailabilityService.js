const baseURL = 'http://192.168.0.50:8080/availabilities/';


// Update selected booking availability to false 
export function updateBookingAvailabilityToFalse(availabilityObject) {
  return fetch(baseURL + availabilityObject.id.toString() + {
    method: 'PUT',
    body: JSON.stringify(availabilityObject),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
};


export const patchAvaialbility = (availability) => {
  return fetch(`http://192.168.0.50/availabilities/${availability.id}/false`) ,{
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    }
  }
}

// 
      // export function updateBookingAvailabilityToFalse(availabilityObject) {
      //   return fetch(baseURL + JSON.stringify(availabilityObject.id) + {
      //     method: 'PUT',
      //     body: JSON.stringify(availabilityObject),
      //     headers: {
      //       'Content-Type': 'application/json'
      //     }
      //   })
      //     .then(res => res.json());
      // };
      