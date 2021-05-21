import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DownloadQuality from '../Settings/DownloadQuality';
import Eqalizer from '../Settings/Eqalizer';
import LanguagePref from '../Settings/LanguagePref';
import StreamingQuality from '../Settings/DownloadQuality';
import { Entypo } from 'react-native-vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Settings = (props) => {
    return (
        <View style = {styles.container}>
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
            <View>
            <Text style = {{color:'white', fontSize:20, fontWeight:'bold'}}>
                Language Preference
            </Text>
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
            <Text style = {{color:'white', fontSize:20, fontWeight:'bold', marginTop:30}}>
                Music Quality
            </Text>


           <TouchableOpacity onPress = {() => props.navigation.navigate('DownloadQuality')}>
           <View style = {styles.list}>
               <View style = {{width:'70%'}}>
               <Text style = {styles.text}>
                   Download Quality
               </Text>
               </View>
               <View style = {{flexDirection:'row', width:'30%', alignItems:'center', justifyContent:'center', paddingLeft:20}}>
               <MaterialCommunityIcons name="quality-high" size={36} color="black" />
               <MaterialCommunityIcons name="quality-high" size={36} color="black" />
               <MaterialCommunityIcons name="quality-high" size={36} color="black" />
               </View>
           </View>
           </TouchableOpacity>
           

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

        </View>
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
        fontSize:20,
        fontWeight:'bold',
        color:'#066EF5'
    },
    list:{
        height:50,
        width:'100%', 
        backgroundColor:'grey',
        flexDirection:'row',
        borderBottomWidth:2, 
        paddingLeft:10,
        alignItems:'center'
    }
    
})

