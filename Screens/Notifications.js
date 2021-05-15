import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Notifications = () => {
    return (
        <View style = {styles.container}>
            <Text>
                Notifications Screen
            </Text>
        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({
    container:{
        paddingTop:100,
        flex:1
    }
    
})
