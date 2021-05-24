import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';

const Stack = createStackNavigator();

/*
<Stack.Screen name="Details" component={App} />
<Stack.Screen name="NewCity" component={App} />
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
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
