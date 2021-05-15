import React from 'react'
import { View, Text , StyleSheet, TouchableOpacity, TouchableOpacityComponent, TextInput, ScrollView} from 'react-native'
import { Entypo } from 'react-native-vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import MusicList from '../CustomList/MusicList'

const Home = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.header}>

                <View style = {{width:'10%'}}>
                    <TouchableOpacity onPress = {() => navigation.openDrawer()}>
                        <Entypo name="menu" size={24} color="black" />
                    </TouchableOpacity>
                </View>

               <View style = {{width:'80%', alignItems:'center'}}>
               <Text>
                    Header
                </Text>
               </View>

               <View style = {{width:'10%'}}>
               <FontAwesome name="search" size={24} color="black" />
               </View>
               </View>
               <View style = {styles.search}>
               <FontAwesome name="search" size={24} color="black" />
               <TextInput style = {{width:"90%", paddingLeft:5}} placeholder = 'Search' />
               </View>
               <ScrollView style = {{width:'100%'}}>
               <MusicList/>
               <MusicList/>
               <MusicList/>
               </ScrollView>

           
            <Text>
                This is Home Page
            </Text>
        </View>
    )
}

export default Home;
const styles = StyleSheet.create({
    container:{
        paddingTop:50,
        flex:1,
        alignItems:'center'
    },
    header:{
        width :"100%",
        height:50,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:"center",
        flexDirection:'row'
    }, 
    
    search:{
        flexDirection:'row',
        backgroundColor:'red',
        width: '70%',
        height: 30,
        paddingLeft:10,
        alignItems:'center',
        marginTop:10,
        borderRadius:20,
        marginBottom:10
    }

})
