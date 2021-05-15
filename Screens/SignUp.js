import React from 'react'
import { StyleSheet, Text, TextInput, View , Button, TouchableOpacity, ImageBackground} from 'react-native'

const SignUp = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <ImageBackground source = {{uri:"https://i.pinimg.com/236x/0f/ba/42/0fba420aedbab07a287043ce65dc0184--bright-lights-wallpaper-iphone.jpg"}}
            style = {styles.image}>
            <TextInput placeholder = 'Enter Username' style = {styles.input} placeholderTextColor = 'yellow'/>
            <TextInput placeholder = 'Enter Email' style = {styles.input} placeholderTextColor = 'yellow'/>
            <TextInput placeholder = 'Enter Password' style = {styles.input} placeholderTextColor = 'yellow'/>
            <TextInput placeholder = 'Confirm Password' style = {styles.input} placeholderTextColor = 'yellow'/>

            <TouchableOpacity style = {styles.login} onPress = {() => navigation.navigate('Login')}>
                <Text style = {{color:'yellow', fontWeight:'bold'}}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.signup} onPress = {() => navigation.navigate('Home')}>
                <Text style = {{color:'yellow', fontWeight:'bold'}}>
                    SignUp
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
        backgroundColor:'red',
        justifyContent:'center', 
        alignItems:'center',
        borderRadius:20,
        marginTop:5,
        height:25,
        width:250,
        marginLeft:10,
        paddingLeft:10
    },
    signup:{
        height:30,
        width:70,
        backgroundColor:'red',
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        marginTop:5
    },
    login:{
        height:30,
        width:70,
        backgroundColor:'red',
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        marginTop:40
    },
    image:{
        width:"100%",
        height:"100%",
        justifyContent:'center',
        alignItems:"center"
    },

    
})

export default SignUp