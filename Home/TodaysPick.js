import React, { Component,useEffect } from "react";
import { ImageBackground, TouchableOpacity, Linking } from "react-native";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";
import MusicPlayer from "../Screens/MusicPlayer";
import axios from "axios";
import { Credentials } from "../Screens/Credentials";
import base64 from 'react-native-base64';

export default function TodaysPick (props){
  
  const spotify = Credentials();
  const [playlist, setPlaylist] = useState([])
  const [songdata,setSonfdata] = useState({})

  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          base64.encode(spotify.ClientId + ":" + spotify.ClientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      // setToken(tokenResponse.data.access_token);

      axios("https://api.spotify.com/v1/playlists/37i9dQZF1DX0XUsuxWHRQd", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + tokenResponse.data.access_token,
        },
      }).then((genreResponse) => {
        // console.log(genreResponse.data.categories.items);
        setPlaylist(genreResponse.data.tracks.items);
        setSonfdata(genreResponse.data)
      });
    });
  }, [spotify.ClientId, spotify.ClientSecret]);

 

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

        <Text style={{fontSize: 20, fontWeight: "bold",color: "white",paddingLeft: 5,}}>
          {songdata.name}
        </Text>

        <Text style={{fontSize: 13, fontWeight: "normal", color: "#a1a1a1",paddingLeft: 5, paddingBottom:5}}>
          {songdata.description}
        </Text>

        <FlatList
          showsHorizontalScrollIndicator = {true}
          keyExtractor={(item, index) => JSON.stringify(index)}
          data={playlist}
          horizontal={true}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity onPress = {() => Linking.openURL(item.track.external_urls.spotify)}>
              <Surface style={styles.surface}>
                <ImageBackground
                  style={{ width: 110, height: 110, borderRadius: 10, justifyContent:'flex-end', padding:7 }}
                  source={{ uri: item.track.album.images[0].url }}
                  imageStyle = {{borderRadius:10}}
                >
                    <AntDesign name="play" size={20} color="white" />
                </ImageBackground>
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "700" }}
                  numberOfLines = {1}
                  ellipsizeMode = "tail"
                >
                  {item.track.name}
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
    height: 230,
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

