import React, { Component } from 'react'
import { StyleSheet, Button, View, Text, Dimensions, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ListVC from '../Screens/Main Screens/ListVC';
import Header from '../Shared/Header'
import { MaterialIcons } from '@expo/vector-icons'
import GraphVC from '../Screens/Main Screens/GraphVC';

const buttonClickHandler = () => {

}
const Stack = createStackNavigator();

export default function homeNavigator() {
    return (
        <Stack.Navigator initialRouteName="List" screenOptions={{
            headerStyle: {
                backgroundColor: 'gray',
            },
            headerTintColor: '#fff',
        
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            options:{
                drawerIcon:()=>(
                    <Image 
                    source={require('../assets/WayBaseIcon.png')} />
                )
            }
        }}  >
            <Stack.Screen name="List"
                component={ListVC}
                options={({ navigation }) => {
                    return { headerTitle: () => <Header navigation={navigation} /> }
                }
                }

            />

            <Stack.Screen name="Graph"
                component={GraphVC}
            />
        </Stack.Navigator>

    );

}



const Styles = StyleSheet.create({

    HeaderStyle: {
        width: Dimensions.get('screen').width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    HeaderTextStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16
    }

});