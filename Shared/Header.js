import React from 'react'
import {StyleSheet,View,Text,Dimensions} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

export default function Header({navigation}){

    const buttonClickHandler = ()=>{

        navigation.openDrawer();
    }

    return(
        <View style={Styles.HeaderStyle}>
            <MaterialIcons name='menu' size={28} color='white' onPress={buttonClickHandler} style={Styles.icon} />
          <Text style={Styles.HeaderTextStyle}>WayBase</Text>
      </View>
    );
}

const Styles = StyleSheet.create({

    HeaderStyle : {
        width:Dimensions.get('screen').width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : 'gray',
        height: '100%'
    },
    HeaderTextStyle :{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        letterSpacing: 1,
    },
    icon :{
        position : 'absolute',
        left:16
    }
});