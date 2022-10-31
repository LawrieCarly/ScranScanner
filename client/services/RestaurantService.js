import REACT_APP_DEV_IP from './constant';

const baseURL = `http://${REACT_APP_DEV_IP}:8080/restaurants/`;
const baseURLAvailabilities = `http://${REACT_APP_DEV_IP}:8080/availabilities/restaurant/`;



export async function getRestaurantById(id) {
  try {
  const data = await fetch(baseURL + id);
  return data.json()
  } catch (error) {
    console.error(error);
    }
}
