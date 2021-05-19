import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';  
import { Fontisto } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

const MusicList = ({MyMusic, MyDetail}) => {
    return (
        <View style = {styles.container}>
            

            <View style = {{width:'10%'}}>
            <FontAwesome name="music" size={24} color="white" />
            </View>
            <View style = {{width:'100%'}}>
                <Text style = {{fontWeight:'bold', fontSize:20, color:'white'}}>
                    {MyMusic}
                </Text>

                <Text style = {{fontSize:15, color:'white'}}>
                    {MyDetail}
                </Text>
             
            
            </View>
            
            
            

        </View>
    )
}

export default MusicList

const styles = StyleSheet.create({

    container:{
        height:100,
        width:'100%',
        backgroundColor:'black',
        borderBottomWidth:0.7,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        borderBottomColor:'white'
    }

})
