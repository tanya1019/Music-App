import React, { Component } from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";
import MusicPlayer from "../Screens/MusicPlayer";

export default function RecentlyPlayed (props){
   const[songname , setSongname]= useState ( [
      {
        name: "Shake it off",
        img: {
          uri: "https://static.billboard.com/files/media/taylor-swift-1989-album-cover-2014-billboard-410-compressed.jpg",
        },
        id: "1",
      },
      {
        name: "History",
        img:{
          uri : 'https://images6.fanpop.com/image/photos/39100000/History-one-direction-39168234-577-1024.jpg'
        },
        id: "2",
      },
      {
        name: "Best Song Ever",
        img: {
          uri:'https://live.staticflickr.com/7374/9377318084_743e88b9b1_z.jpg'
        },
        id: "3",
      },
      {
        name: "Love Story",
        img: {
          uri :'https://i.pinimg.com/236x/9d/8a/a3/9d8aa35626f6561216b1399720ac1512--wedding-songs-taylor-swift-album.jpg'
        },
        id: "4",
      },
      {
        name: "Attention",
        img: {
          uri :'https://i1.sndcdn.com/artworks-000256017659-fqjbgs-t500x500.jpg'
        },
        id: "5",
      },
    ]);
    return (
      <View style={styles.container}>

        <Text style={{fontSize: 24, fontWeight: "bold",color: "white",paddingLeft: 5,}}>
          Recently Played
        </Text>

        <FlatList
          showsHorizontalScrollIndicator = {true}
          keyExtractor={(item) => item.id}
          data={songname}
          horizontal={true}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity onPress = {() => props.navigation.navigate('MusicPlayer', {item})}>
              <Surface style={styles.surface}>
                <ImageBackground
                  style={{ width: 120, height: 120, borderRadius: 10, justifyContent:'flex-end', padding:7 }}
                  source={item.img}
                  imageStyle = {{borderRadius:10}}
                >
                    <AntDesign name="play" size={20} color="white" />
                </ImageBackground>
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "700" }}
                >
                  {item.name}
                </Text>
              </Surface>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",
    marginBottom:20,
    marginTop:10
  },
  surface: {
    width: 130,
    padding: 5,
    backgroundColor: "transparent",
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,

    
  },
});

