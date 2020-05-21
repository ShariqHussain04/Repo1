import Config from '../Config/Config'
import {getData,postData} from './ServiceRequest'
// ******************************* API to fetch Movies ***************************************
export default async function fetchMovies(){
    console.log(Config.baseUrl);
    getData(Config.baseUrl).then(data => {
        console.log('Print' + JSON.stringify(data));
        // this.setState({
        //     isLoading: false,
        //     dataArr: data.movies
        // });

        return  data.movies;
    }, error => {

        // this.setState({
        //     isLoading: false
        // })
        Alert.alert('Error', 'Something went wrong!');
        console.log(error);
        return null;
      }
    )
}

// ******************************* API to fetch Names ***************************************