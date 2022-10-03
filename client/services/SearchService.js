
import moment from 'moment';

const baseURL = 'http://192.168.100.190:8080/restaurants/';
const baseURLfiltered = 'http://192.168.100.190:8080/restaurants/filtered';



export const getRestaurants = () => {
  return fetch(baseURL)
    .then(res => res.json());
    
}

// export async function getRestaurantById(id) {
//   const data = await fetch(baseURL + id);
//   return data.json()
    
// }

export const getSearchResults = (partySize, date, time) => {
  const formattedDate = moment(date).format('YYYY-MM-DD')
  const formattedTime = moment(date).format('HH:mm')
  // console.log(formattedDate)
  // console.log(formattedTime)

  return fetch(baseURLfiltered + '?partySize=' + partySize +'&date=' + formattedDate + '&time=' + formattedTime)
  .then(data => data.json());
    
}



// export const getRestaurantById = (id) => {
  
//   return fetch(baseURL + id)
//     .then(res => res.json());
    
    
// }
// `http://192.168.100.139:8080/restaurants?partSize=${partySize}&date=${date}`