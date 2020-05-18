import React from 'react'
import {View,Text, StyleSheet} from 'react-native'

export default function GraphVC({navigation}){

    return(
        <View style={Styles.MainViewStyle}>
            <Text> Inside Graph VC </Text>
        </View>
    )
}

const Styles = StyleSheet.create({

    MainViewStyle: {
        backgroundColor: 'gray',
        width : '100%',
        height :'100%'
        
    },
   

});