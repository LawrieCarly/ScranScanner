const baseURL = 'http://192.168.7.212:8080/bookings/';
const baseURLBookings = 'http://192.168.7.212:8080/bookings/customer/';



// Add booking to db
export function postBooking(booking) {
  try {
  return fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(booking),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
  } catch (error) {
    console.error(error);
    }
}

export function deleteBookingMethod(booking, id) {
  try {
  return fetch(baseURL + id, {
    method: 'DELETE',
    body: JSON.stringify(booking),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
  } catch (error) {
    console.error(error);
    }
}

export async function getBookingsByCustomer(id){
  try {
  const data = await fetch(baseURLBookings + id);
      return data.json();
    } catch (error) {
      console.error(error);
      }
}
