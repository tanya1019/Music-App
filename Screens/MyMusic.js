import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity, TextInput, ScrollView} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import MyDownloads from '../MyMusic/MyDownloads';
import MyLibrary from '../MyMusic/MyLibrary';
import MyFavs from '../MyMusic/MyFavs';

const MyMusic = () => {
    return (
        <View style = {styles.container}>
             <View style = {{flexDirection:'row'}}>
            <View style = {{width:50 ,height :10}}>
                <TouchableOpacity onPress = {() => props.navigation.navigate('Home')}>
                <Ionicons name="arrow-back" size={24} color="#066EF5" />
                </TouchableOpacity>
            </View>

            <View style = {{ width : '80%',justifyContent:'center', alignItems: 'center'}}>
                <Text style = {{color:'#066EF5', fontSize:20}}>
                    This is Settings Screen
                </Text>
            </View>
            </View>
       
        
        
        <MyDownloads/>
        <MyFavs/>
        <MyLibrary/>
   
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
        flexDirection:'row'   
    },

    

})
