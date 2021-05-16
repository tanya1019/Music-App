import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Home from './Screens/Home';
import Settings from './Screens/Settings';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Notifications from './Screens/Notifications';
import Account from './Screens/Account';
import {Entypo, Ionicons} from 'react-native-vector-icons'
import SignOut from './Screens/SignOut';

const Stack = createStackNavigator();
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'SignUp'>
        <Stack.Screen name = 'Login' component = {Login}
        options = {{headerShown : false }}/>
        <Stack.Screen name = 'SignUp' component = {SignUp}
        options = {{headerShown : false }}/>
        <Stack.Screen name = 'Home' component = {bottomtab}
        options = {{headerShown : false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );


}
const Tab = createMaterialBottomTabNavigator();
function bottomtab(){
  return (
    <Tab.Navigator 
        activeColor="#066EF5"
        barStyle={{ backgroundColor: "black" }}
        shifting={true}>


      <Tab.Screen name = 'HomeScreen' component = {drawer}
      options = {{
        tabBarIcon : ({color}) => (
          <Entypo name="home" size={24} color={color} />
        ),
      }}
      />
      <Tab.Screen name = 'Settings' component = {Settings}
       options = {{
        tabBarIcon : ({color}) => (
          <Ionicons name="settings" size={24} color={color} />
        ),
      }}
      />

    </Tab.Navigator>
  )
}


const Dra = createDrawerNavigator();
function drawer(){
  return (
  <Dra.Navigator>
    <Dra.Screen name = 'Home' component = {Home}/>
    <Dra.Screen name = 'Notifications' component = {Notifications}/>
    <Dra.Screen name = 'Account' component = {Account}/>
    <Dra.Screen name = 'SignOut' component = {SignOut}/>  
  </Dra.Navigator>
  );
}


