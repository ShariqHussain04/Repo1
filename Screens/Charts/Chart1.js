import React from 'react';
import {View,Text,StyleSheet,Dimensions} from 'react-native';
import {
    LineChart
   
} from "react-native-chart-kit";

const Chart1 = props =>{
    return (
        <View style={styles.container}>
                <Text style={styles.text}> Graph one - Chart1</Text>
                <LineChart
                    data={{
                        labels: ["2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029","2030","2031","2032"],
                        datasets: [
                            {
                                data: [
                                    1,15,5,10,4,1.5,12,8,11,3
                    
                                ],
                               
                                color: (opacity = 0) => `rgba(210,110,190,1)`,
                                
                            },
                            {
                                data: [
                                    6,12,7,8.5,6.5,6,10,8.5,10,5
                    
                                ],
                                color: (opacity = 1) => `rgba(190,168,27, 1)`,
                            }                                                       
                        ]
                    }}
                    width={Dimensions.get("window").width-20} // from react-native
                    height={Dimensions.get("screen").height/3-100}
                    withDots={false} //set true to show dots on the curve line.
                    withShadow={false}//set true to shadow for curve line.
                    withHorizontalInnerLines={false}
                    withVerticalInnerLines= {true}
                    withHorizontalOuterLines={true}
                    withVerticalOuterLines= {true}
                    withInnerLines={true}//set true to show dashed inner lines.
                    withOuterLines={true} //set true to show outer dashed lines.
                    withVerticalLabels={false} //Show vertical labels 
                    withHorizontalLabels={false} //Show horizontal labels 
                    fromZero={false} //to render charts from zero not minimum.

                    yAxisLabel=""   //prepend text to horizontal labels.
                    yAxisSuffix=""  //append text to horizontal labels.
                    xAxisLabel=""   //append text to vertical labels.
                    
                    yAxisInterval={1} // Display y axis line every {x} input: defaults to 1
                    //horizontalLabelRotation={30} //Rotation Rotation angle of the horizontal labels - default 0
                    //verticalLabelRotation={30} //vertical Rotation angle of the vertical labels - default 0
                    
                    yLabelsOffset={0} //Offset for Y axis labels
                    xLabelsOffset={0}  //Offset for X axis labels
                    hidePointsAtIndex={[]} //array of index of x axis labels that you want to hide.
                    segments={5} //total segment on y axis.default-4
                    chartConfig={{
                        backgroundGradientTo: 'rgb(50,50,50)',
                        backgroundGradientFrom: 'rgb(50,50,50)',
                        
                        
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForBackgroundLines:{
                            strokeDasharray: "",
                            //strokeWidth: 0
                        },
                        propsForDots: {
                            r: "4",
                           // strokeWidth: "8",
                           // stroke: "#aaa000"
                        },
                        // propsForBackgroundLines: {
                        //     strokeWidth: 0
                        //   }
                    }}
                    bezier //add this to make your chart smoothier and curvier.
                    style={{
                        marginVertical: 0,
                        borderRadius: 2,
                    }}
                />
            </View>
    )
}

const styles= StyleSheet.create({
    container:{
        backgroundColor:'rgb(50,50,50)',
        marginTop:15,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:4,
        shadowOpacity:1,
         elevation:10,
         marginLeft:10,
         marginRight:10

  //       borderBottomColor:'rgb(30,30,30)'  ,
 //        borderBottomWidth:4  
    },
    text:{
        color:'rgb(10,150,200)',
        paddingLeft:20,
        fontSize:16
    }
});

export default Chart1;