const baseURL = 'http://192.168.0.20:8080/bookings/';
const baseURLBookings = 'http://192.168.0.20:8080/bookings/customer/';



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
}

export function deleteBookingMethod(booking, id) {
  return fetch(baseURL + id, {
    method: 'DELETE',
    body: JSON.stringify(booking),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
}

export async function getBookingsByCustomer(id){
  const data = await fetch(baseURLBookings + id);
      return data.json()
}
