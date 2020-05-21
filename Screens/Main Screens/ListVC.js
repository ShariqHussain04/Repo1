import React,{useState, useEffect} from 'react'
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native'
import fetchMovies from '../../Service/RequestHandler'

export default function ListVC({ navigation }){
   
const [isLoading,setisLoading] = useState(false)

useEffect(()=>{ 
    console.log("useEffect called")
    hitFetchMoviesApi();
  },[])

 async function hitFetchMoviesApi(){
      setisLoading(true)
    let response =  await fetchMovies();
    console.log('test'+response);
  }

    const buttonActionHandler = ()=>{
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