import React, { Component } from "react";
import { useState } from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";

export default function PopularRadioList(){
    const [songname, setSongname] = useState([
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
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "white",
            paddingLeft: 15,
            marginBottom:10
          }}
        >
          Popular Radio
        </Text>
        <FlatList
         showsHorizontalScrollIndicator = {true}
          keyExtractor={(item) => item.id}
          data={songname}
          horizontal={true}
          renderItem={({ item, index }) => {
            return (
              

              <Surface style={styles.surface}>

                <TouchableOpacity style = {{alignItems:'center', justifyContent:'center'}}>
                  
                <View style = {{width:105, height:105, backgroundColor:'black', justifyContent:'center', alignItems:'center', borderRadius:200, elevation:20}}>
                <Image
                  style={{ width: 100, height: 100, borderRadius: 200 }}
                  source={item.img}
                />
                </View>

                <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
                  {item.name}
                </Text>
                </TouchableOpacity>

              </Surface>
             
            );
          }}
        />
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    height: 195,
    width: "100%",
    marginBottom:20
  },
  surface: {
      
    width: 125,
    padding: 5,
    backgroundColor: "transparent",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,

    
    
    
    
  },
});

