import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import TabHomeScreen from './screens/TabHomeScreen';
import TabSearchResultsScreen from './screens/TabSearchResultsScreen';
import TabProfileScreen from './screens/TabProfileScreen';
import ReservationsScreen from './screens/ReservationsScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import BasicRestaurantScreen from './screens/BasicRestaurantScreen';
import LoginContainer from './containers/LoginContainer';
import AppContext from './components/AppContext';

// Login states




// Navigator 'stack' function to allow page navigations from within the Profile Tab

const ProfileStack = createNativeStackNavigator();









const TopTab = createMaterialTopTabNavigator();

function MyTabsScreen() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Reservations" component={ReservationsScreen} />
      <TopTab.Screen name="Saved" component={FavouritesScreen} />
    </TopTab.Navigator>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  // Global
  const [customerId, setCustomerId] = useState();

  const flipLoggedIn = () => {
    setLoggedIn(!loggedIn);
  }

  const changeCustomerId = (id) => {
    setCustomerId(id)
  }

  const customerHelper = {
    customerId: customerId,
    changeCustomerId,
    flipLoggedIn
  }

  return (
    <AppContext.Provider value={customerHelper}>
      {!loggedIn? 
      <>
        <LoginContainer
          flipLoggedIn={flipLoggedIn}
          changeCustomerId={changeCustomerId}
        />
      </>
           : 
      <>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={TabHomeScreen} />
            <Tab.Screen name="Search" component={TabSearchResultsScreen} />
            <Tab.Screen name="Notifications" component={MyTabsScreen} />
            <Tab.Screen name="Profile" component={TabProfileScreen} />


            <Tab.Screen name="Restaurant" component={RestaurantScreen} 
              options={{tabBarButton: ()=> null,tabBarVisible: false,}}   
            />
            {/* <Tab.Screen name="BasicRestaurant" component={BasicRestaurantScreen} 
              options={{tabBarButton: ()=> null,tabBarVisible: false,}}   
            /> */}
        </Tab.Navigator>
      </NavigationContainer>
      </>
        }
    </AppContext.Provider>
      
  
  );
}
