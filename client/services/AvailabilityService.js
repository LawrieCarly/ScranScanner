<<<<<<< HEAD
const baseURL = 'http://192.168.100.139:8080/availabilities/';
=======
const baseURL = 'http://192.168.100.248:8080/availabilities/';


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
      
>>>>>>> a8842d4 (added IPs)
