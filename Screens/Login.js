import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, ImageBackground, TouchableOpacity } from 'react-native'

const Login = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <ImageBackground 
                blurRadius = {0.5}
                source = {{uri:"https://i.pinimg.com/236x/0f/ba/42/0fba420aedbab07a287043ce65dc0184--bright-lights-wallpaper-iphone.jpg"}}
                style = {styles.image}
            >
            <TextInput placeholder = 'Enter Email' style = {styles.input} placeholderTextColor = "yellow" />
            <TextInput placeholder = 'Enter Password' style = {styles.input} placeholderTextColor = "yellow"/>
            <TouchableOpacity onPress = {() => navigation.navigate('Home')}
                style = {styles.button}>
                <Text style = {{fontWeight:'bold', fontSize:15, color:"yellow"}}>
                    Login
                </Text>
            </TouchableOpacity>
            
            
            </ImageBackground>
         </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    input:{
        backgroundColor:"white",
        height:40,
        width:300,
        marginBottom:10,
        borderRadius:20,
        paddingLeft:10
    },
    image:{
        width:"100%",
        height:"100%",
        justifyContent:'center',
        alignItems:"center"
    },
    button:{
        height:30,
        width:80,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    }
    
})

export default Login;