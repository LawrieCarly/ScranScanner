import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import TabHomeScreen from './screens/TabHomeScreen';
import TabSearchScreen from './screens/TabSearchScreen';
import ReservationsScreen from './screens/ReservationsScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import LoginContainer from './containers/LoginContainer';
import AppContext from './components/AppContext';

import Icon from 'react-native-vector-icons/MaterialIcons'

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
          <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor:"#F38599" }}>
            <Tab.Screen 
              name="Home" 
              component={TabHomeScreen} 
              options={
                { tabBarIcon:() => (
                  <Icon 
                    name="home" 
                    size={18} 
                    color="#27233A" 
                  />)
                }
              }
            />
            <Tab.Screen 
              name="Search" 
              component={TabSearchScreen} 
              options={
                { tabBarIcon:() => (
                  <Icon 
                    name="search" 
                    size={18} 
                    color="#27233A" 

                  />)
                }
              } 
            />
            <Tab.Screen 
              name="Profile" 
              component={MyTabsScreen} 
              options={
                { tabBarIcon:() => (
                  <Icon 
                    name="account-circle" 
                    size={18} 
                    color="#27233A"
                  />)  
                }
              } 
            />
            
            {/* Below component is hidden in from bottom tab navigator */}
            <Tab.Screen 
              name="Restaurant" 
              component={RestaurantScreen} 
              options={
                { 
                tabBarButton: () => null,
                tabBarVisible: false,
                }
              }   
            />
        </Tab.Navigator>
      </NavigationContainer>
      </>
         } 
    </AppContext.Provider>
      
  
  );
}
