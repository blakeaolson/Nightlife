import * as React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Main from './screens/main';
import Profile from './screens/profile';
import EventModal from './screens/EventModal';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
  const mainTheme = {
    dark: true,
    colors: {
      primary: 'white',
      background: 'black',
      card: 'rgb(16, 16, 16)',
      text: 'white',
      border: 'rgb(60, 60, 60)',
      notification: 'white',
    }
  };
  const PostComponent = () => {
    return null;
  }
  return(
    <NavigationContainer theme={mainTheme} independent={true}>
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
            } else if (rn === 'Profile') {
              iconName = 'person';
            }
            colorIcon = focused ? "white" : "grey";
            
            return <Icon name={iconName} size={26}
            style={{
              alignSelf: 'center',
              color: colorIcon,
            }}
            />
          },
          headerShown:false
        })}
      >
        <Tab.Screen name={'Home'} component={Main} options={{tabBarShowLabel:false}}/>
        <Tab.Screen name={'Post'} component={PostComponent} options={{
          tabBarButton: () => (<EventModal/>),
        }}/>
        <Tab.Screen name={'Profile'} component={Profile} options={{tabBarShowLabel:false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}