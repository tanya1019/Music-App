import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Podcast = (props) => {
    return (
    <View style = {styles.container}>

              
        <View style={styles.header}>

            <View style={{ width: "10%", justifyContent: "center", paddingLeft: 5 }}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Home")} >
                    <Ionicons name="chevron-back" size={30} color="#066EF5" />
                </TouchableOpacity>
            </View>

            <View style={{ width: "80%", alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.headertext}>
                    Podcast
                </Text>
            </View>

            <View style={{ width: "10%" }}></View>

            </View>

    </View>
    )
}

export default Podcast

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
