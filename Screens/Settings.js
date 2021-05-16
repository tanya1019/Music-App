import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Settings = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <View>
                <Ionicons name="arrow-back" size={24} color="black" />
            </View>

            <View style = {{justifyContent:'center', alignItems: 'center'}}>
                <Text>
                    This is Settings Screen
                </Text>
            </View>

        </View>
    )
}

export default Settings;

const styles = StyleSheet.create({

    container:{
        paddingTop:50,
        flex:1
    }
    
})

