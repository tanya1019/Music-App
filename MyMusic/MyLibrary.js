import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from "react-native-vector-icons";
import MusicList from '../CustomList/MusicList'

const MyLibrary = (props) => {
    return (
            <View style = {styles.container}>
 {/*------------------------------------Header-----------------------------------*/}

                <View style={styles.header}>
            
                    <View style={{ width: "10%", justifyContent: "center", paddingLeft: 5 }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Home")} >
                            <Ionicons name="chevron-back" size={30} color="#066EF5" />
                        </TouchableOpacity>
                    </View>
            
                    <View style={{ width: "80%", alignItems: "center", justifyContent: "center" }}>
                        <Text style={styles.headertext}>
                            My Library
                        </Text>
                    </View>
        
                <View style={{ width: "10%" }}></View>
        
            </View>

{/*------------------------------------Header-----------------------------------*/}

<ScrollView style={{flex:1, width: "100%" }}>
          <MusicList Music="Dil mere" Detail="Local train" />
          <MusicList
            Music="Dusk till down"
            Detail="Zyan"
            albumUrl="https://i1.sndcdn.com/artworks-000405545727-arfwqx-t500x500.jpg"
          />
          <MusicList Music="Treat you better" Detail="Zyan" />
          <MusicList Music="Zindagi" Detail="Jubin Nautiyal" />
          <MusicList Music="Channa mereya" Detail="Detail:ABC" />
          <MusicList Music="Tum mile" Detail="Unknown" />
      </ScrollView>

        </View>
    )
}

export default MyLibrary

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        paddingTop:40
      },
      header: {
        backgroundColor: "black",
        width: "100%",
        height: 60,
        flexDirection: "row",
      },
      headertext: {
        fontSize: 22,
        fontWeight: "bold",
        color:'#066EF5'
      },
})
