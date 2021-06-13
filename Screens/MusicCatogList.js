import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, FlatList, ImageBackground, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const MusicCatogList = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
     {/*} {item.list.map((item) => (
          <View key = {item.id}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MusicPlayer", { item })}
        >
          <Text>{item.name}</Text>
        </TouchableOpacity>
        </View>
     ))} */}


     <ImageBackground source = {item.img} style = {{flex:1,alignItems:'center', opacity: 0.8}} blurRadius= {3}>
     
     <View style = {{height:'20%', width:'100%', alignItems:'center', paddingTop:20, justifyContent:'center', flexDirection:'row'}}>
       
       <View style = {{width:'10%', alignItems:'center'}}>
         <TouchableOpacity onPress = {() => navigation.navigate('Home')}>
       <Ionicons name="chevron-back" size={40} color="white" />
       </TouchableOpacity>
       </View>
       <View style = {{width:'90%', alignItems:'center'}}>
         <Text style = {{ color:'white', fontSize:50, fontWeight:'bold', paddingVertical:0}}>
            {item.name}
        </Text>
        </View>
     </View>

     <View style = {styles.songbg}>

       <FlatList
        data={item.list}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("MusicPlayer", { item })}
              style={styles.list}
            >
              <View
                style={{
                  flexDirection: "row",
                  height: "100%",
                  width: "80%",
                  alignItems: "center",
                }}
              >
                {/* Icon */}
                <View style={{ justifyContent: "center", padding: 10 }}>
                    <Image source = {item.img} style = {{height:50, width:50}}/>
                </View>
                <View style={{ height: "100%", justifyContent: "center" }}>
                  <Text style={{ fontSize: 17, fontWeight: "700", color:'white' }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "600",
                      color: "yellow",
                    }}
                  >
                    {item.artist}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "20%",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  paddingRight: 15,
                }}
              ></View>
            </TouchableOpacity>
          );
        }}
      />

      </View>
      
      </ImageBackground>













    </View>
  );
};

export default MusicCatogList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'space-between',
    backgroundColor: "black",
    paddingTop:40
  },
  list: {
    flexDirection: "row",
    height: 60,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(150,150,150,0.2)",
    borderBottomColor: "black",
    borderBottomWidth: 0.8,
    marginVertical:5,
    borderBottomWidth:1,
    borderTopWidth:1,
    borderBottomColor:'black',
    borderTopColor:'grey'
    
  },
  songbg:{
    opacity:1,
    
    height:'80%',
    padding:10,
    
  }
});