import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import Chart1 from '../Charts/Chart1'
import Chart2 from '../Charts/Chart2'
import Chart3 from '../Charts/Chart3'

export default function GraphVC({ navigation }) {

    const bottomButtonHndler = () => {
        console.log("bottomButtonHndler");
        navigation.pop();
    }

    return (
        <View style={Styles.container}>

            <Chart1 />
            <Chart2 />
            <Chart3 />

            <TouchableOpacity style={{ backgroundColor: 'blue', color: 'white', flexDirection: 'row', width: 200, height: 40, alignSelf: 'center', justifyContent: 'center', marginBottom: 10, alignItems: 'center', position: 'absolute', bottom: 0 }}  >
                <Button color='white' title="Back to First Page" onPress={bottomButtonHndler} />
            </TouchableOpacity>

        </View>
    )
}

const Styles = StyleSheet.create({

    container: {
        backgroundColor: 'gray',
        width: '100%',
        height: '100%'

    },

});