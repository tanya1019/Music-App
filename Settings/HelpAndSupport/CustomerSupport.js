import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from "react-native-vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CustomerSupport = (props) => {
    return (
        <View style = {styles.container}>
{/*------------------------------------Header-----------------------------------*/}
            <View style={styles.header}>
        
                 <View style={{ width: "10%", justifyContent: "center", paddingLeft: 5 }}>
                     <TouchableOpacity onPress={() => props.navigation.navigate("Home")} >
                        <Ionicons name="chevron-back" size={30} color="#066EF5" />
                     </TouchableOpacity>
                 </View>
        
                 <View style={{ width: "80%", alignItems: "center", justifyContent: "center" }}>
                    <Text style={styles.headertext}>
                        Customer Service
                    </Text>
                 </View>
        
                 <View style={{ width: "10%" }}></View>
        
            </View>

            <ScrollView style = {{width:'100%'}} contentContainerStyle = {{alignItems:'center'}}>

 {/*------------------------------------------------------Contact Us----------------------------------------------------*/}
              
                <View style = {{ marginTop:10 ,justifyContent:'center', alignItems:"center"}}>
                  
                    <Text style = {{color:'white', fontSize:25, fontWeight:'bold'}}>
                        Contact Us
                    </Text>
               
                </View>

{/*------------------------------------------------------Phone number----------------------------------------------------*/}
                <TouchableOpacity onPress = {() =>{}} style = {{width:'100%', paddingLeft:5, flexDirection:'row', marginTop:10, alignItems:'center'}}>
                    
                    <View style = {{width:'100%', paddingLeft:5, flexDirection:'row', marginTop:13, alignItems:'center'}}>
                       
                        <FontAwesome name="phone" size={24} color="white" />
                       
                        <Text style = {{color:'white', fontSize:20, fontWeight:'700'}}>
                            {"   "}: 022-23456 87565
                        </Text>
                   
                    </View>
               
                </TouchableOpacity>

{/*-----------------------------------------------------Email---------------------------------------------------*/}
              
                <TouchableOpacity onPress = {() =>{}} style = {{width:'100%', paddingLeft:5, flexDirection:'row', marginTop:10, alignItems:'center'}}>
                    
                    <View style = {{width:'100%', paddingLeft:5, flexDirection:'row', marginTop:13, alignItems:'center'}}>

                        <MaterialCommunityIcons name="email" size={24} color="white" />

                        <Text style = {{color:'white', fontSize:20, fontWeight:'700'}}>
                            {"   "}: HorenMusic@gmail.com
                        </Text>

                    </View>
                </TouchableOpacity>

{/*----------------------------------------------------------------FAQ---------------------------------------------------------------*/}
               
                <View style = {{ marginTop:20 ,justifyContent:'center', alignItems:"center", marginBottom:10}}>
                    <Text style = {{color:'white', fontSize:25, fontWeight:'bold'}}>
                        FAQ
                    </Text>
                </View>

{/*------------------------------------------------------------FAQ Questions---------------------------------------------------------- */}

                <View style = {{width:'100%'}}>

                    <TouchableOpacity style = {styles.box}>
                        <View>
                            <Text style = {{color:'white', fontSize:18}}>
                                Couldn't download song?
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.box}>
                        <View>
                            <Text style = {{color:'white', fontSize:18}}>
                               Eqalizer not working?
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.box}>
                        <View>
                            <Text style = {{color:'white', fontSize:18}}>
                                Streaming Issues?
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.box}>
                        <View>
                            <Text style = {{color:'white', fontSize:18}}>
                                Missing Songs?
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.box}>
                        <View>
                            <Text style = {{color:'white', fontSize:18}}>
                                Podcast issue?
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.box}>
                        <View>
                            <Text style = {{color:'white', fontSize:18}}>
                                Player not working?
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
            
{/* -----------------------------------------TextInput and Submit Button---------------------- */}

                <TextInput placeholder = 'Enter your Queery...' placeholderTextColor = 'white' style = {styles.queryinp}/>

                <TouchableOpacity style = {styles.submit}>
                    <View>
                        <Text style = {{fontSize:20, fontWeight:'bold', color:'black'}}>
                            Submit
                        </Text>
                    </View>
                </TouchableOpacity>

                </ScrollView>

{/*------------------------------------------------------------End---------------------------------------------------------- */}
        </View>
    )
}

export default CustomerSupport

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        paddingTop:40
      },
      header: {
        backgroundColor: "black",
        width: "100%",
        height: 60,
        flexDirection: "row",
      },
      headertext: {
        fontSize: 22,
        fontWeight: "bold",
        color:'#066EF5'
      },
      box:{
          height:40,
          borderWidth:1,
          borderColor:'#066EF5',
          padding:10,
          borderRadius:20,
          justifyContent:'center',
          alignItems:'center',
          margin:5
      },
      queryinp:{
          width:'70%',
          maxWidth:700,
          height:40,
          borderRadius:20,
          backgroundColor:'#6666',
          paddingLeft:10,
          fontSize:15,
          marginTop:10
      },

      submit:{
          width:100,
          height:30,
          backgroundColor:'#066EF5',
          justifyContent:'center',
          alignItems:'center',
          marginTop:20,
          borderRadius:20
      }
})
