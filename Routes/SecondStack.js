import React, { Component } from 'react'
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import GraphVC from '../Screens/Main Screens/GraphVC';
import Header from '../Shared/Header'



const Stack = createStackNavigator();

export default function aboutNavigator() {

        return (
                <Stack.Navigator initialRouteName="Graph" screenOptions={{
                    headerStyle: {
                        backgroundColor: 'gray',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}>
                    <Stack.Screen name="Graph" 
                    component={GraphVC} 
                    options = { ({ navigation })=>{
                        return { headerTitle: () => <Header  navigation = {navigation} /> }
                    }
                }
                    />


                </Stack.Navigator>

        );

}