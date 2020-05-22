import Config from '../Config/Config'
import {getData,postData} from './ServiceRequest'
// ******************************* API to fetch Movies ***************************************
export  async function fetchMovies(){
    console.log(Config.baseUrl);
// try {
//     console.log("fetch movies");
//     getData(Config.baseUrl).then(data => {
//         console.log('Printi' + JSON.stringify(data));
//         // this.setState({
//         //     isLoading: false,
//         //     dataArr: data.movies
//         // });

//         return  data.movies;
//     }, error => {
//         // this.setState({
//         //     isLoading: false
//         // })
//         Alert.alert('Error', 'Something went wrong!');
//         console.log(error);
//         throw error;
//       }
//     )
// } catch (error) {
//     throw error;
// }

return getData(Config.baseUrl);

    
}

// const getCountriesDataQuery = () => {
//       const countryNames = ["India", "China", "Canada"];
//       return `
//         query { Country (filter: {name_in:${countryNames}) {
//             _id,
//             name,
//             population,
//             populationDensity           
//           }
//         }
//       `
//     }

function getQuery() {
     return `{Country{
         _id,
         name,
         population,
         populationDensity
     }}`
    
}

export  async function fetchCountriesData(){
    console.log(Config.baseUrl);
    const query =  getQuery();
    console.log('Fetch Countries ----->>>',query);
	//const gglDataQuery = gql`${query}`;
    
	//we can have 2 approach 
	//approach 1 - using ApolloClient
//	const client = new ApolloClient({ uri: 'https://countries-274616.ew.r.appspot.com/' });
	//to do
	
	//Approach 2 - post json
	const postJsonData = {"query" : query};
	const url = 'https://countries-274616.ew.r.appspot.com/';
    postData(url,postJsonData).then(data => {
        console.log('Print' + JSON.stringify(data));
        // this.setState({
        //     isLoading: false,
        //     dataArr: data.movies
        // });
        return  data.data;
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