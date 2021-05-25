import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity, TextInput, ScrollView} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import MyDownloads from '../MyMusic/MyDownloads';
import MyLibrary from '../MyMusic/MyLibrary';
import MyFavs from '../MyMusic/MyFavs';
import { AntDesign } from '@expo/vector-icons';

const MyMusic = (props) => {
    return (
        <View style = {styles.container}>

{/*--------------------------------------------Header----------------------------------------------------------- */}

        <View style={styles.header}>

            <View style={{ width: "10%", justifyContent: "center", paddingLeft: 5 }}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Settings")} >
                    <Ionicons name="chevron-back" size={30} color="#066EF5" />
                </TouchableOpacity>
            </View>

            <View style={{ width: "80%", alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.headertext}>
                    My Music
                </Text>
            </View>

            <View style={{ width: "10%" }}></View>

        </View>
       
{/*--------------------------------------------Downloads----------------------------------------------------------- */}
        <TouchableOpacity onPress = {() => props.navigation.navigate('MyDownloads') }>
            <View style = {styles.download}>

                <View style = {{width:'90%', alignItems:'center', flexDirection:'row'}}>

                    <View style = {{paddingLeft:5}}>
                        <AntDesign name="playcircleo" size={24} color="#066EF5" />
                    </View>
                     
                    <View>
                        <Text style = {{paddingLeft:30, fontSize:20, fontWeight:'bold', color:'#066EF5'}}>
                            My Downloads
                        </Text>

                        <Text style = {{paddingLeft:30, fontSize:15, color:'grey'}}>
                            9 songs
                        </Text>
                    </View>

                </View>
                
                <View style = {{width:'10%'}}>
                 <AntDesign name="right" size={24} color="#066EF5" />
                </View>

            </View>
        </TouchableOpacity>

{/*---------------------------------------------My Favourites------------------------------------------------------------ */}
       
        <TouchableOpacity onPress = {() => props.navigation.navigate('MyFavs')}>
            <View style = {styles.download}>

                <View style = {{width:'90%', alignItems:'center', flexDirection:'row'}}>

                     <View style = {{paddingLeft:5}}>
                        <AntDesign name="playcircleo" size={24} color="#066EF5" />
                    </View>

                    <View>
                        <Text style = {{paddingLeft:30, fontSize:20, fontWeight:'bold', color:'#066EF5'}}>
                            My Favourites
                        </Text>

                        <Text style = {{paddingLeft:30, fontSize:15, color:'grey'}}>
                            15 songs
                        </Text>
                    </View>

                </View>

                <View style = {{width:'10%'}}>
                    <AntDesign name="right" size={24} color="#066EF5" />
                </View>

            </View>
        </TouchableOpacity>
{/*---------------------------------------------My Library------------------------------------------------------------ */}
        <TouchableOpacity onPress = {() => props.navigation.navigate('MyLibrary')}>
            <View style = {styles.download}>

                <View style = {{width:'90%', alignItems:'center', flexDirection:'row'}}>

                    <View style = {{paddingLeft:5}}>
                        <AntDesign name="playcircleo" size={24} color="#066EF5" />
                    </View>

                    <View>
                        <Text style = {{paddingLeft:30, fontSize:20, fontWeight:'bold', color:'#066EF5'}}>
                            My Library
                        </Text>

                        <Text style = {{paddingLeft:30, fontSize:15, color:'grey'}}>
                            30 songs
                        </Text>
                    </View>

                </View>

                <View style = {{width:'10%'}}>
                    <AntDesign name="right" size={24} color="#066EF5" />
                </View>

            </View>
        </TouchableOpacity>

{/*------------------------------------------------------End----------------------------------------------------------- */}      
   
        </View>
        
    )
}

export default MyMusic

const styles = StyleSheet.create({

    container:{
        paddingTop:50,
        flex:1,
        backgroundColor:'black'
    },
    header:{
        backgroundColor:'black',
        height:50,
        alignItems:'center',
        flexDirection:'row',
        width:'100%' ,
        justifyContent:'center',
        marginBottom:20 
    },
    headertext: {
        fontSize: 22,
        fontWeight: "bold",
        color:'#066EF5'
      },

    download:{
        backgroundColor:'#111111',
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:2,
        height:60
    }

    

})
