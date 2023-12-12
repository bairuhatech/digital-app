import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import COLOR from '../config/color';
import {TabIcons} from './components/tabIcon';
import {HomeHeader} from './components/homeHeader';

import SplashScreen from '../screens/splashScreen';
import HomeScreen from '../screens/homeScreen';
import GetStartScreen from '../screens/getStartScreen';
import { useColorScheme } from 'react-native';


const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function HomeTabs() {
  const Theme = useColorScheme();
  return (
    <Tabs.Navigator
      initialRouteName="HomeTabs"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return TabIcons(route, focused, color, size);
        },
        tabBarInactiveTintColor:
          Theme === 'dark' ? COLOR.dark_text1 : COLOR.light_text1,
        tabBarActiveTintColor:
          Theme === 'dark' ? COLOR.primary : COLOR.primary,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 55,
          borderTopColor: Theme === 'dark' ? COLOR.dark_text1 : '#fff',
          backgroundColor:
            Theme === 'dark' ? COLOR.dark_bg : COLOR.light_bg,
        },
      })}>
      <Tabs.Screen
        name="Overview"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tabs.Screen
        name="Stories"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tabs.Screen
        name="Reels"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Tabs.Navigator>
  );
}


export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="splashscreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="getStartScreen"
        component={GetStartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="home"
        component={HomeTabs}
        options={{headerShown: false}}
      />

    </Stack.Navigator>
  );
}
