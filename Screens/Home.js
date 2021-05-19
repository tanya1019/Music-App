import React from 'react'
import { View, Text , StyleSheet, TouchableOpacity, TouchableOpacityComponent, TextInput, ScrollView} from 'react-native'
import { Entypo } from 'react-native-vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import MusicList from '../CustomList/MusicList';
import {StatusBar} from 'expo-status-bar';
import { Feather } from '@expo/vector-icons'; 

const Home = ({navigation}) => {
    return (

        <View style = {styles.container}>

            <StatusBar style = 'light' />

{/*---------------------------------------------- header section---------------------------------------------*/ }
           
            <View style = {styles.header}>
                <View style = {{width:'10%'}}>
                    <TouchableOpacity onPress = {() => navigation.openDrawer()}>
                        <Entypo name="menu" size={28} color="black" />
                    </TouchableOpacity>
                </View>

                <View style = {{width:'80%', alignItems:'center'}}>
                  <Text style = {{fontWeight:'bold', fontSize:20}}>
                    MUSIC
                  </Text>
                </View>

                <View style = {{width:'10%'}}>
                    <FontAwesome name="search" size={24} color="black" />
                </View>
            </View>

{/* ---------------------------------------Search section -------------------------------------------------*/}

                <View style = {styles.search}>
                    <View style = {{width:'90%' , flexDirection:'row'}}>
                        <FontAwesome name="search" size={18} color="grey" />
                        <TextInput style = {{width:"90%", paddingLeft:5}} placeholder = 'Search' />
                    </View>                   
                        <Feather name="mic" size={18} color="grey" />
                </View>

{/*---------------------------------Music List------------------------------------------------------------ */}
            <View style = {{width:'100%', padding:10}}>
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

            <View style = {{width:'100%', padding:10}}>    
                <Text style = {{fontSize:20, fontWeight:'bold', color:'white'}}>
                    Recently Played
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
               
        </View>
    )
}
export default Home;

{/*--------------------------------------------styles------------------------------------------------------ */}

const styles = StyleSheet.create({

    container:{
        paddingTop:50,
        flex:1,
        alignItems:'center',
        backgroundColor:'black'
    },

    header:{
        width :"100%",
        height:50,
        backgroundColor:'#066EF5',
        justifyContent:'center',
        alignItems:"center",
        flexDirection:'row'
    }, 
    
    search:{
        flexDirection:'row',
        backgroundColor:'white',
        width: '70%',
        height: 30,
        paddingLeft:10,
        alignItems:'center',
        marginTop:10,
        borderRadius:20,
        marginBottom:10
    }

})
