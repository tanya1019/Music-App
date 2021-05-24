import React , {useState} from 'react'
import { TouchableOpacity,Switch , Image} from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons";

const Navigation = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    return (

        <View style = {styles.container}>

{/*-----------------------------------------------Header-------------------------------------------------- */}

      <View style={styles.header}>

        <View style={{ width: "10%", justifyContent: "center", paddingLeft: 5 }} >
          <TouchableOpacity onPress={() => props.navigation.navigate("Settings")}>
            <Ionicons name="chevron-back" size={30} color="black" />
          </TouchableOpacity>
        </View>

        <View style={{ width: "80%", alignItems: "center", justifyContent: "center" }} >
          <Text style={styles.headertext}>
            Connect to apps
          </Text>
        </View>

        <View style={{ width: "10%" }}></View>

      </View>
{/*----------------------------------------Navigation Section--------------------------------------------- */}
      
      <View style = {{width:'100%', alignItems:'center', marginTop:20}}>

          <Text style = {styles.heading}>
              Navigation
          </Text>

          <Text style = {styles.caption}>
              BE SAFE. DONOT TOGGLE WITH THE NAVIGATIONAPP 
              PROMPTS BELOW WHITE DRIVING A MOTOR VEHICLE
          </Text>

          <View style = {{width:'100%', flexDirection:'row', marginTop:20}}>

              <View style = {{width:'80%', paddingLeft:10}}>
                <Text style = {{fontSize:15, color:'white'}}>
                    GET A REMINDER TO USE NAVIGATION APPS WHEN YOU'RE IN YOUR ACCOUNT
                </Text>
              </View>

              <View style = {{width:'20%', alignItems:'flex-end', paddingRight:10}}>
              <Switch
                    trackColor={{ false: "#767577", true: "#066EF5" }}
                    thumbColor={isEnabled ? "blue" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    />
              </View>

          </View>
      </View>
{/*-----------------------------------------------Google Maps------------------------------ */}
        
        <View style = {styles.googlemaps}>
          <View style = {{flexDirection:'row', alignItems:'center'}}>
            <Image style = {styles.image} 
            source = {require('../assets/google.jpeg')}/>
            <Text style = {{fontSize:20, fontWeight:'bold', color:'white', textAlign:'center'}}>
                Google Maps
            </Text>
            </View>

            <Text  style = {{fontSize:15, color:'white', textAlign:'center'}}>
                Play Music and Podcast in Google Maps
            </Text>
          
          <View style = {{width:'100%', alignItems:'center'}}>
            <View style = {styles.connect}>
              <TouchableOpacity>
                <Text style = {{fontWeight:'600', color:'white', fontSize:15}}>
                  Connect
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

{/*--------------------------------------Waze---------------------------------------------- */}
        
        <View style = {styles.googlemaps}>

          <View style = {{flexDirection:'row', alignItems:'center'}}>
              <Image style = {styles.image} 
                  source = {require('../assets/Waze.jpeg')}/>

              <Text style = {{fontSize:20, fontWeight:'bold', color:'white'}}>
                  Waze
              </Text>
          </View>

            <Text  style = {{fontSize:15, color:'white', textAlign:'center'}}>
               Control your music while navigating
            </Text>
          
          <View style = {{width:'100%', alignItems:'center'}}>

            <View style = {styles.connect}>
                <TouchableOpacity>
                  <Text style = {{fontWeight:'600', color:'white', fontSize:15}}>
                    Get App
                  </Text>
                </TouchableOpacity>
            </View>

          </View>

        </View>

{/*----------------------------------------End----------------------------------------------------- */}
        </View>
    )
}

export default Navigation

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "black",
        paddingTop:40,
        alignItems:'center'
      },

      header: {
        backgroundColor: "blue",
        width: "100%",
        height: 60,
        flexDirection: "row",
      },

      headertext: {
        fontSize: 22,
        fontWeight: "bold",
      },

      heading:{
          fontSize:20,
          fontWeight:'600',
          color:'white'
      },

      caption:{
          fontSize:15,
          color:'blue',
          textAlign:'center',
          marginTop:20,
          color:'white'
      },

      googlemaps:{
          height:150,
          width:'95%',
          backgroundColor:'#172026',
          marginTop:10,
          borderRadius:20,     
      },

      image:{
        height:60,
        width:60,
        margin:5,
        borderRadius:10
      },

      connect:{
        backgroundColor:'#172026',
        borderColor:'white',
        borderWidth:1,
        height:40,
        width:100,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        borderRadius:10
      }
      
})
