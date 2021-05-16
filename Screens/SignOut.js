import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const SignOut = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress = {() => navigation.navigate('Login')} style = {styles.button}>
                    <Text style = {{fontWeight:'bold', fontSize:20, color:"white"}}>
                        SignOut
                    </Text>
                </TouchableOpacity>
        </View>
    )
}

export default SignOut

const styles = StyleSheet.create({
    container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'black'
    },
    button:{
        height:40,
        width:100,
        backgroundColor:'#066EF5',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        
    }
})
