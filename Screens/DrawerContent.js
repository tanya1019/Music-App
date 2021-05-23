import React from "react";
import { View, StyleSheet, TouchableOpacity , Alert} from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch} 
from "react-native-paper";
import {MaterialCommunityIcons,FontAwesome,Ionicons} from "react-native-vector-icons"; 
import { MaterialIcons } from '@expo/vector-icons';
import {ProgressBar, color} from 'react-native-paper';


export function DrawerContent(props) {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>

{/*-------------------------------------------Drawer content----------------------------------------------- */}
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
{/*------------------------------------------User info----------------------------------------------- */}
          <View style={styles.userinfo}>
            <TouchableOpacity activeOpacity = {0.5} onPress = {() => props.navigation.navigate('Account')}>
            <View style={{ flexDirection: "row" }}>
              <Avatar.Image
                source={{
                  uri: "https://i.pinimg.com/originals/75/51/e5/7551e5bde057bdc8707baf5bb63d2550.jpg",
                }}
                size={60}
              />
              <View style={{ marginLeft: 10 }}>
                <Title style={{ color: "#066EF5", fontWeight:'bold' }}>Tanya Thakur</Title>
                <Caption style={{ fontSize: 15, color: "grey" }}>
                  @tanya__1019
                </Caption>
              </View>
            </View>
            </TouchableOpacity>
          </View>
{/*----------------------------------------------Drawer Section-----------------------------------------------*/}
          <Drawer.Section style={styles.section}>

{/*-------------------------------------------Music----------------------------------------------- */}
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="musical-notes" color="#066EF5" size={size} />
              )}
              label={() => (
                <Text style = {{color:'#066EF5'}}>
                  Music
                </Text>
              )}
              activeBackgroundColor="#066EF5"
              pressColor="yellow"
              style={{}}
              onPress={() => {
                props.navigation.navigate("Home");
              }}
             />

{/*-------------------------------------------Settings----------------------------------------------- */}
          
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="notifications" color="#066EF5" size={size} />
              )}
              label={() => (
                <Text style = {{color:'#066EF5'}}>
                  Settings
                </Text>
              )}
              pressColor="yellow"
              style={{}}
              onPress={() => {
                props.navigation.navigate("Settings");
              }}
            />

{/*------------------------------------------Storage----------------------------------------------- */}
          
          <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons name="storage" size={24} color="#066EF5" />
              )}
              label={() => (
                <Text style = {{color:'#066EF5'}}>
                  Storage
                </Text>
              )}
              pressColor="yellow"
              style={{}}
              onPress={() => {}}
            />

          <ProgressBar progress = {0.2} color = {'#066EF5'} style = {{width :'70%', marginLeft:10}}/>
         
         <View style = {{flexDirection:'row'}}>
            <Text style = {{color:'#066EF5', marginLeft:15, fontSize:12}}>
                24.3GB
              </Text>

              <Text style = {{color:'#066EF5', marginLeft:85, fontSize:12}}>
                101.7GB
              </Text>
        </View>

{/*---------------------------------------ClearCache---------------------------------------- */}

        <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="broom" color="#066EF5" size={size} />
              )}
              label={() => (
                <Text style = {{color:'#066EF5'}}>
                  Clear Cache
                </Text>
              )}
              pressColor="yellow"
              style={{}}
              onPress={() => {
                Alert.alert('Cleared Cache')
              }}
            />


 {/*-------------------------------------------End----------------------------------------------- */}
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
     
    </View>
  );
}

{/*------------------------------------------Styles-----------------------------------------------------*/}
const styles = StyleSheet.create({
  drawerContent: {
    padding: 10,
  },
  userinfo: {
    flexDirection: "row",
  },
  section: {
    paddingTop: 220,
  },
  bottomDrawer: {
    marginBottom: 15,
  },

  cache:{
    height:40,
    width:150,
    marginLeft:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    marginTop:30,
    backgroundColor:'#066EF5'
    
  }
});

