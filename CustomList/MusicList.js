import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';  
import { Fontisto, AntDesign } from '@expo/vector-icons'; 

const MusicList = ({Music, Detail}) => {
    return (
        <View style = {styles.container}>
            
            <View style={{ width: "90%", flexDirection: "row" }}>
                <View style = {{width:'10%'}}>
              <AntDesign name="heart" size={24} />
              </View>
        <View style={{width:'90%'}}>
          <Text style={{ fontWeight: "700", fontSize: 17, color:'white' }}>{Music}</Text>
          <Text style={{ color: "yellow" }}>{Detail}</Text>
        </View>
      </View>

      <View style={{ width: "10%", alignItems: "flex-end" }}>
        <AntDesign name="heart" size={24} />
      </View>
    
        </View>
    )
}

export default MusicList

const styles = StyleSheet.create({

    container:{
        height:50,
        width:'100%',
        backgroundColor:'#111111',
        borderBottomWidth:0.7,
        flexDirection:'row',
        alignItems:'center',
        
        
    }

})
