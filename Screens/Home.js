import React from 'react'
import { View, Text , StyleSheet, TouchableOpacity, TouchableOpacityComponent, TextInput, ScrollView} from 'react-native'
import { Entypo } from 'react-native-vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import MusicList from '../CustomList/MusicList';
import {StatusBar} from 'expo-status-bar';
import { Feather } from '@expo/vector-icons'; 
import MusicCatog from '../Home/MusicCatog';
import RecentyPlayed from '../Home/RecentyPlayed'
import Trending from '../Home/Trending';
import TodaysPick from '../Home/TodaysPick';
import CategoryCarousel from '../CustomList/CategoryCarousel';
import { LinearGradient } from 'expo-linear-gradient'

const Home = (props) => {
    return (

        <LinearGradient style = {styles.container}
        colors = {['#202aa8', '#e92b81']}>

            <StatusBar style = 'dark' />

{/*---------------------------------------------- header section---------------------------------------------*/ }
           
            <View style = {styles.header}
            >

                <View style = {{width:'10%'}}>
                    <TouchableOpacity onPress = {() => props.navigation.openDrawer()}>
                        <Entypo name="menu" size={28} color="white" />
                    </TouchableOpacity>
                </View>

                <View style = {{width:'80%', alignItems:'center'}}>
                  <Text style = {{fontWeight:'bold', fontSize:20, color:'white'}}>
                    MUSIC
                  </Text>
                </View>

                <View style = {{width:'10%'}}>
                    <FontAwesome name="search" size={24} color="white" />
                </View>
            </View>

{/* ---------------------------------------Search section -------------------------------------------------*/}

                <View style = {styles.search}>
                    <View style = {{width:'90%' , flexDirection:'row', alignItems:'center'}}>
                        <FontAwesome name="search" size={18} color="white" />
                        <TextInput style = {{width:"90%", paddingLeft:5}} placeholder = 'Search' placeholderTextColor = 'white' />
                    </View>                   
                        <Feather name="mic" size={18} color="white" />
                </View>

{/*---------------------------------Music List------------------------------------------------------------ */}
            <ScrollView style = {{flex:1, width:"100%"}}>
            {/* <View style = {{width:'100%', padding:10, height:200}}>
               <Text style = {{fontSize:20, fontWeight:'bold', color:'white'}}>
                   Recently Played
               </Text>
               <ScrollView style = {{width:'100%'}} horizontal = {true}>
                    <MusicList Music = 'Shake It Off' Detail = 'Taylor Swift' />
                     <MusicList Music = 'Story Of My Life' Detail = 'One Direction'/>
                     <MusicList Music = 'Sweet Byt Pyscho' Detail = 'Ava Max'/>
                     <MusicList Music = 'Attention' Detail = 'Charlie Puth'/>
                     <MusicList Music = 'Senorita' Detail = 'Shawn Mendes'/>
                     <MusicList Music = 'Im a Mess' Detail = 'Bebe Rexha'/>
                     <MusicList Music = 'Believer' Detail = 'Imagine Dragons'/>
                     <MusicList Music = 'We Dont Talk Anymore' Detail = 'Charlie Puth'/>
                     <MusicList Music = 'Dance Monkey' Detail = 'Tones and I'/>
                     <MusicList Music = 'Best Song' Detail = 'Bebe Rexha'/>
                     <MusicList Music = 'Believer' Detail = 'Imagine Dragons'/>
                     <MusicList Music = 'We Dont Talk Anymore' Detail = 'Charlie Puth'/>
                     <MusicList Music = 'Dance Monkey' Detail = 'Tones and I'/>                     
               </ScrollView>
            </View>

            <View style = {{width:'100%', padding:10, height:200}}>    
                <Text style = {{fontSize:20, fontWeight:'bold', color:'white'}}>
                    In Demand
                </Text>                
                <ScrollView style = {{width:'100%' }} horizontal = {true}>
                        <MusicList Music = 'Shake It Off' Detail = 'Taylor Swift' />
                        <MusicList Music = 'Story Of My Life' Detail = 'One Direction'/>
                        <MusicList Music = 'Sweet Byt Pyscho' Detail = 'Ava Max'/>
                        <MusicList Music = 'Attention' Detail = 'Charlie Puth'/>
                        <MusicList Music = 'Senorita' Detail = 'Shawn Mendes'/>
                        <MusicList Music = 'Im a Mess' Detail = 'Bebe Rexha'/>
                        <MusicList Music = 'Believer' Detail = 'Imagine Dragons'/>
                        <MusicList Music = 'We Dont Talk Anymore' Detail = 'Charlie Puth'/>
                        <MusicList Music = 'Dance Monkey' Detail = 'Tones and I'/>
                        <MusicList Music = 'Best Song' Detail = 'Bebe Rexha'/>
                        <MusicList Music = 'Believer' Detail = 'Imagine Dragons'/>
                        <MusicList Music = 'We Dont Talk Anymore' Detail = 'Charlie Puth'/>
                        <MusicList Music = 'Dance Monkey' Detail = 'Tones and I'/>
                    </ScrollView>
            </View>
    */}
            <CategoryCarousel navigation = {props.navigation}/>
            <RecentyPlayed navigation = {props.navigation}/>
            <Trending navigation = {props.navigation}/>
            <TodaysPick navigation = {props.navigation}/>

            </ScrollView>
        </LinearGradient>
    )
}
export default Home;

{/*--------------------------------------------styles------------------------------------------------------ */}

const styles = StyleSheet.create({

    container:{
        paddingTop:50,
        flex:1,
        alignItems:'center',
        backgroundColor:'white'
    },

    header:{
        width :"100%",
        height:50,
        backgroundColor:'transparent',
        justifyContent:'center',
        alignItems:"center",
        flexDirection:'row',
         borderTopWidth:1,
        borderTopColor:'grey',
        borderBottomColor:'black',
        borderBottomWidth:1
    }, 
    
    search:{
        flexDirection:'row',
        backgroundColor:'#e92b81',
        width: '70%',
        height: 30,
        paddingLeft:10,
        alignItems:'center',
        marginTop:10,
        borderRadius:20,
        marginBottom:10,
    }

})
