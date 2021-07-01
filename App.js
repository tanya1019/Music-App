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
import {DrawerContent} from './Screens/DrawerContent';
import MyMusic from './Screens/MyMusic';
import Podcast from './Screens/Podcast';
import { FontAwesome5 } from '@expo/vector-icons';
import LanguagePref from './Settings/LanguagePref';
import DownloadQuality from './Settings/DownloadQuality';
import Eqalizer from './Settings/Eqalizer';
import StreamingQuality from './Settings/StreamingQuality';
import Navigation from './Settings/Navigation';
import CustomerSupport from './Settings/HelpAndSupport/CustomerSupport';
import Updates from './Settings/HelpAndSupport/Updates';
import MyDownloads from './MyMusic/MyDownloads';
import MyFavs from './MyMusic/MyFavs';
import MyLibrary from './MyMusic/MyLibrary';
import MusicPlayer from './Screens/MusicPlayer';
import MusicCatogList from './Screens/MusicCatogList';
import SongList from './Screens/SongList';


const Stack = createStackNavigator();
export default function App(){
  return(

/*---------------------------------------------Navigation container-------------------------------------------------------- */

    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Login'>
        <Stack.Screen name = 'Login' component = {Login}
        options = {{headerShown : false }}/>
        <Stack.Screen name = 'SignUp' component = {SignUp}
        options = {{headerShown : false }}/>
        <Stack.Screen name = 'Home' component = {drawer}
        options = {{headerShown : false }}/>
        <Stack.Screen name = 'LanguagePref' component = {LanguagePref}
        options = {{headerShown : false }}/>
        <Stack.Screen name = 'DownloadQuality' component = {DownloadQuality}
        options = {{headerShown:false}}/>
        <Stack.Screen name = 'Eqalizer' component = {Eqalizer}
        options = {{headerShown:false}}/>
        <Stack.Screen name = 'StreamingQuality' component = {StreamingQuality}
        options = {{headerShown:false}}/>
        <Stack.Screen name = 'Navigation' component = {Navigation}
        options = {{headerShown:false}}/>
        <Stack.Screen name = 'CustomerSupport' component = {CustomerSupport}
        options = {{headerShown:false}}/>
        <Stack.Screen name = 'Updates' component = {Updates}
        options = {{headerShown:false}}/>
        <Stack.Screen name = 'MyDownloads' component = {MyDownloads}
        options = {{headerShown:false}}/>
         <Stack.Screen name = 'MyFavs' component = {MyFavs}
        options = {{headerShown:false}}/>
         <Stack.Screen name = 'MyLibrary' component = {MyLibrary}
        options = {{headerShown:false}}/>
       <Stack.Screen name = 'MusicPlayer' component = {MusicPlayer}
        options = {{headerShown:false}}/>
        <Stack.Screen name = 'MusicCatogList' component = {MusicCatogList}
        options = {{headerShown:false}}/>
         <Stack.Screen name = 'SongList' component = {SongList}
        options = {{headerShown : false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
/*--------------------------------------------------Tab Navigator-------------------------------------------------------- */

const Tab = createMaterialBottomTabNavigator();
function bottomtab(){
  return (
    <Tab.Navigator 
        activeColor="#e92b81"
        barStyle={{ backgroundColor: "black" }}
        shifting={true}
        inactiveColor = '#202aa8'>
        
        

      <Tab.Screen name = 'Home' component = {Home}
      options = {{
        tabBarIcon : ({color}) => (
          <Entypo name="home" size={24} color={color} />
        ),
      }}
      />

      <Tab.Screen name = 'Podcast' component = {Podcast}
      options = {{
        tabBarIcon : ({color}) => (
          <FontAwesome5 name="podcast" size={24} color={color} />
        ),
      }}
      />
      <Tab.Screen name = 'MyMusic' component = {MyMusic}
       options = {{
        tabBarIcon : ({color}) => (
          <Entypo name="folder-music" size={24} color={color} />
        ),
      }}
      />

    </Tab.Navigator>
  )
}

/*----------------------------------------------------Drawer section------------------------------------------------------ */

const Dra = createDrawerNavigator();
function drawer(){
  return (
  <Dra.Navigator drawerContent = {(props) => <DrawerContent {...props}/>}>
    <Dra.Screen name = 'Home' component = {bottomtab}/>
    <Dra.Screen name = 'Notifications' component = {Notifications}/>
    <Dra.Screen name = 'Account' component = {Account}/>
    <Dra.Screen name = 'Settings' component = {Settings}/>  
  </Dra.Navigator>
  );
}



