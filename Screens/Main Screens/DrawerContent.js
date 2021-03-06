import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Animated, Button } from 'react-native'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'

export default function DrawerContent(props) {

    const [hidden, setHidden] = useState(false)

    const arrowPressHandler = () => {
        hidden ? setHidden(false) : setHidden(true);
    }

    const closeButtonHandler = () => {
        console.log('closeButtonHandler');
        props.navigation.closeDrawer();
    }

    function TopView({ props }) {
        return (
            <View>
                <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>

                    {/* Firs
                    t View */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                        <Image
                            style={{ width: 30, height: 30 }}
                            source={require('../../assets/WayBaseIcon.png')} />
                        <Text style={{ color: 'white', fontSize: 20, padding: 10 }}>WayBase</Text>
                    </View>
                    <TouchableHighlight style={Styles.topHeaderStyle} onPress={() => props.navigation.closeDrawer()} >
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }} >X</Text>
                    </TouchableHighlight>
                </View>

                {/* Second View */}
                <InsightView />

                {/* Third View */}
                {hidden ?  null : <TextAreaItems /> }

                {/* Fourth View */}
                {hidden ? null : <DrawerListItems props={props} /> }

            </View>
        )
    }

    function InsightView() {
        return (
            <View style={Styles.InsightViewStyle}>
                <Text style={{ color: 'blue', fontSize: 15, paddingTop: 10 }}>Insight</Text>
                <TouchableOpacity style={{ backgroundColor: 'transparent', width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }} onPress={arrowPressHandler} >
                    <Ionicons name={hidden ? "ios-arrow-down" : "ios-arrow-up"} size={24} color="white" style={{ backgroundColor: 'transparent' }} />
                </TouchableOpacity>
            </View>
        )

    }

    function TextAreaItems() {
        return (
            <View>
                {/* Third View */}
                <Text style={{ color: 'white', padding: 10, fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
            </View>

        );
    }
    function DrawerListItems({ props }) {
        return (
            <View style={{ borderRadius: 10 }}>
                <View style={{ backgroundColor: 'transparent' }}>

                    <DrawerItem
                        label="Page One"
                        icon={() => (<Image
                            style={{ width: 35, height: 35 }}
                            source={require('../../assets/WayBaseIcon.png')} />)}

                        onPress={() => {
                            props.navigation.navigate('Home')
                        }}

                    />

                </View>

                <View style={{ backgroundColor: 'transparent' }}>
                    <DrawerItem
                        label="Page Two"
                        icon={() => (<Image
                            style={{ width: 35, height: 35 }}
                            source={require('../../assets/WayBaseIcon.png')} />)}

                        onPress={() => {
                            props.navigation.navigate('About')
                        }}
                    />
                </View>


            </View>

        );
    }

return (

    <View style={{ flex: 1 }}>
        <DrawerContentScrollView style={{ backgroundColor: 'darkgray' }} {...props}>
            <TopView props={props} />

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