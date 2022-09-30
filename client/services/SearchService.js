
import moment from 'moment';

const baseURL = 'http://192.168.0.4:8080/restaurants/';

export const getRestaurants = () => {
  return fetch(baseURL)
    .then(res => res.json());
    
}

export async function getRestaurantById(id) {
  const data = await fetch(baseURL + id);
  return data.json()
    
}

export async function getSearchResults(partySize, date, time) {
  const formattedDate = moment(date).format('YYYY-MM-DD')
  const formattedTime = moment(date).format('00:00')
  const data = await fetch(baseURL + 'filtered?partySize=' + partySize +'&date=' + formattedDate + '&time=' + formattedTime);
  return data.json()
    
}



// export const getRestaurantById = (id) => {
  
//   return fetch(baseURL + id)
//     .then(res => res.json());
    
    
// }
// `http://192.168.100.139:8080/restaurants?partSize=${partySize}&date=${date}`