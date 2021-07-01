import React , {useState} from 'react'
import { TouchableOpacity,Switch , Image} from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { RadioButton } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons";

const Navigation = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    return (

        <LinearGradient style = {styles.container} colors = {['#202aa8', '#e92b81']}>

{/*-----------------------------------------------Header-------------------------------------------------- */}

      <View style={styles.header}>

        <View style={{ width: "10%", justifyContent: "center", paddingLeft: 5 }} >
          <TouchableOpacity onPress={() => props.navigation.navigate("Settings")}>
            <Ionicons name="chevron-back" size={30} color="white" />
          </TouchableOpacity>
        </View>

        <View style={{ width: "80%", alignItems: "center", justifyContent: "center" }} >
          <Text style={styles.headertext}>
            Connect to Apps
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
                    trackColor={{ false: "#767577", true: "white" }}
                    thumbColor={isEnabled ? "blue" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    />
              </View>

          </View>
      </View>
{/*-----------------------------------------------Google Maps------------------------------ */}
        
        <LinearGradient style = {styles.googlemaps} colors = {['transparent', 'transparent']}>
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
        </LinearGradient>

{/*--------------------------------------Waze---------------------------------------------- */}
        
        <LinearGradient style = {styles.googlemaps} colors = {['transparent','transparent']}>

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

        </LinearGradient>

{/*----------------------------------------End----------------------------------------------------- */}
        </LinearGradient>
    )
}

export default Navigation

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "transparent",
        paddingTop:40,
        alignItems:'center'
      },

      header: {
        backgroundColor: "transparent",
        width: "100%",
        height: 60,
        flexDirection: "row",
        borderBottomColor:'grey',
          borderBottomWidth:1,
          borderTopColor:'black',
          borderTopWidth:1,
      },

      headertext: {
        fontSize: 22,
        fontWeight: "bold",
        color:'white'
      },

      heading:{
          fontSize:25,
          fontWeight:'bold',
          color:'white'
      },

      caption:{
          fontSize:18,
          color:'grey',
          textAlign:'center',
          marginTop:20,
          color:'white'
      },

      googlemaps:{
          height:150,
          width:'95%',
          backgroundColor:'transparent',
          marginTop:10,
          borderRadius:20, 
          borderBottomColor:'grey',
          borderBottomWidth:2,
          borderTopColor:'black',
          borderTopWidth:2, 
          borderLeftColor:'black',
          borderLeftWidth:2,
          borderRightColor:'grey',
          borderRightWidth:2   
      },

      image:{
        height:60,
        width:60,
        margin:5,
        borderRadius:10
      },

      connect:{
        backgroundColor:'#202aa8',
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
