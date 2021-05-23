import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const LanguagePref = (props) => {
    return (

        <View style = {styles.container}>
{/*---------------------------------------------Header------------------------------------------------------------ */}
        
        <View style={styles.header}>

        <View style={{ width: "10%", justifyContent: "center", paddingLeft:5 }}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Settings")}>
            <Ionicons name="chevron-back" size={30} color="black" />
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

      <ScrollView style = {{width:'100%'}}>

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
    </View>
    )
}

export default LanguagePref

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        paddingTop:40
      },
      header: {
        backgroundColor: "yellow",
        width: "100%",
        height: 60,
        flexDirection: "row",
      },
      headertext: {
        fontSize: 22,
        fontWeight: "bold",
        color:'black'
      },

      lang:{
          width:'100%',
          height:40,
          backgroundColor:'black',
          justifyContent:'center'
      },

      langtext:{
          fontSize:18,
          color:'white',
          fontWeight:'600'
      }
})
