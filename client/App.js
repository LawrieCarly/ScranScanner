import * as React from 'react';
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


// Navigator 'stack' function to allow page navigations from within the Profile Tab

const ProfileStack = createNativeStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator >
      <ProfileStack.Screen  name="My Profile" component={TabProfileScreen}  />
      <ProfileStack.Screen name="Reservations" component={ReservationsScreen} />
      <ProfileStack.Screen name="Favourites" component={FavouritesScreen} />
    </ProfileStack.Navigator>
  );
}


const TopTab = createMaterialTopTabNavigator();

function MyTabsScreen() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Reservations" component={ReservationsScreen} />
      <TopTab.Screen name="Favourites" component={FavouritesScreen} />
    </TopTab.Navigator>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={TabHomeScreen} />
        <Tab.Screen name="Search" component={TabSearchResultsScreen} />
        <Tab.Screen name="Notifications" component={MyTabsScreen} />
        <Tab.Screen name="Profile" component={TabProfileScreen} />


        <Tab.Screen name="Restaurant" component={RestaurantScreen} 
            options={{tabBarButton: ()=> null,tabBarVisible: false,}}   
               />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
