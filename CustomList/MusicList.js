import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';  
import { Fontisto } from '@expo/vector-icons'; 

const MusicList = () => {
    return (
        <View style = {styles.container}>
            
            <View style = {{width:50}}>
            <Ionicons name="ios-musical-notes" size={24} color="black" />
            </View>

            <View style = {{width:'70%'}}>
            <Text style = {{fontWeight:'bold', fontSize:20}}>
                Music Name
            </Text>
            <Text style = {{fontSize:15}}>
                Discription
            </Text>
            </View>
            
            
            <View style = {{paddingRight:10, flexDirection:'row' }}>
            <MaterialCommunityIcons name="delete-outline" size={26} color="black" />
            <Fontisto name="heart" size={20} color="black" />
            </View>
            

            
            
           
        </View>
    )
}

export default MusicList

const styles = StyleSheet.create({
    container:{
        height:60,
        width:'100%',
        backgroundColor:'green',
        borderBottomWidth:0.7,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10
        



    }
})
