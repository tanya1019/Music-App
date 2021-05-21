import React from 'react'
import { StyleSheet, Text, View,  TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const DownloadQuality = (props) => {
    return (
        <View style = {styles.container}>
            <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:50}}>
            <View style = {{width:50}}>
            <TouchableOpacity onPress = {() => props.navigation.navigate('Settings') }>
            <Ionicons name="arrow-back" size={28} color="#066EF5" />
            </TouchableOpacity>
            </View>
            <View style = {{width:'80%', alignItems:'center'}}>
            <Text style = {{fontSize:20, color:'#066EF5'}}>
                Download Quality
            </Text>
            </View>
            </View>
        </View>
    )
}

export default DownloadQuality

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
       
        alignItems:'center'
    }
})
