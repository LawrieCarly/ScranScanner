
import moment from 'moment';

const baseURL = 'http://192.168.0.20:8080/restaurants/';

// TODO

export const getRestaurants = () => {
  try {
  return fetch(baseURL)
    .then(res => res.json());
  } catch (error) {
    console.error(error);
    }
}

// export async function getRestaurantById(id) {
//   const data = await fetch(baseURL + id);
//   return data.json()
    
// }

export const getSearchResults = (partySize, date, time) => {
  try {
  const formattedDate = moment(date).format('YYYY-MM-DD')
  const formattedTime = moment(date).format('HH:mm')
  // console.log(formattedDate)
  // console.log(formattedTime)

  return fetch(baseURL + 'filtered/?partySize=' + partySize +'&date=' + formattedDate + '&time=' + formattedTime)
  .then(data => data.json());
  } catch (error) {
    console.error(error);
    }   
}



// export const getRestaurantById = (id) => {
  
//   return fetch(baseURL + id)
//     .then(res => res.json());
    
    
// }
// `http://192.168.100.139:8080/restaurants?partSize=${partySize}&date=${date}`