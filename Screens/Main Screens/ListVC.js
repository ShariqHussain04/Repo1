import React,{useState, useEffect} from 'react'
import {View, Text, Button, TouchableOpacity, StyleSheet, Alert} from 'react-native'
import {fetchMovies,fetchCountriesData} from '../../Service/RequestHandler'
import MyActivityIndicator from '../../HelperComponents/MyActivityIndicator'

export default function ListVC({ navigation }){
   
const [isLoading,setisLoading] = useState(false)

useEffect(()=>{ 
    console.log("useEffect called")
    setisLoading(true)
    fetchCountriesData();
   // hitFetchMoviesApi();

  },[])

  function hitFetchMoviesApi(){
   
         fetchMovies().then(data => {
            console.log('Shariq' + JSON.stringify(data));
            setisLoading(false);

            // Use Data from here
            return  data.movies;
        }, error => {
    
            setisLoading(false);
            Alert.alert('Error', 'Something went wrong!');
            console.log(error);
            
          }
        );
   
    
  }

    const buttonActionHandler = ()=>{
        navigation.push('Graph')
    }

    
    return(
        isLoading ? <MyActivityIndicator /> : <View style={Styles.MainViewStyle}>
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