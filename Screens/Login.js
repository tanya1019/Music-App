import { LinearGradient } from 'expo-linear-gradient'
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, TextInput, View, Button, ImageBackground, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { auth, db } from '../Config';
import firebase from 'firebase';

const Login = ({navigation}) => {

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [loading, setLoading] = useState(true)

{/*------------------------------------------------Direct Login------------------------------------------------------------------- */}

useEffect(() => {
   const unsub = auth.onAuthStateChanged((authUser) => {
       if(authUser){
           navigation.navigate('Home'),
           setLoading(false),
           console.log('User Present -->' );
       }else{
           console.log('No User')
       }
   })
    return unsub 
}, [])

{/*----------------------------------------------Login Firebase--------------------------------------------------------------------- */}

const login = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
       
        navigation.navigate("Home");
      })
      .catch((error) => alert(error));
  };




    return (
        <View style = {styles.container}>
            <StatusBar style = 'light'/>
            <ImageBackground 
                blurRadius = {0.9}
                source = {{uri:"https://image.freepik.com/free-vector/musical-background-with-colorful-music-notes-waves_53562-1020.jpg"}}
                style = {styles.image}>

                <TextInput
            style={styles.inputpass}
            placeholder="Email"
            placeholderTextColor='white'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.inputpass}
            placeholder="Password"
            placeholderTextColor='white'
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
               

                <View style = {styles.button}>
                <TouchableOpacity onPress = {login}>
                    <Text style = {{fontWeight:'bold', fontSize:20, color:"white"}}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View> 
                
                <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center', }}>
                    <Text style = {{color:'#202aa8', fontSize:15 , marginTop:20 , paddingRight:7}}>
                        Don't have an account?
                    </Text>
                <TouchableOpacity onPress = {() => navigation.navigate('SignUp')} style = {styles.button1}>
                    <Text style = {{fontWeight:'bold', fontSize:15, color:"white"}}>
                        SignUp
                    </Text>
                </TouchableOpacity>
                </View>
        
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

    input1:{
        
        height:40,
        width:300,
        marginTop:100,
        borderRadius:20,
        paddingLeft:10,
        backgroundColor:'#202aa8'
    },

    input:{
        backgroundColor:"#202aa8",
        height:40,
        width:300,
        marginBottom:20,
        borderRadius:20,
        paddingLeft:10,
        marginTop:10
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
        backgroundColor:'#e92b81',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        marginTop:80
        
    },

    button1:{
        height:30,
        width:60,
        backgroundColor:'#e92b81',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        marginTop:20,
    },
    inputpass: {
        backgroundColor: '#202aa8',
        width: "70%",
        height: 45,
        borderRadius: 15,
        maxWidth: 500,
        paddingLeft: 10,
        marginTop: 10,
  },
    
    
})

export default Login;