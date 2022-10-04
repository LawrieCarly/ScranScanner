import moment from 'moment';

const baseURL = 'http://192.168.100.248:8080/restaurants/';
const baseURLAvailabilities = 'http://192.168.100.248:8080/availabilities/restaurant/';



export async function getRestaurantById(id) {
  try {
  const data = await fetch(baseURL + id);
  return data.json()
  } catch (error) {
    console.error(error);
    }
}

export async function getFilteredAvailablitiesOfRestaurant(restaurantId, partySize, date, time) {
  // Don't need to format date/time here because it was already formatted before being passed from SearchResults to RestoScreen
  try {
  const data = await fetch(baseURLAvailabilities + restaurantId + '/filtered?partySize=' + partySize +'&date=' + date + '&time=' + time);
  return data.json() 
  } catch (error) {
    console.error(error);
  }

}
export async function getAvailablitiesOfRestaurant(restaurantId, date) {
  try {
  const data = await fetch(baseURLAvailabilities + restaurantId + '/filtered?date=' + date);
  return data.json() 
  } catch (error) {
    console.error(error);
  }
}
