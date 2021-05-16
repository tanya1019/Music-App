import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Account = () => {
    return (
        <View style = {styles.container}>
            
             <View>
                <Ionicons name="arrow-back" size={24} color="black" />
            </View>

            <View style = {{justifyContent:'center', alignItems: 'center'}}>
                <Text>
                    This is account section
                </Text>
            </View>

        </View>
            
    )
}

export default Account

const styles = StyleSheet.create({

    container:{
        paddingTop:50,
        flex:1
    }
    
})
