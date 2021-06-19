import React , {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View , Switch, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DownloadQuality from '../Settings/DownloadQuality';
import Eqalizer from '../Settings/Eqalizer';
import LanguagePref from '../Settings/LanguagePref';
import StreamingQuality from '../Settings/DownloadQuality';
import { Entypo } from 'react-native-vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'



const Settings = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    return (

        <LinearGradient style = {styles.container} colors = {['#202aa8', '#e92b81']}>
          
{/*---------------------------------------------------Header---------------------------------------------------------- */}
            
            <View style = {styles.header}>
                
                <View style = {{width:'10%'}}>
                        <TouchableOpacity onPress = {() => props.navigation.openDrawer()}>
                            <Entypo name="menu" size={28} color="white" />
                        </TouchableOpacity>
                </View>

                <View style = {{ width : '80%',justifyContent:'center', alignItems: 'center'}}>
                    <Text style = {{color:'white', fontSize:24, fontWeight:'bold',}}>
                        Settings
                    </Text>
                </View>
            </View>

{/*------------------------------------------Language Settings Heading-------------------------------------------- */}
            <ScrollView style = {{width:'100%'}}>

            <View style = {{marginTop:10}}>
                <Text style = {{color:'white', fontSize:20, fontWeight:'bold', marginBottom:10}}>
                    Language Settings
                </Text>
            </View>

{/*----------------------------------------------Language Preference---------------------------------------------------- */}
            
            <TouchableOpacity onPress = {() => props.navigation.navigate('LanguagePref')} >
                <View style = {styles.list}>
                    <View style = {{justifyContent:'center', width:'80%'}}>
                        <Text style = {styles.text}>
                            Language Preference
                        </Text>
                        <Text style ={{color:'pink', fontSize:14 }}>
                            Set your language
                         </Text>
                    </View>
                    <View style = {{alignItems:'flex-end', width:'20%', justifyContent:'center', paddingRight:10}}>
                        <FontAwesome5 name="language" size={26} color="pink" />
                    </View>  
                </View>
           </TouchableOpacity>

{/*-----------------------------------------------Music Quality Header---------------------------------------------- */}
          
            <Text style = {{color:'white', fontSize:20, fontWeight:'bold', marginTop:10, marginBottom:10}}>
                Music Quality
            </Text>

{/*-------------------------------------------------Download Quality------------------------------------------------- */}
           
           <View style = {styles.list}>
               <View style = {{width:'80%'}}>
               <Text style = {styles.text}>
                   Download Quality
               </Text>
               <Text style ={{color:'pink', fontSize:14 }}>
                     Set your download quality
                </Text>
               </View>
               <View style = {{flexDirection:'row', width:'20%', alignItems:'center', justifyContent:'center', paddingRight:40}}>

               <TouchableOpacity>
               <MaterialCommunityIcons name="quality-high" size={36} color="pink" />
               </TouchableOpacity>

               <TouchableOpacity>
               <MaterialCommunityIcons name="quality-high" size={36} color='#e92b81' />
               </TouchableOpacity>

               <TouchableOpacity>
               <MaterialCommunityIcons name="quality-high" size={36} color="pink" />
               </TouchableOpacity>

               </View>
           </View>
    
{/*--------------------------------------------------Streaming Quality------------------------------------------------- */}
           
           <View style = {styles.list}>
             <View style = {{width:'70%'}}>
               <Text style = {styles.text}>
                   Streaming Quality
               </Text>
               <Text style ={{color:'pink', fontSize:14 }}>
                     Set your straming quality
                 </Text>
            </View>

            <View style = {{flexDirection:'row', width:'30%', alignItems:'center', justifyContent:'center'}}>
               
               <TouchableOpacity >
               <MaterialCommunityIcons name="quality-high" size={36} color='#e92b81' />
               </TouchableOpacity>

               <TouchableOpacity>
               <MaterialCommunityIcons name="quality-high" size={36} color="pink" />
               </TouchableOpacity>

               <TouchableOpacity>
               <MaterialCommunityIcons name="quality-high" size={36} color="pink" />
               </TouchableOpacity>

               </View>
           </View>
           
{/*---------------------------------------------------------Equalizer-------------------------------------------------------- */}
          
           <TouchableOpacity onPress = {() => props.navigation.navigate('Eqalizer')} style = {styles.touch} >
           <View style = {styles.list}>
               <View style = {{width:'90%',justifyContent:'center', alignItems:'flex-start'}}>
                    <Text style = {styles.text}>
                        Equalizer
                    </Text>
                    <Text style ={{color:'pink', fontSize:14 }}>
                        Manipulate frequency
                    </Text>
               </View>

               <View  style = {{alignItems:'flex-end', width:'10%', justifyContent:'center', paddingRight:20}}>
                    <MaterialIcons name="equalizer" size={24} color="pink" />
               </View>

           </View>
           </TouchableOpacity>

{/*----------------------------------------------------------Data Usage------------------------------------------------------ */}
            
             <View style = {{ flexDirection:'row', marginTop:10, marginBottom:10, alignItems:'center' }}>
                 
                <Text style = {{color:'white', fontSize:20}}>
                    Data Usage
                </Text>

                <Text style ={{color:'pink', padding:5, marginTop:3, marginLeft:10}}>
                    219.8MB
                </Text>

            </View>

{/*-------------------------------------------------------Data Saver------------------------------------------------------- */}
           
           <View style = {styles.list}>

               <View style = {{justifyContent:'center', width:"80%"}}>
                    <Text style = {styles.text}>
                        Data saver
                    </Text>

                    <Text style ={{color:'pink', fontSize:14 }}>
                        Sets your music quality to low and disables artist canvases
                    </Text>
               </View>

               <View style = {{alignItems:'flex-end', width:'20%', justifyContent:'center', paddingRight:5}}>
                    <Switch
                    trackColor={{ false: "pink", true: "'#202aa8'" }}
                    thumbColor={isEnabled ? '#202aa8' : 'white'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    />
               </View>
          </View>
         
{/*--------------------------------------------------Data usage warning------------------------------------------------ */}
          
           <View style = {styles.list}>

               <View style = {{justifyContent:'center', width:'80%'}}>
                    <Text style = {styles.text}>
                        Data usage warning
                    </Text>
                    <Text style ={{color:'pink', fontSize:14 }}>
                        Warns about excess data usage
                    </Text>
               </View>

               <View style = {{alignItems:'flex-end', width:'20%', paddingRight:5 }}>
                    <Switch
                    trackColor={{ false: "pink", true: "'#202aa8'" }}
                    thumbColor={isEnabled ? '#202aa8' : 'white'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    />
               </View>
               
           </View>

{/*-----------------------------------------------Connect to Apps--------------------------------------------------- */}
           
            <View>
                <Text style = {{color:'white', fontSize:20, fontWeight:'bold', marginBottom:10, marginTop:10}}>
                    Connect
                </Text>
            </View>

{/*---------------------------------------------------Navigation---------------------------------------------------- */}
          
          <TouchableOpacity onPress = {() => props.navigation.navigate('Navigation')} style = {styles.touch}>
                <View style = {styles.list}>
                        <View style = {{justifyContent:'center', width:"80%"}}>
                            <Text style = {styles.text}>
                                Navigation
                            </Text>

                            <Text style ={{color:'pink', fontSize:14 }}>
                                Connect to navigation apps
                            </Text>
                        </View> 
                    
                    <View style = {{alignItems:'flex-end', width:'20%', justifyContent:'center', paddingRight:20}}>
                        <Feather name="navigation" size={24} color="pink" />
                    </View>

                </View>
            </TouchableOpacity>

{/**------------------------------------------------------Car mode------------------------------------------------------------------- */}
         
        <View style = {styles.list}>

        <View style = {{justifyContent:'center', width:"80%"}}>
            <Text style = {styles.text}>
                Car Mode
            </Text>

            <Text style ={{color:'pink', fontSize:14 }}>
               Turns on your Auto Play
            </Text>
        </View>

        <View style = {{alignItems:'flex-end', width:'20%', justifyContent:'center', paddingRight:5}}>
            <Switch
            trackColor={{ false: "pink", true: "'#202aa8'" }}
                    thumbColor={isEnabled ? '#202aa8' : 'white'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
            />
        </View>
        </View>

{/*---------------------------------------------------------------Sleep Mode------------------------------------------- */}
       
        <View style = {styles.list}>

                <View style = {{justifyContent:'center', width:"80%"}}>
                    <Text style = {styles.text}>
                        Sleep Mode
                    </Text>

                    <Text style ={{color:'pink', fontSize:14 }}>
                        Set timer for your music
                    </Text>
                </View>

                <View style = {{alignItems:'flex-end', width:'20%', justifyContent:'center', paddingRight:5}}>
                    <Switch
                    trackColor={{ false: "pink", true: "'#202aa8'" }}
                    thumbColor={isEnabled ? '#202aa8' : 'white'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    />
                    <Text style = {{color:'pink', paddingRight:5}}>
                        10 min
                    </Text>
                </View>
                </View>
                
{/*-----------------------------------------------------Help and support--------------------------------- */}

            <View>
                <Text style = {{color:'white', fontSize:18, fontWeight:'bold', marginTop:10, marginBottom:10}}>
                   Help And Support
                </Text>
            </View>
{/*--------------------------------------------------Customer Support-------------------------------------- */}
        <TouchableOpacity onPress = {() => props.navigation.navigate('CustomerSupport')} style = {styles.touch}>
           <View style = {styles.list}>
               <View style = {{width:'90%',justifyContent:'center', alignItems:'flex-start'}}>
                    <Text style = {styles.text}>
                        Customer Support
                    </Text>
                    <Text style ={{color:'pink', fontSize:14 }}>
                         Contact us
                    </Text>
               </View>

               <View  style = {{alignItems:'flex-end', width:'10%', justifyContent:'center', paddingRight:10}}>
               <AntDesign name="customerservice" size={28} color="pink" />
               </View>

           </View>
           </TouchableOpacity>

{/*----------------------------------------------Updates------------------------------------------ */}
       
        <TouchableOpacity onPress = {() => props.navigation.navigate('Updates')} style = {styles.touch}>

           <View style = {styles.list}>
               
               <View style = {{width:'90%',justifyContent:'center', alignItems:'flex-start'}}>
                    <Text style = {styles.text}>
                        Updates
                    </Text>
                    <Text style ={{color:'pink', fontSize:14 }}>
                         Check for updates
                    </Text>
               </View>

               <View  style = {{alignItems:'flex-end', width:'10%', justifyContent:'center', paddingRight:10}}>
                    <MaterialIcons name="update" size={28} color="pink" />
               </View>
           </View>
        </TouchableOpacity>

{/*-------------------------------------------------------End------------------------------------------- */}
         
           </ScrollView>
        </LinearGradient>
        
    )
}

export default Settings;

const styles = StyleSheet.create({

    container:{
        paddingTop:50,
        flex:1,
        backgroundColor:'transparent'
    },
    
    header:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor:'grey',
        borderBottomWidth:1,
        borderTopColor:'black',
        borderTopWidth:1,
        height:60,
        padding:5
    },

    text:{
        fontSize:16,
        fontWeight:'bold',
        color:'white',       
    },

    list: {
        height:65,
        width:'100%', 
        backgroundColor:'transparent',
        flexDirection:'row',
        paddingLeft:10,
        alignItems:'center',
        borderBottomColor:'grey', 
        borderBottomWidth:1, 
        borderTopColor:'black', 
        borderTopWidth:1,
        
    },

    touch:{
        borderBottomColor:'black', 
        borderBottomWidth:1, 
        borderTopColor:'grey', 
        borderTopWidth:1,
        
    },

})

