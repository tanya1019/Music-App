import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import { Ionicons } from "react-native-vector-icons";

const MyFavs = (props) => {
    return (
        <View style = {styles.container}>
{/*------------------------------------Header-----------------------------------*/}
            <View style={styles.header}>
        
                 <View style={{ width: "10%", justifyContent: "center", paddingLeft: 5 }}>
                     <TouchableOpacity onPress={() => props.navigation.navigate("Home")} >
                        <Ionicons name="chevron-back" size={30} color="black" />
                     </TouchableOpacity>
                 </View>
        
                 <View style={{ width: "80%", alignItems: "center", justifyContent: "center" }}>
                    <Text style={styles.headertext}>
                         My Favourites
                    </Text>
                 </View>
        
                 <View style={{ width: "10%" }}></View>
        
            </View>
 {/*------------------------------------Header-----------------------------------*/}
                </View>
    )
}

export default MyFavs

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        paddingTop:40
      },
      header: {
        backgroundColor: "blue",
        width: "100%",
        height: 60,
        flexDirection: "row",
      },
      headertext: {
        fontSize: 22,
        fontWeight: "bold",
      },
})
