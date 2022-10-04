const baseURL = 'http://192.168.100.190:8080/bookings/';



// IDEAS FOR BOOKING ROUTES ⬇️



// Add booking to db
export function postBooking(booking) {
  return fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(booking),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
};

export function deleteBookingMethod(booking) {
  return fetch(baseURL + booking[id], {
    method: 'DELETE',
    body: JSON.stringify(booking),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
};

