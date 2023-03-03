import * as React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Main from './screens/main';
import Friends from './screens/friends';
import Profile from './screens/profile';
import Login from './screens/login';



const Tab = createBottomTabNavigator();

export default function MainContainer(){
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

  return(
    <NavigationContainer theme={mainTheme}>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={ ({route}) => ({
          tabBarIcon: ({ focused }) => {
            let iconName: string;
            let rn = route.name;
            let colorIcon;
            iconName = '';

            if (rn === 'Home') {
              iconName = 'home'
            } else if (rn === 'Friends') {
              iconName = 'users';
            } else if (rn === 'Profile') {
              iconName = 'user-alt';
            }
            colorIcon = focused ? "rgb(255, 80, 80)" : "grey";

            return <FontAwesome5 name={iconName} size={27}
            style={{
              marginTop: 5,
              alignSelf: 'center',
              color: colorIcon,
            }}
            />
          },
          headerShown:false
        })}
      >
        <Tab.Screen name={'Home'} component={Main}/>
        <Tab.Screen name={'Friends'} component={Friends}/>
        <Tab.Screen name={'Profile'} component={Profile}/>
        <Tab.Screen name={'Login'} component={Login}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}