import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch} 
from "react-native-paper";
import {MaterialCommunityIcons,FontAwesome,Ionicons} from "react-native-vector-icons"; 
import { MaterialIcons } from '@expo/vector-icons';


export function DrawerContent(props) {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>

{/*-------------------------------------------ScrollView----------------------------------------------- */}
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
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
});

