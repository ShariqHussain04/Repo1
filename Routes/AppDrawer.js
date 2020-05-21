import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import aboutNavigator from './SecondStack';
import homeNavigator from './HomeStack';
import DrawerContent from '../Screens/Main Screens/DrawerContent'

const Drawer = createDrawerNavigator();
 
export default function drawerNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" drawerContent = {props=><DrawerContent {...props} />} >
                <Drawer.Screen name="Home" component={homeNavigator} />
                <Drawer.Screen name="About" component={aboutNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}