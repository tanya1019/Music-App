import React from 'react'
import { StyleSheet, Text, TextInput, View , Button, TouchableOpacity, ImageBackground} from 'react-native'

const SignUp = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <ImageBackground source = {{uri:"https://i.pinimg.com/originals/d3/96/a9/d396a94e2e55af1dc365ee3047db9ec9.jpg"}}
                        style = {styles.image}
                        blurRadius = {0.2}>

                <TextInput placeholder = 'Enter Username' style = {styles.input} placeholderTextColor = '#066EF5'/>
                <TextInput placeholder = 'Enter Email' style = {styles.input} placeholderTextColor = '#066EF5'/>
                <TextInput placeholder = 'Enter Password' style = {styles.input} placeholderTextColor = '#066EF5'/>
                <TextInput placeholder = 'Confirm Password' style = {styles.input} placeholderTextColor = '#066EF5'/>

               

                <TouchableOpacity style = {styles.signup} onPress = {() => navigation.navigate('Home')}>
                    <Text style = {{color:'white', fontWeight:'bold', fontSize:20}}>
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
        backgroundColor:'white',
        justifyContent:'center', 
        alignItems:'center',
        borderRadius:20,
        marginBottom:10,
        height:30,
        width:250,
        marginLeft:10,
        paddingLeft:10
    },

    signup:{
        height:40,
        width:100,
        backgroundColor:'#066EF5',
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        marginTop:250
    },

    image:{
        width:"100%",
        height:"100%",
        justifyContent:'center',
        alignItems:"center"
    }

    
})

export default SignUp