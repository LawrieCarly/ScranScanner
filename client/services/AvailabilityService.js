import REACT_APP_DEV_IP from './constant';
import moment from 'moment';

const baseURL = `http://${REACT_APP_DEV_IP}:8080/availabilities/`



export const getFilteredAvailablitiesOfRestaurant = async (restaurantId, partySize, datetime) => {
  try {

    const formattedDate = moment(datetime).format('YYYY-MM-DD')
    const formattedTime = moment(datetime).format('HH:mm')

    const data = await fetch(baseURL + 'restaurant/' + restaurantId + '/filtered?partySize=' + partySize +'&date=' + formattedDate + '&time=' + formattedTime);
    return data.json() 
  } 
  catch (error) {
    console.error(error);
  }

}