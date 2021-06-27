import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, View , Button, TouchableOpacity, ImageBackground, ScrollView} from 'react-native'
import Svg, { G, Circle } from 'react-native-svg';
import { auth, db } from '../Config';
import firebase from 'firebase';

const SignUp = ({navigation}) => {

const [username,setUsername] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
          authUser.user.updateProfile({
          displayName: username,
        //   photoURL:
        //     imageUrl ||
        //     "https://fgcucdn.fgcu.edu/_resources/images/faculty-staff-male-avatar-200x200.jpg",
        });
        db.collection("users").doc(auth.currentUser.uid).set({
          name: username,
          email: email,
          imageUrl:''
        });
        navigation.navigate("Home");
      })
      .catch((error) => alert(error));
  };


    return (

       <View style = {styles.container}>

            <ImageBackground source = {{uri:"https://image.freepik.com/free-vector/musical-background-with-colorful-music-notes-waves_53562-1020.jpg"}}
                        style = {styles.image}
                        blurRadius = {0.9}>

            <TextInput
            style={styles.inputuser}
            placeholder="Username"
            placeholderTextColor='white'
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.inputemail}
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
               

                <TouchableOpacity style = {styles.signup} onPress = {register}>
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
        
        flex:1,
        width:'100%',
        height:'100%'
    },

    input:{
        backgroundColor:'#202aa8',
        justifyContent:'space-evenly', 
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
      inputuser: {
          backgroundColor: "#202aa8",
          width: "70%",
          height: 45,
          borderRadius: 15,
          maxWidth: 500,
          paddingLeft: 10,
          borderBottomColor:'grey', 
          borderBottomWidth:1, 
          borderTopColor:'black', 
          borderTopWidth:1,
        },
        inputemail: {
          backgroundColor: '#202aa8',
          width: "70%",
          height: 45,
          borderRadius: 15,
          maxWidth: 500,
          paddingLeft: 10,
          marginTop: 10,
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

export default SignUp