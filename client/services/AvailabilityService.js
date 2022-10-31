import REACT_APP_DEV_IP from './constant';
const baseURL = `http://${REACT_APP_DEV_IP}:8080/availabilities/`



export async function getFilteredAvailablitiesOfRestaurant(restaurantId, partySize, date, time) {
  try {
  const data = await fetch(baseURL + 'restaurant' + restaurantId + '/filtered?partySize=' + partySize +'&date=' + date + '&time=' + time);
  return data.json() 
  } catch (error) {
    console.error(error);
  }

}
export async function getAllAvailablitiesOfRestaurant(restaurantId, date) {
  try {
  const data = await fetch(baseURL + 'restaurant' + restaurantId + '/filtered?date=' + date);
  return data.json() 
  } catch (error) {
    console.error(error);
  }
}