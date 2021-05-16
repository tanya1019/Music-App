import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Settings = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <View>
                <TouchableOpacity onPress = {() => navigation.navigate('Home')}>
                <Ionicons name="arrow-back" size={24} color="#066EF5" />
                </TouchableOpacity>
            </View>

            <View style = {{justifyContent:'center', alignItems: 'center'}}>
                <Text style = {{color:'#066EF5', fontSize:20}}>
                    This is Settings Screen
                </Text>
            </View>

        </View>
    )
}

export default Settings;

const styles = StyleSheet.create({

    container:{
        paddingTop:50,
        flex:1,
        backgroundColor:'black'
    }
    
})

