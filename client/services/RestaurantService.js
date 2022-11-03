import REACT_APP_DEV_IP from './constant';
import moment from 'moment';

const baseURL = `http://${REACT_APP_DEV_IP}:8080/restaurants/`;

export const getRestaurants = async () => {
  try {
    res = await fetch(baseURL)
    return res.json();
  } 
  catch (error) {
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

export const getSearchResults = async (partySize, datetime) => {
  try {
    const formattedDate = moment(datetime).format('YYYY-MM-DD')
    const formattedTime = moment(datetime).format('HH:mm')

    const res = await fetch(baseURL + 'filtered/?partySize=' + partySize +'&date=' + formattedDate + '&time=' + formattedTime)
    return res.json();
  } 
  catch (error) {
    console.error(error);
    }   
}
