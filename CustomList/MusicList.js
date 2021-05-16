import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';  
import { Fontisto } from '@expo/vector-icons'; 

const MusicList = ({Music, Detail}) => {
    return (
        <View style = {styles.container}>
            
            <View style = {{width:50}}>
                <Ionicons name="ios-musical-notes" size={24} color="#066EF5" />
            </View>

            <View style = {{width:'70%'}}>
                <Text style = {{fontWeight:'bold', fontSize:20, color:'white'}}>
                    {Music}
                </Text>

                <Text style = {{fontSize:15, color:'#066EF5'}}>
                    {Detail}
                </Text>
            </View>
            
            
            <View style = {{paddingRight:10, flexDirection:'row', alignItems:'center', paddingLeft:10}}>
                <Fontisto name="heart" size={18} color="#066EF5"/>
                <MaterialCommunityIcons name="delete-outline" size={28} color="#066EF5" style = {{marginLeft:5}}/>
            </View>

        </View>
    )
}

export default MusicList

const styles = StyleSheet.create({

    container:{
        height:60,
        width:'100%',
        backgroundColor:'black',
        borderBottomWidth:0.7,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10
    }

})
