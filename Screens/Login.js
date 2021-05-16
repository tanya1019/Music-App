import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, ImageBackground, TouchableOpacity } from 'react-native'

const Login = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <ImageBackground 
                blurRadius = {0.2}
                source = {{uri:"https://i.pinimg.com/originals/d3/96/a9/d396a94e2e55af1dc365ee3047db9ec9.jpg"}}
                style = {styles.image}>

                <TextInput placeholder = 'Enter Email' style = {styles.input} placeholderTextColor = "#066EF5" />
                <TextInput placeholder = 'Enter Password' style = {styles.input} placeholderTextColor = "#066EF5"/>

                <TouchableOpacity onPress = {() => navigation.navigate('Home')} style = {styles.button}>
                    <Text style = {{fontWeight:'bold', fontSize:20, color:"white"}}>
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
        marginBottom:15,
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
        height:40,
        width:100,
        backgroundColor:'#066EF5',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        marginTop:350
    }
    
})

export default Login;