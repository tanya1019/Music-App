import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from "react-native-vector-icons";
import MusicList from '../CustomList/MusicList'
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'

const MyDownloads = (props) => {
    return (
        <LinearGradient style = {styles.container}
        colors = {['#202aa8', '#e92b81','#202aa8',]}>
{/*------------------------------------Header-----------------------------------*/}
             <View style={styles.header}>

                <View style={{ width: "10%", justifyContent: "center", paddingLeft: 5 }}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Home")} >
                    <Ionicons name="chevron-back" size={30} color="white" />
                </TouchableOpacity>
                </View>

                <View style={{ width: "80%", alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.headertext}>
                    My Downloads
                </Text>
                </View>

                <View style={{ width: "10%" ,alignItems:'center', justifyContent:'center' }}>
                <FontAwesome name="search" size={24} color="white" />
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


        
    </LinearGradient>
    )
}

export default MyDownloads

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        paddingTop:40
      },
      header: {
       
        width: "100%",
        height: 60,
        flexDirection: "row",
      },
      headertext: {
        fontSize: 22,
        fontWeight: "bold",
        color:'white'
      },
})
