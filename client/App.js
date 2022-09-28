import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabHomeScreen from './screens/TabHomeScreen';
import TabSearchResultsScreen from './screens/TabSearchResultsScreen';
import TabProfileScreen from './screens/TabProfileScreen';
import ReservationsScreen from './screens/ReservationsScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import RestaurantScreen from './screens/RestaurantScreen';


// Navigator function to allow separate page navigation from within the Profile page

const ProfileStack = createNativeStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator >
      <ProfileStack.Screen name="My Profile" component={TabProfileScreen} />
      <ProfileStack.Screen name="Reservations" component={ReservationsScreen} />
      <ProfileStack.Screen name="Favourites" component={FavouritesScreen} />
    </ProfileStack.Navigator>
  );
}
// const HomeStack = createNativeStackNavigator();
// function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator >
//       <HomeStack.Screen name="Home" component={TabHomeScreen} />
//       <HomeStack.Screen name="Restaurant" component={RestaurantScreen} />
//     </HomeStack.Navigator>
//   );
// }



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={TabHomeScreen} />
        <Tab.Screen name="Search" component={TabSearchResultsScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
        {/* <Tab.Screen name="Restaurant" component={RestaurantScreen} 
            options={{tabBarButton: ()=> null,tabBarVisible: false,}}   
               /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// WORKING V2 ===========================================================


// import React from 'react';
// import {SafeAreaView, ScrollView, StatusBar,StyleSheet,Text, useColorScheme,TouchableOpacity,View} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';


// import TabTabHomeScreen from './screens/TabTabHomeScreen';
// import TabSearchResultsScreen from './screens/TabSearchResultsScreen';
// import TabProfileScreen from './screens/TabProfileScreen';
// import ReservationsScreen from './screens/ReservationsScreen';



// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();




// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//           initialRouteName="Feed"
//           screenOptions={{
//             headerShown: false
//           }}>

//         <Tab.Screen
//           name="Home"
//           component={TabTabHomeScreen}
//         />
//         <Tab.Screen
//           name="Search"
//           component={TabSearchResultsScreen}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={TabProfileScreen}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// ==================================================================================

// import React from 'react';
// import {SafeAreaView, ScrollView, StatusBar,StyleSheet,Text, useColorScheme,TouchableOpacity,View} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';


// import TabHomeScreen from './screens/TabHomeScreen';
// import SearchScreen from './screens/SearchScreen';
// import ProfileScreen from './screens/ProfileScreen';
// import ReservationsScreen from './screens/sub-screens/ReservationsScreen';



// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();




// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//           initialRouteName="Feed"
//           screenOptions={{
//             headerShown: false
//           }}>

//         <Tab.Screen
//           name="Home"
//           component={TabHomeScreen}
//         />
//         <Tab.Screen
//           name="Search"
//           component={SearchScreen}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={ProfileScreen}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;













// ALTERNATE BOTTOM NAV ==============================================================================================================================================




// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// // Screens
// import TabHomeScreen from './screens/TabHomeScreen';
// import SearchScreen from './screens/SearchScreen';
// import ProfileScreen from './screens/ProfileScreen';
// import BookingsScreen from './screens/BookingsScreen';

// //Screen names
// const homeName = "Home";
// const searchName = "Search";
// const profileName = "Profile";

// const Tab = createBottomTabNavigator();

// function MainContainer() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName={homeName}
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//             let rn = route.name;

//             if (rn === homeName) {
//               iconName = focused ? 'home' : 'home-outline';

//             } else if (rn === searchName) {
//               iconName = focused ? 'search' : 'list-outline';

//             } else if (rn === profileName) {
//               iconName = focused ? 'profile' : 'settings-outline';
//             }

//             // You can return any component that you like here!
//             return <></>;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: 'blue',
//           inactiveTintColor: 'grey',
//           labelStyle: { paddingBottom: 10, fontSize: 10 },
//           style: { padding: 10, height: 70}
//         }}>

//         <Tab.Screen name={homeName} component={TabHomeScreen} />
//         <Tab.Screen name={searchName} component={SearchScreen} />
//         <Tab.Screen name={profileName } component={ProfileScreen} />

//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default MainContainer;


// //       screenOptions={{