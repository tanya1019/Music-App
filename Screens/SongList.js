import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Linking
} from "react-native";
import axios from "axios";

const SongList = ({ navigation, route }) => {
  const { item, token } = route.params;
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    axios(`https://api.spotify.com/v1/playlists/${item.id}/tracks`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((tracksResponse) => {
     // console.log(tracksResponse.data.items);
      setSongList(tracksResponse.data.items);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={songList}
        keyExtractor={(item,index) => JSON.stringify(index)}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              // onPress={() => navigation.navigate("MusicPlayer", { item })}
              onPress={() => {
                    console.log(item.track.external_urls);  
                    // navigation.navigate("MusicPlayer", { item })
                    Linking.openURL(item.track.external_urls.spotify);
                  }}
              style={{ flexDirection: "row", width: "100%", padding: 5 }}
            >
              <Image
                source={{ uri: item.track.album.images[0].url }}
                style={{ height: 50, width: "15%" }}
              />
              <View style={{ width: "85%", paddingLeft: 15 }}>
                <Text style={{ color: "white" }}>{item.track.name}</Text>

                <Text style={{ color: "white" }}>
                  {item.track.artists[0].name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default SongList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
});