import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const StreamingQuality = (props) => {
    return (
        <View style = {styles.container}>
            <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:50}}>
            <View style = {{width:50}}>
            <TouchableOpacity onPress = {() => props.navigation.navigate('Settings')}>
            <Ionicons name="arrow-back" size={28} color="#066EF5" />
            </TouchableOpacity>
            </View>
            <View style = {{width:'80%', alignItems:'center'}}>
            <Text style = {{fontSize:20, color:'#066EF5'}}>
                Streaming Quality
            </Text>
            </View>
            </View>
        </View>
    )
}

export default StreamingQuality

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
       
        alignItems:'center'
    }
})
