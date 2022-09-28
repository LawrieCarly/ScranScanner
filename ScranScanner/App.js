import React from 'react';
import {SafeAreaView, ScrollView, StatusBar,StyleSheet,Text, useColorScheme,TouchableOpacity,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import HomeTab from './screens/HomeTab';
import SearchTab from './screens/SearchTab';
import ProfileTab from './screens/ProfileTab';
import ReservationsScreen from './screens/ReservationsScreen';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();




function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
          initialRouteName="Feed"
          screenOptions={{
            headerShown: false
          }}>

        <Tab.Screen
          name="Home"
          component={HomeTab}
        />
        <Tab.Screen
          name="Search"
          component={SearchTab}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileTab}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;



// import React from 'react';
// import {SafeAreaView, ScrollView, StatusBar,StyleSheet,Text, useColorScheme,TouchableOpacity,View} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';


// import HomeScreen from './screens/HomeScreen';
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
//           component={HomeScreen}
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
// import HomeScreen from './screens/HomeScreen';
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

//         <Tab.Screen name={homeName} component={HomeScreen} />
//         <Tab.Screen name={searchName} component={SearchScreen} />
//         <Tab.Screen name={profileName } component={ProfileScreen} />

//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default MainContainer;


// //       screenOptions={{