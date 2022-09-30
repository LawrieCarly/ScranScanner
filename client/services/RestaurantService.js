// import moment from 'moment';

// const baseURL = 'http://192.168.0.4:8080/restaurants/';

// const baseURLBooking = 'http://192.168.0.4:8080/availabilities/restaurant/';


// export async function getRestaurantById(id) {
//   const data = await fetch(baseURL + id);
//   return data.json()
    
// }

// export async function getFilteredAvailablitiesByRestaurant(restaurantId, partySize, date, time) {
//   const formattedDate = moment(date).format('YYYY-MM-DD')
//   const formattedTime = moment(date).format('00:00')
//   const data = await fetch(baseURLBooking + restaurantId + 'filtered?partySize=' + partySize +'&date=' + formattedDate + '&time=' + formattedTime);
//   return data.json() 
// }

// // Booking route POST


    
// // }
// // `http://192.168.100.139:8080/restaurants?partSize=${partySize}&date=${date}`