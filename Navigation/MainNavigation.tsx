import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainContainer from './MainContainer';
import Login from './screens/login';
import { color } from 'react-native-elements/dist/helpers';
const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  const mainTheme = {
    dark: true,
    colors: {
      primary: 'rgb(255, 80, 80)',
      background: 'black',
      card: 'rgb(16, 16, 16)',
      text: 'white',
      border: 'rgb(60, 60, 60)',
      notification: 'white',
    }
  };
  return (
    <NavigationContainer theme={mainTheme}>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="MainContainer" component={MainContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}