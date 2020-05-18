import React from 'react'
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native'

export default function ListVC({ navigation }){
   

    const buttonActionHandler = ()=>{
console.log('buttonActionHandler');

        navigation.push('Graph')
    }

    return(
        <View style={Styles.MainViewStyle}>
            <Text>Inside List VC</Text>

            <TouchableOpacity style={{ backgroundColor: 'red', color: 'white' }} >
                    <Button color='white' title="Go to Second Page "  onPress={buttonActionHandler} />
                </TouchableOpacity>
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