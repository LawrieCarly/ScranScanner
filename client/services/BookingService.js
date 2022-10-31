import REACT_APP_DEV_IP from './constant';

const baseURL = `http://${REACT_APP_DEV_IP}:8080/bookings/`;

// Add booking to db
export const postBooking = async (booking) => {
  try {
    const res = await fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(booking),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return res.json();
  } 
  catch (error) {
    console.error(error);
  }
}

export const deleteBookingMethod = async (booking, id) => {
  try {
    const res = await fetch(baseURL + id, {
      method: 'DELETE',
      body: JSON.stringify(booking),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return res.json();
  } 
  catch (error) {
    console.error(error);
  }
}

export const getBookingsByCustomer = async (id) => {
  try {
    const res = await fetch(baseURL + 'customer/' + id);
    return res.json();
  } 
  catch (error) {
    console.error(error);
  }
}
