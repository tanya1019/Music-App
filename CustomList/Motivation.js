import React, { Component } from "react";
import { useState } from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";
import {Provider, Portal, Modal} from 'react-native-paper';

export default function Motivation(){

    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

     

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
        <Provider>
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
          Motivation
        </Text>
        <FlatList
         showsHorizontalScrollIndicator = {false}
          keyExtractor={(item) => item.id}
          data={songname}
          horizontal={false}
          numColumns = {3}
          renderItem={({ item, index }) => {
            return (
              

              <Surface style={styles.surface}>

                <TouchableOpacity style = {{alignItems:'center', justifyContent:'center'}}
                onLongPress = {showModal}
                onPressOut = {hideModal}>
                  
                <View style = {{width:105, height:105, backgroundColor:'black', justifyContent:'center', alignItems:'center', borderRadius:200, elevation:20}}>
                <Image
                  style={{ width: 100, height: 100, borderRadius: 200 }}
                  source={item.img}
                />
                </View>

                <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}
                          numberOfLines = {1}
          ellipsizeMode = "tail">
                  {item.name}
                </Text>
                </TouchableOpacity>

              </Surface>
             
            );
          }}
        />
      </View>

          <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={{
            height: "50%",
            width: "80%",
            borderRadius: 20,
            padding: 10,
            backgroundColor: "white",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{width: "100%",
              height: "100%",
              backgroundColor: "black",
              borderRadius: 20,
            }}
          >
              <Text style = {{color:'white'}}>
                 hi
              </Text>
          </View>
        </Modal>
      </Portal>






      </Provider>
    );
  }


const styles = StyleSheet.create({
  container: {
    height: 195,
    width: "100%",
    marginBottom:20
  },
  surface: {
      
    width: '33%',
    padding: 3,
    backgroundColor: "transparent",
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,

    
    
    
    
  },
});

