import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Animated, Button } from 'react-native'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'





export default function DrawerContent(props) {

    const [arrowButtonDown, setArrowButtonDown] = useState(true)

    const arrowPressHandler = (arrowButtonDown) => {

        arrowButtonDown ? setArrowButtonDown(false) : setArrowButtonDown(true);
    }

    const closeButtonHandler = () => {
        console.log('closeButtonHandler');
        props.navigation.closeDrawer();
    }

    function TopView({ props }) {
        return (
            <View>
                <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                    {/* First View */}
                    <View>
                        <Text style={{ color: 'white', fontSize: 20 }}>WayBase</Text>
                    </View>
                    <TouchableHighlight style={Styles.topHeaderStyle} onPress={() => props.navigation.closeDrawer()} >
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }} >X</Text>
                    </TouchableHighlight>
                </View>

                <View style={Styles.InsightViewStyle}>
                    <Text style={{ color: 'blue', fontSize: 15, paddingTop: 10 }}>Insight</Text>
                    <TouchableOpacity style={{ backgroundColor: 'red', width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }} onPress={arrowPressHandler} >
                        <Image source={require('../assets/downArr.png')} style={{ width: 30, height: 30, backgroundColor: 'transparent', transform: [{ rotate: '180deg' }] }} />
                    </TouchableOpacity>
                </View>

                {/* Second View */}
                <TextAreaItems />

                <DrawerListItems props={props} />
            </View>
        );

        function TextAreaItems() {
            return (
                <View>
                    {/* Second View */}
                    <Text style={{ color: 'white', padding: 10, fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
                </View>

            );
        }
        function DrawerListItems({ props }) {
            return (
                <DrawerItemList {...props} />
            );
        }

    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView style={{ backgroundColor: 'darkgray' }} {...props}>
                <TopView props={props} />

                {/* <DrawerItem label="Help" onPress={() => alert('Link to help')} /> */}


            </DrawerContentScrollView>

            <View style={{ flexDirection: 'row', width: 100, height: 50, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 0 }}>
                <TouchableOpacity style={{ backgroundColor: 'green', color: 'white' }} onPress={closeButtonHandler} >
                    <Button color='white' title="Upgrade" />
                </TouchableOpacity>
            </View>


        </View>


    )
}

const Styles = StyleSheet.create({

    topHeaderStyle: {
        backgroundColor: 'transparent',
        fontSize: 50,
        fontWeight: '500',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    InsightViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    }


});