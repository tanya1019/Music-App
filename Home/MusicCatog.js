import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";

export class MusicCatog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let categories = [
      {
        name: "Rock",
        img:{ 
            uri: 'https://www.fesliyanstudios.com/tagpictures/16.jpg'
        },
        id: "1",
      },
      {
        name: "HipHop",
        img: 
        {
            uri: 'https://i.ytimg.com/vi/mJ5p3EQ-rQI/maxresdefault.jpg'
        },
        id: "2",
      },
      {
        name: "Jazz",
        img: {
          uri: 'https://image.freepik.com/free-vector/jazz-music_1284-22597.jpg'
        },
        id: "3",
      },
      {
        name: "Classical",
        img: {
          uri: 'https://cdn.s3waas.gov.in/s3274ad4786c3abca69fa097b85867d9a4/uploads/2018/03/2018032838.jpg'
        },
        id: "4",
      },
      {
        name: "Metal",
        img: {
          uri: 'https://res.cloudinary.com/jerrick/image/upload/fl_progressive,q_auto,w_1024/htz2w34s3mnwkhmjdncx.jpg'
        },
        id: "5",
      },
    ];
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "white",
            paddingLeft: 5,
          }}
        >
          Categories
        </Text>
        <FlatList
          showsHorizontalScrollIndicator = {true}
          keyExtractor={(item) => item.id}
          data={categories}
          horizontal={true}
          renderItem={({ item, index }) => {
            return (
              <Surface style={styles.surface}>
                <Image
                  style={{ width: 105, height: 105, borderRadius: 10 }}
                  source={item.img}
                />
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "700" }}
                >
                  {item.name}
                </Text>
              </Surface>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 175,
    width: "100%",
    marginBottom:20
  },
  surface: {
    width: 120,
    padding: 5,
    backgroundColor: "#2d2d2d",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin:4
  },
});

export default MusicCatog;