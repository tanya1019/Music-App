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

            <View style = {styles.header}>
                <View style = {{ width : '80%',justifyContent:'center', alignItems: 'center'}}>
                    <Text style = {{color:'black', fontSize:24, fontWeight:'bold'}}>
                        My Music
                    </Text>
                </View>
            </View>
       
{/*--------------------------------------------Downloads----------------------------------------------------------- */}
        <TouchableOpacity onPress = {() => props.navigation.navigate('MyDownloads') }>
            <View style = {styles.download}>

                <View style = {{width:'90%', alignItems:'center', flexDirection:'row'}}>

                     <AntDesign name="playcircleo" size={24} color="black" />

                    <View>
                        <Text style = {{paddingLeft:30, fontSize:20, fontWeight:'bold'}}>
                            My Downloads
                        </Text>

                        <Text style = {{paddingLeft:30, fontSize:15}}>
                            9 songs
                        </Text>
                    </View>

                </View>
                
                <View style = {{width:'10%'}}>
                 <AntDesign name="right" size={24} color="black" />
                </View>

            </View>
        </TouchableOpacity>

{/*---------------------------------------------My Favourites------------------------------------------------------------ */}
       
        <TouchableOpacity onPress = {() => props.navigation.navigate('MyFavs')}>
            <View style = {styles.download}>

                <View style = {{width:'90%', alignItems:'center', flexDirection:'row'}}>

                    <AntDesign name="playcircleo" size={24} color="black" />

                    <View>
                        <Text style = {{paddingLeft:30, fontSize:20, fontWeight:'bold'}}>
                            My Favourites
                        </Text>

                        <Text style = {{paddingLeft:30, fontSize:15}}>
                            15 songs
                        </Text>
                    </View>

                </View>

                <View style = {{width:'10%'}}>
                    <AntDesign name="right" size={24} color="black" />
                </View>

            </View>
        </TouchableOpacity>
{/*---------------------------------------------My Library------------------------------------------------------------ */}
        <TouchableOpacity onPress = {() => props.navigation.navigate('MyLibrary')}>
            <View style = {styles.download}>

                <View style = {{width:'90%', alignItems:'center', flexDirection:'row'}}>

                    <AntDesign name="playcircleo" size={24} color="black" />

                    <View>
                        <Text style = {{paddingLeft:30, fontSize:20, fontWeight:'bold'}}>
                            My Favourites
                        </Text>

                        <Text style = {{paddingLeft:30, fontSize:15}}>
                            30 songs
                        </Text>
                    </View>

                </View>

                <View style = {{width:'10%'}}>
                    <AntDesign name="right" size={24} color="black" />
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
        backgroundColor:'#066EF5',
        height:50,
        alignItems:'center',
        flexDirection:'row',
        width:'100%' ,
        justifyContent:'center',
        marginBottom:20 
    },

    download:{
        backgroundColor:'grey',
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:2
    }

    

})
