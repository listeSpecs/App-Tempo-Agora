import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DetailsScreen from '../screens/Details/DetailsScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import NewCityScreen from '../screens/NewCity/NewCityScreen';

const Stack = createStackNavigator();

/*
<Stack.Screen name="Details" component={App} />
*/

const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        title: '',
        headerStyle: {
          backgroundColor: '#fff',
          borderColor: '#fff',
          shadowColor: 'transparent',
          elevation: 0,
        },
        cardStyle: {
          backgroundColor: '#FFFFFF',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="NewCity"
        component={NewCityScreen}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
