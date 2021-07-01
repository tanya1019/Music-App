import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const LanguagePref = (props) => {
    return (

        <LinearGradient style = {styles.container} colors = {['#202aa8', '#e92b81']}>
            
{/*---------------------------------------------Header------------------------------------------------------------ */}
        
        <View style={styles.header}>

        <View style={{ width: "10%", justifyContent: "center", paddingLeft:5 }}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Settings")}>
            <Ionicons name="chevron-back" size={30} color="white" />
          </TouchableOpacity>
        </View>

        <View style={{ width: "80%", alignItems: "center", justifyContent: "center" }} >
          <Text style={styles.headertext}>
              Set Language
          </Text>
         
        </View>

        <View style={{ width: "10%" }}></View>

      </View>

{/*--------------------------------------------ScrollView----------------------------------------------------------- */}

      <ScrollView style = {{width:'100%'}} contentContainerStyle = {{alignItems:'center'}}>

{/*--------------------------------------------Language Names----------------------------------------------------------- */}
          <View style = {styles.lang}>
              <Text style = {styles.langtext}>
                    English
              </Text>
          </View>

          <View style = {styles.lang}>
              <Text style = {styles.langtext}>
                    Hindi
              </Text>
          </View>

          <View style = {styles.lang}>
              <Text style = {styles.langtext}>
                    Marathi
              </Text>
          </View>

          <View style = {styles.lang}>
              <Text style = {styles.langtext}>
                    Punjabi
              </Text>
          </View>

          <View style = {styles.lang}>
              <Text style = {styles.langtext}>
                    Telegu
              </Text>
          </View>

          <View style = {styles.lang}>
              <Text style = {styles.langtext}>
                    Tamil
              </Text>
          </View>

          <View style = {styles.lang}>
              <Text style = {styles.langtext}>
                    Malayalam
              </Text>
          </View>

          <View style = {styles.lang}>
              <Text style = {styles.langtext}>
                    Kannada
              </Text>
          </View>

          <View style = {styles.lang}>
              <Text style = {styles.langtext}>
                    Gujarati
              </Text>
          </View>

          <View style = {styles.lang}>
              <Text style = {styles.langtext}>
                    Arabic
              </Text>
          </View>

          <View style = {styles.lang}>
              <Text style = {styles.langtext}>
                    German
              </Text>
          </View>

          <View style = {styles.lang}>
              <Text style = {styles.langtext}>
                    Urdu
              </Text>
          </View>

          <View style = {styles.lang}>
              <Text style = {styles.langtext}>
                    Bengali
              </Text>
          </View>

          <View style = {styles.lang}>
              <Text style = {styles.langtext}>
                    Kashmiri
              </Text>
          </View>

          <View style = {styles.lang}>
              <Text style = {styles.langtext}>
                    Oriya
              </Text>
          </View>

          <View style = {styles.lang}>
              <Text style = {styles.langtext}>
                    Nepali
              </Text>
          </View>

          <View style = {styles.lang}>
              <Text style = {styles.langtext}>
                    Manipuri
              </Text>
          </View>
{/*-------------------------------------------------Ends----------------------------------------------------------- */}
            </ScrollView>
    </LinearGradient>
    )
}

export default LanguagePref

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        paddingTop:40
      },
      
      header: {
        backgroundColor: "transparent",
        width: "100%",
        height: 60,
        flexDirection: "row",
        marginBottom:10,
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

      lang:{
          width:'90%',
          height:40,
          borderRadius:20,
          backgroundColor:'transparent',
          justifyContent:'center',
          alignItems:'center',
          marginVertical:5,
          borderBottomColor:'grey',
          borderBottomWidth:2,
          borderTopColor:'black',
          borderTopWidth:2, 
          borderLeftColor:'black',
          borderLeftWidth:2,
          borderRightColor:'grey',
          borderRightWidth:2  
      },

      langtext:{
          fontSize:24,
          color:'white',
          fontWeight:'bold'
      }
})
