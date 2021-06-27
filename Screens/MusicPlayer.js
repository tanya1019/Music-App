import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import { Ionicons , Feather, SimpleLineIcons,FontAwesome, MaterialCommunityIcons, MaterialIcons } from 'react-native-vector-icons';
import Navigation from '../Settings/Navigation';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';

const MusicPlayer = ({navigation, route}) => {
    
           

           
const [status, setStatus] = React.useState('pause')
const play_pause = () => {
    if(status === 'pause'){
        setStatus('play')
    }else{
        setStatus('pause')
    }
}


    const {item} = route.params;
    
    return (
        <View style = {styles.container}>

        <ImageBackground source = {item.img} style = {{flex:1, alignItems:'center', width:'100%'}} blurRadius = {10}>


            <View style = {styles.header}>
                <View style = {{width:'20%', height:'100%',justifyContent:'center'}}>
                    <TouchableOpacity onPress = {() => navigation.goBack()}>
                        <Ionicons name="chevron-back-sharp" size={32} color="white" />
                    </TouchableOpacity>
                </View>

                <View style = {{flexDirection:'row', width:'60%', alignItems:'center', justifyContent:'center', height:'100%'}}>
                    <Text style = {{color:'white', fontSize:24, fontWeight:'bold'}}>
                        Now Playing
                    </Text>
                    <Feather name="volume-2" size={26} color="white" style = {{paddingLeft:20}}/>
                </View>

                <View style = {{width:'20%', alignItems:'center', height:'100%', justifyContent:'center', paddingRight:15}}>
                   <SimpleLineIcons name="playlist" size={24} color="white" />
                </View>
            </View>


            <View style = {{width:'100%', height:'70%', alignItems:'center', elevation:20}}>
              
                <View style = {{elevation:20, height:305, width:305, backgroundColor:'black', alignItems:'center', justifyContent:'center', borderRadius:20}}>
                <Image source = {item.img} style = {{ width:300, height:300, borderColor:'black', borderRadius:20}}/>
                </View>

                <View style = {styles.songnamesec}>
                      <View>
                          <Text style = {{color:'white', fontSize:25, fontWeight:'bold'}}>
                              {item.name}
                          </Text>
                          <Text style = {{color:'white', fontSize:15, fontWeight:'bold'}}>
                              {item.artist}
                          </Text>
                      </View>
                <FontAwesome name="heart" size={24} color="white" />
              </View>


              <Slider
                  style={{width: '80%', height: 40, alignItems:'center', justifyContent:'center', marginTop:40}}
                  minimumValue={0}
                  maximumValue={1}
                  minimumTrackTintColor="#FFFFFF"
                  maximumTrackTintColor="#000000"
                  
              />

              <View style = {{flexDirection:'row', height:10, width:'80%', justifyContent:'space-between', alignItems:'center'}}>
                  <Text style = {{color:'white', fontSize:15}}>
                      0:00
                  </Text>

                  <Text style = {{color:'white', fontSize:15}}>
                      3:20
                  </Text>
              </View>

           </View>
{/*-------------------------------------------bootom navigator--------------------------------------------- */}
            <View
          style={{
            height: "20%",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            borderTopStartRadius: 30,
            borderTopEndRadius: 30,
            backgroundColor: "black",
            opacity: 0.8,
          }}
        >
{/*------------------------------------------------------Shuffle Icon--------------------------------------------------------------------------------------------------------- */}
         
              
                <View style={{width:'20%', alignItems:'center'}}>
                  <TouchableOpacity>
                  <MaterialIcons name="shuffle" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              
         
{/*------------------------------------------------------Playback Icon--------------------------------------------------------------------------------------------------------- */}
         
              <View style={{width:'20%', alignItems:'center'}}>
                <TouchableOpacity>
                  <Ionicons name="play-back" size={24} color="white" />
                </TouchableOpacity>
              </View>

{/*--------------------------------------------------Pause Icon------------------------------------------------------------------------- */}
          
              <View style={{width:'20%', alignItems:'center'}}>
                <TouchableOpacity style={styles.playpause} onPress = {play_pause} >
                  <Ionicons name={status} size={35} color="#434b56" />
                </TouchableOpacity>
              </View>

{/*---------------------------------------Playforward Icon------------------------------------------------------------------------- */}
         
              <View style={{width:'20%', alignItems:'center'}} >
                <TouchableOpacity>
                  <Ionicons name="ios-play-forward" size={24} color="white" />
                </TouchableOpacity>
              </View>

{/*------------------------------------------------Replay Icon------------------------------------------------------------------------- */}
         
              <View style={{width:'20%', alignItems:'center'}}>
                <TouchableOpacity>
                  <MaterialCommunityIcons name="replay" size={24} color="white" />
                </TouchableOpacity>
              </View>

        </View>
      </ImageBackground>
       
  </View>
    )
}

export default MusicPlayer

const styles = StyleSheet.create({

    container:{
        flex:1,
        paddingTop:30,
    },

    header:{
        width:'100%',
        height:"10%",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        
    },
    songnamesec:{
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        height:50,
        paddingHorizontal:20,
        marginTop:30,
        justifyContent:'space-between'
    },

  playpause: {
    height: 70,
    width: 70,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },


})
