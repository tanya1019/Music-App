import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Settings = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text>
                This is Setting Screen
            </Text>
        </View>
    )
}

export default Settings;

const styles = StyleSheet.create({
    container:{
        paddingTop:100,
        flex:1
    }
    
})

