import moment from 'moment';

const baseURL = 'http://192.168.0.4:8080/restaurants/';

const baseURLBooking = 'http://192.168.0.4:8080/availabilities/restaurant/';


export async function getRestaurantById(id) {
  const data = await fetch(baseURL + id);
  return data.json()
    
}

export async function getFilteredAvailablitiesOfRestaurant(restaurantId, partySize, date, time) {
  // Don't need to format date/time here because it was already formatted before being passed from SearchResults to RestoScreen
  const data = await fetch(baseURLBooking + restaurantId + '/filtered?partySize=' + partySize +'&date=' + date + '&time=' + time);
  return data.json() 

}

// Booking route POST


    
// }
// `http://192.168.100.139:8080/restaurants?partSize=${partySize}&date=${date}`