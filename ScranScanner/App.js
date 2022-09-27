import React from 'react';
import {SafeAreaView, ScrollView, StatusBar,StyleSheet,Text, useColorScheme,TouchableOpacity,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import BookingsScreen from './screens/BookingsScreen';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home Page' }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: 'Details Page' }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Setting Page' }}
      />
      <Stack.Screen
        name="Bookings"
        component={BookingsScreen}
        options={{ title: 'Details Page' }}
      />
      {/* <Stack.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{ title: 'Profile Page' }}
      /> */}
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed">
          
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;