import REACT_APP_DEV_IP from './constant';
import moment from 'moment';

const baseURL = `http://${REACT_APP_DEV_IP}:8080/restaurants/`;

export const getRestaurants = () => {
  try {
  return fetch(baseURL)
    .then(res => res.json());
  } catch (error) {
    console.error(error);
    }
}

export const getRestaurantById = async (id) => {
  try {
    const res = await fetch(baseURL + id);
    return res.json()
  } 
  catch (error) {
    console.error(error);
  }
}

export const getSearchResults = (partySize, date, time) => {
  try {
  const formattedDate = moment(date).format('YYYY-MM-DD')
  const formattedTime = moment(time).format('HH:mm')

  return fetch(baseURL + 'filtered/?partySize=' + partySize +'&date=' + formattedDate + '&time=' + formattedTime)
  .then(data => data.json());
  } catch (error) {
    console.error(error);
    }   
}
