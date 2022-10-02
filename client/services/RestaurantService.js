import moment from 'moment';

const baseURL = 'http://192.168.0.4:8080/restaurants/';
const baseURLAvailabilities = 'http://192.168.0.4:8080/availabilities/restaurant/';



export async function getRestaurantById(id) {
  const data = await fetch(baseURL + id);
  return data.json()
    
}

export async function getFilteredAvailablitiesOfRestaurant(restaurantId, partySize, date, time) {
  // Don't need to format date/time here because it was already formatted before being passed from SearchResults to RestoScreen
  const data = await fetch(baseURLAvailabilities + restaurantId + '/filtered?partySize=' + partySize +'&date=' + date + '&time=' + time);
  return data.json() 
}



// IDEAS FOR BOOKING ROUTES ⬇️


// Add booking to user profile
// export function addBookingToUserProfile(booking) {
//   return fetch(baseURL, {
//     method: 'POST',
//     body: JSON.stringify(booking),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(res => res.json());
// };

// Update selected boking availability to false 
// updateBookingAvailabilityToFalse(booking) {
//   return fetch(baseURL + booking._id, {
//     method: 'PUT',
//     body: JSON.stringify(booking),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(res => res.json());
// };

    
// }
// `http://192.168.100.139:8080/restaurants?partSize=${partySize}&date=${date}`