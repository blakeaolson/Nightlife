import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './screens/profile';
import User from './screens/user';
const Stack = createNativeStackNavigator();

export default function ProfileNavigation() {
  const mainTheme = {
    dark: true,
    colors: {
      primary: 'white',
      background: 'black',
      card: 'black',
      text: 'white',
      border: 'rgb(60, 60, 60)',
      notification: 'white',
    }
  };
  return (
    <NavigationContainer theme={mainTheme} independent={true}>
      <Stack.Navigator initialRouteName='MainProfile'>
        <Stack.Screen options={{ headerShown: false }} name="MainProfile" component={Profile} />
        <Stack.Screen options={{ headerShown: false }} name="User" component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}