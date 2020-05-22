import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

export default class MyActivityIndicator extends Component {

    render()
    {
        return(
            <View style={{ flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator animating='true' color="#gray" />
            <Text style={{ marginTop: 10 }} children="Please Wait.." />
             </View>
        );
    }
   
}