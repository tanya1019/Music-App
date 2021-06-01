import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons, FontAwesome } from "react-native-vector-icons";
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
        
                <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                <FontAwesome name="search" size={24} color="#066EF5" />
                </View>
        
            </View>

{/*------------------------------------Header-----------------------------------*/}

<ScrollView style={{flex:1, width: "100%" }}>
          <TouchableOpacity>
          <MusicList Music="Dil mere" Detail="Local train" />
          </TouchableOpacity>
            
          <TouchableOpacity>
          <MusicList Music="Dusk till down" Detail="Zyan" />
          </TouchableOpacity>

          <TouchableOpacity>
          <MusicList Music="Treat you better" Detail="Zyan" />
          </TouchableOpacity>

          <TouchableOpacity>
          <MusicList Music="Zindagi" Detail="Jubin Nautiyal" />
          </TouchableOpacity>

          <TouchableOpacity>
          <MusicList Music="Channa mereya" Detail="Detail:ABC" />
          </TouchableOpacity>

          <TouchableOpacity>
          <MusicList Music="Tum mile" Detail="Unknown" />
          </TouchableOpacity>
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
