import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import PodcastCarousel from '../CustomList/PodcastCarousel';
import { LinearGradient } from 'expo-linear-gradient'
import PopularRadioList from '../CustomList/PopularRadioList';
import { StatusBar } from 'expo-status-bar';
import Motivation from '../CustomList/Motivation';

const Podcast = (props) => {
    return (
 
                <LinearGradient style = {styles.container} 
                   colors = {['#e92b81', '#202aa8']}>
            < StatusBar style = 'dark'/>

               <Text style = {{color:'white', fontSize:40, fontWeight:'bold'}}>
                   Podcast
               </Text>

            <PodcastCarousel/>
            <PopularRadioList navigation = {props.navigation}/>
            <Motivation navigation = {props.navigation}/>

              </LinearGradient>
             
    )
}

export default Podcast

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: "black",
        paddingTop:40,
        alignItems:'center'

      },
     
})