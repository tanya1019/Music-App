import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native';
import { Ionicons } from "react-native-vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Updates = (props) => {
    return (
        <LinearGradient style = {styles.container} colors = {['#202aa8', '#e92b81']}>
{/*----------------------------------------------------Header---------------------------------------------------------------- */}
      <View style={styles.header}>

            <View style={{ width: "10%", justifyContent: "center", paddingLeft: 5 }}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Settings")} >
                    <Ionicons name="chevron-back" size={30} color="white" />
                </TouchableOpacity>
            </View>

            <View style={{ width: "80%", alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.headertext}>
                    Update
                </Text>
            </View>

            <View style={{ width: "10%" }}></View>

    </View>
{/* ---------------------------------------------------Image------------------------------------------------ */}

        <Image source = {require('../../assets/bellcolor.jpeg')} style = {styles.bell} />

{/* ---------------------------------------------------Software Updates------------------------------------------------ */}

        <View style = {{width:'100%', padding:10}}>
            <Text style = {{fontWeight:'bold', color:'white', fontSize:17}}>
                Software Update Information
            </Text>
             <Text style = {styles.updateinfo}>
                 . Version: jifoggfja10dgtf 
             </Text>
             <Text style = {styles.updateinfo}>
                 . Size: 20.01 MB
             </Text>
             <Text style = {styles.updateinfo}>
                 . Security Patch Level: 1st May 2021
             </Text>
        </View>
{/*-------------------------------------------------------Whats new-------------------------------------- */}
        <View style = {{width:'100%', padding:10}}>
        <View style = {{flexDirection:'row', width:'100%'}}>

            <Text style = {{fontWeight:'bold', color:'white', fontSize:17, paddingRight:10}}>
                What's new?
            </Text>

            <MaterialIcons name="celebration" size={24} color="white" />

            </View>
                <Text style = {styles.updateinfo}>
                    . Updated Podcast
                </Text>
                <Text style = {styles.updateinfo}>
                    . Updated New Navigation Feature Available
                </Text>
                <Text style = {styles.updateinfo}>
                    . Improved Streaming Quality
                </Text>
            </View>

            <View  style = {{width:'100%', padding:10}}>
                <Text style = {{fontWeight:'bold', color:'white', fontSize:17}}>
                    Learn more at
                </Text>

                <Text style = {styles.updateinfo}>
                        https://doc.hörenmusik.com/grtrdgv/jnfgdhy
                </Text>
            </View>


        </LinearGradient>
    )
}

export default Updates

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        paddingTop:30,
        alignItems:'center'
      },
      header: {
        backgroundColor: "transparent",
        width:'100%',
        height: 60,
        flexDirection: "row",
         borderBottomColor:'grey',
        borderBottomWidth:1,
        borderTopColor:'black',
        borderTopWidth:1,
        
      },
      headertext: {
        fontSize: 22,
        fontWeight: "bold",
        color:'white',
        
       
      },
      bell:{
          width:200,
          height:200,
         marginTop:20,
         marginBottom:20
          

      },
    updateinfo:{
        fontWeight:'400', color:'pink', fontSize:15,marginLeft:10
    }
})
