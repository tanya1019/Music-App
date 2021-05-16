import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const SignOut = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text style = {{color:'white', fontSize:25}}>
                Are you sure, you want to SignOut?
            </Text>
            <TouchableOpacity onPress = {() => navigation.navigate('Login')} style = {styles.button}>
                    <Text style = {{fontWeight:'bold', fontSize:40, color:"white"}}>
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
        height:80,
        width:200,
        backgroundColor:'#066EF5',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:40,
        marginTop:20
        
    }
})
