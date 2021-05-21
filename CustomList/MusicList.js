import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';  
import { Fontisto } from '@expo/vector-icons'; 

const MusicList = ({Music, Detail}) => {
    return (
        <View style = {styles.container}>
            
            

            <View style = {{width:'70%'}}>
                <Text style = {{fontWeight:'bold', fontSize:20, color:'white'}}>
                    {Music}
                </Text>

                <Text style = {{fontSize:15, color:'#066EF5'}}>
                    {Detail}
                </Text>
            </View>
            
            
            

        </View>
    )
}

export default MusicList

const styles = StyleSheet.create({

    container:{
        height:150,
        width:150,
        backgroundColor:'black',
        borderBottomWidth:0.7,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        margin:3
    }

})
