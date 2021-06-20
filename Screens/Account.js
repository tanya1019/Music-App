import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from 'react-native-vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { Feather , MaterialIcons} from '@expo/vector-icons';
import { auth, db } from '../Config';
import firebase from 'firebase';

const Account = (props) => {

  const signOutUser = () => {
    auth.signOut().then(() => {
      props.navigation.replace("Login");
    });
  };






    return (
        <View style = {styles.container}>
{/*---------------------------------------------------------------Header------------------------------------------- */}
          
           <View style = {styles.header}>
                <View style = {{width:'10%'}}>
                    <TouchableOpacity onPress = {() => props.navigation.openDrawer()}>
                        <Entypo name="menu" size={28} color="black" />
                    </TouchableOpacity>
                </View>

                <View style = {{width:'80%', alignItems:'center'}}>
                  <Text style = {{fontWeight:'bold', fontSize:20}}>
                    Account
                  </Text>
                </View>

                <View style = {{width:'10%'}}>
                   
                </View>
            </View>

{/*--------------------------------------------------------Profile Image----------------------------------------------------- */}
        
        <ImageBackground source = {{uri :'https://i.pinimg.com/originals/75/51/e5/7551e5bde057bdc8707baf5bb63d2550.jpg'}}
             style = {{width:200, height:200, marginTop:20, marginBottom:20}} imageStyle = {{borderRadius:300}}  >
            <FontAwesome name = 'camera' size ={30} color = 'grey' style ={{position:'absolute', top:155, left:155}} />
        </ImageBackground>

{/*------------------------------------------------------------Real name------------------------------------------------ */}
       
        <ScrollView style = {{width:'100%'}} contentContainerStyle = {{alignItems:'center'}}>
        <View style={styles.userinfo}>
        <View style = {{width:'90%'}}>
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
            Display Name
          </Text>
          <TextInput
            placeholder="TANYA THAKUR"
            placeholderTextColor="#066EF5"
            style={styles.userinput}
          />
        </View>
        <View style = {{width:'10%', justifyContent:'flex-end', paddingBottom:8}}>
          <MaterialIcons name="edit" size={30} color="black" />
        </View>
      </View>

{/*------------------------------------------------------Username--------------------------------------------------------- */}
        
        <View style={styles.userinfo}>
          <View style = {{width:'90%'}}>
              <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
                Username
              </Text>

              <TextInput
                placeholder="tanya__1019"
                placeholderTextColor="#066EF5"
                style={styles.userinput}
              />

          </View>

          <View style = {{width:'10%', justifyContent:'flex-end', paddingBottom:8}}>
             <MaterialIcons name="edit" size={30} color="black" />
          </View>
      </View>

{/*------------------------------------------------------------Email---------------------------------------------------- */}
      <View style={styles.userinfo}>
          <View style = {{width:'90%'}}>
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
              Email
            </Text>
            <TextInput
              placeholder="tanya@gmail.com"
              placeholderTextColor="#066EF5"
              style={styles.userinput}
            />
          </View>

          <View style = {{width:'10%', justifyContent:'flex-end', paddingBottom:8}}>
            <MaterialIcons name="edit" size={30} color="black" />
          </View>
          
      </View>

{/*-------------------------------------------------------Contact Number----------------------------------------------------- */}
    
    <View style={styles.userinfo}>
        <View style = {{width:'90%'}}>
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
              Contact Info
            </Text>
            <TextInput
              placeholder="123456789"
              placeholderTextColor="#066EF5"
              style={styles.userinput}
            />
        </View>

        <View style = {{width:'10%', justifyContent:'flex-end', paddingBottom:8}}>
            <MaterialIcons name="edit" size={30} color="black" />
        </View>

    </View>

        <View style = {styles.signout}>
            <TouchableOpacity onPress = {signOutUser}>
                <Text style = {{color:'white', fontSize:20}}>
                    Sign Out
                </Text>
            </TouchableOpacity>
        </View>

{/*-----------------------------------------------------------------end-------------------------------------------------------- */}
   
    </ScrollView>
  </View>
            
    )
}

export default Account

const styles = StyleSheet.create({

    container:{
        paddingTop:50,
        flex:1,
        backgroundColor:'black',
        alignItems:'center'
    },

    header:{
        width :"100%",
        height:50,
        backgroundColor:'#066EF5',
        justifyContent:'center',
        alignItems:"center",
        flexDirection:'row'
    }, 

    userinput: {
        width: "70%",
        height: 40,
        paddingLeft:15
        },

      userinfo: {
        width: "100%",
        height: 80,
        padding: 5,
        flexDirection: "row",
      },
      signout:{
          backgroundColor:'#066EF5',
          height:50,
          width:150,
          justifyContent:'center',
          alignItems:'center',
          borderRadius:20,
          marginTop:40
      }
    
})
