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


const Settings = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    return (
        <View style = {styles.container}>
          
        {/*-----------------------------------------Header----------------------------------------------- */}
            <View style = {{flexDirection:'row'}}>
            <View style = {{width:'10%'}}>
                    <TouchableOpacity onPress = {() => props.navigation.openDrawer()}>
                        <Entypo name="menu" size={28} color="#066EF5" />
                    </TouchableOpacity>
            </View>

            <View style = {{ width : '80%',justifyContent:'center', alignItems: 'center', marginBottom:30}}>
                <Text style = {{color:'#066EF5', fontSize:24, fontWeight:'bold'}}>
                    Settings
                </Text>
            </View>
            </View>
    {/*-----------------------------------Language Preference Heading------------------------------------- */}
            <ScrollView style = {{width:'100%'}}>
            <View>
            <Text style = {{color:'white', fontSize:18, fontWeight:'bold'}}>
                Language Preference
            </Text>

        {/*--------------------------------Language Preference------------------------------------ */}
            <TouchableOpacity onPress = {() => props.navigation.navigate('LanguagePref')}>
           <View style = {styles.list}>
               <View style = {{justifyContent:'center'}}>
               <Text style = {styles.text}>
                  Language Preference
               </Text>
               </View>
               <View style = {{alignItems:'flex-end', width:'50%', justifyContent:'center', paddingRight:5}}>
               <FontAwesome5 name="language" size={24} color="black" />
               </View>  
           </View>
           </TouchableOpacity>
    {/*-----------------------------------------------Music Quality Header---------------------------------------------- */}
          
            <Text style = {{color:'white', fontSize:18, fontWeight:'bold', marginTop:30}}>
                Music Quality
            </Text>

    {/*---------------------------------------Download Quality-------------------------------- */}
           
           <View style = {styles.list}>
               <View style = {{width:'70%'}}>
               <Text style = {styles.text}>
                   Download Quality
               </Text>
               </View>
               <View style = {{flexDirection:'row', width:'30%', alignItems:'center', justifyContent:'center', paddingLeft:20}}>

               <TouchableOpacity>
               <MaterialCommunityIcons name="quality-high" size={36} color="black" />
               </TouchableOpacity>

               <TouchableOpacity>
               <MaterialCommunityIcons name="quality-high" size={36} color="black" />
               </TouchableOpacity>

               <TouchableOpacity>
               <MaterialCommunityIcons name="quality-high" size={36} color="black" />
               </TouchableOpacity>

               </View>
           </View>
    

    {/*--------------------------------------------------Streaming Quality------------------------------- */}
           

           <TouchableOpacity onPress = {() => props.navigation.navigate('StreamingQuality')}>
           <View style = {styles.list}>
           <View style = {{width:'70%'}}>
               <Text style = {styles.text}>
                   Streaming Quality
               </Text>
               </View>
               <View style = {{flexDirection:'row', width:'30%', alignItems:'center', justifyContent:'center', paddingLeft:20}}>
               <MaterialCommunityIcons name="quality-high" size={36} color="black" />
               <MaterialCommunityIcons name="quality-high" size={36} color="black" />
               <MaterialCommunityIcons name="quality-high" size={36} color="black" />
               </View>
           </View>
           </TouchableOpacity>

           <TouchableOpacity onPress = {() => props.navigation.navigate('Eqalizer')}>
           <View style = {styles.list}>
               <View style = {{width:'90%',justifyContent:'center', alignItems:'flex-start'}}>
               <Text style = {styles.text}>
                   Equalizer
               </Text>
               </View>
               <View  style = {{alignItems:'flex-end', width:'10%', justifyContent:'center', paddingRight:10}}>
               <MaterialIcons name="equalizer" size={24} color="black" />
               </View>
           </View>
           </TouchableOpacity>
 {/*---------------------------------------Data Usage------------------------------------------- */}
             <View style = {{flexDirection:'row', alignItems:"center"}} >
                <Text style = {styles.text}>
                    Data Usage
                </Text>

                <Text style ={{color:'grey', padding:5, marginTop:3, marginLeft:10}}>
                    219.8MB
                </Text>
            </View>
        {/*----------------------------------------Data Saver--------------------------------------------- */}
           
           <View style = {styles.list}>
               <View style = {{justifyContent:'center', width:"80%"}}>
               <Text style = {styles.text}>
                  Data saver
               </Text>
               <Text style ={{color:'black', fontSize:14 }}>
                Sets your music quality to low and disables artist canvases
               </Text>
               </View>
               <View style = {{alignItems:'flex-end', width:'20%', justifyContent:'center', paddingRight:5}}>
               <Switch
              trackColor={{ false: "#767577", true: "#066EF5" }}
              thumbColor={isEnabled ? "blue" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
               </View>
            </View>
         
        {/*--------------------------------------------------Data usage warning------------------------------ */}
          
           <View style = {styles.list}>
               <View style = {{justifyContent:'center', width:'80%'}}>
               <Text style = {styles.text}>
                  Data usage warning
               </Text>
               </View>
               <View style = {{alignItems:'flex-end', width:'20%', paddingRight:5 }}>
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

        
        {/*--------------------------------------Connect to Apps------------------------------ */}
           <Text style = {styles.text}>
               Connect to apps
           </Text>
        {/*-------------------------------------Navigation------------------------------------------- */}
           <TouchableOpacity onPress = {() => props.navigation.navigate('Navigation')}>
           <View style = {styles.list}>
               <View style = {{justifyContent:'center', width:"80%"}}>
               <Text style = {styles.text}>
                  Navigation
               </Text>
               <Text style ={{color:'black', fontSize:14 }}>
                Connect to navigation apps
               </Text>
               </View> 
               
               <View style = {{alignItems:'flex-end', width:'20%', justifyContent:'center', paddingRight:15}}>
               <Feather name="navigation" size={24} color="black" />
               </View>
            </View>
            </TouchableOpacity>
           </ScrollView>
        </View>
        
    )
}

export default Settings;

const styles = StyleSheet.create({

    container:{
        paddingTop:50,
        flex:1,
        backgroundColor:'black'
    },

    text:{
        fontSize:16,
        fontWeight:'bold',
        color:'#066EF5',
        padding:5
    },
    list:{
        height:60,
        width:'100%', 
        backgroundColor:'grey',
        flexDirection:'row',
        borderBottomWidth:2, 
        paddingLeft:10,
        alignItems:'center'
    }
    
})

