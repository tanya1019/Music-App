import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity, TextInput, ScrollView} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import MusicList from '../CustomList/MusicList';
import Offline from '../CustomList/Offline';

const MyMusic = ({navigation}) => {
    return (
        <View style = {styles.container}>

{/*----------------------Header Section--------------------------- */}
        <View style = {styles.header}>
        <View style = {{width:'10%'}}>
            <TouchableOpacity onPress = {() => navigation.navigate('Home')}>
                <Ionicons name="arrow-back" size={30} color="#066EF5" />
            </TouchableOpacity>
        </View>
        <View style = {{width:'80%', paddingLeft:70}}>
            <Text style = {{color:'#066EF5', fontSize:20}}>
                    This is MyMusic Page
            </Text>
        </View>
        </View>

{/*----------------------------------Search----------------------------------------------- */}
        <View style = {styles.search}>
            <View style = {{width:'90%' , flexDirection:'row', alignItems:'center'}}>
                 <FontAwesome name="search" size={18} color="grey" />
                 <TextInput style = {{width:"90%", paddingLeft:5}} placeholder = 'Search' />
            </View>                   
                <Feather name="mic" size={18} color="grey" />
        </View>
{/*---------------------------------Music List------------------------------------------------- */}
       
        <View style = {{width:'10%'}}>
           
        </View>
        <View style = {{width:'80%'}}>
        <Offline MyMusic = 'Shake It Off' MyDetail = 'Taylor Swift' />
        </View>
        </View>
       
        
   
   
    
    )
}

export default MyMusic

const styles = StyleSheet.create({

    container:{
        paddingTop:50,
        flex:1,
        backgroundColor:'red'
    },
    header:{
        backgroundColor:'black',
        height:50,
        alignItems:'center',
        flexDirection:'row'   
    },

    search:{
        flexDirection:'row',
        backgroundColor:'white',
        width: '80%',
        height: 30,
        paddingLeft:10,
        alignItems:'center',
        marginTop:10,
        marginLeft:45,
        borderRadius:20,
        marginBottom:10,
        alignItems:'center',    
    }

    

})
