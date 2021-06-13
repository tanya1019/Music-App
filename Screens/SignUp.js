import React from 'react'
import { StyleSheet, Text, TextInput, View , Button, TouchableOpacity, ImageBackground} from 'react-native'
import Svg, { G, Circle } from 'react-native-svg';
const SignUp = ({navigation}) => {




    return (





        <View style = {styles.container}>


            <ImageBackground source = {{uri:"https://image.freepik.com/free-vector/musical-background-with-colorful-music-notes-waves_53562-1020.jpg"}}
                        style = {styles.image}
                        blurRadius = {0.9}>

                <TextInput placeholder = 'Enter Username' style = {styles.username} placeholderTextColor = 'white'/>
                <TextInput placeholder = 'Enter Email' style = {styles.input} placeholderTextColor = 'white'/>
                <TextInput placeholder = 'Enter Password' style = {styles.input} placeholderTextColor = 'white'/>
                <TextInput placeholder = 'Confirm Password' style = {styles.input} placeholderTextColor = 'white'/>

               

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
        backgroundColor:'#202aa8',
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
        backgroundColor:'#e92b81',
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        marginTop:90
    },

    image:{
        width:"100%",
        height:"100%",
        justifyContent:'center',
        alignItems:"center"
    },

     username:{
        backgroundColor:'#202aa8',
        justifyContent:'center', 
        alignItems:'center',
        borderRadius:20,
        marginBottom:10,
        height:30,
        width:250,
        marginLeft:10,
        paddingLeft:10,
        marginTop:65
    },

    
})

export default SignUp