import React from 'react';
import {View,Text,StyleSheet,Dimensions} from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

const Chart3 = props =>{
    return (
        <View style={styles.container}>
                <Text style={styles.text}>Graph two- Chart3</Text>
                <LineChart
                    data={{
                        labels: ["lable1", "label2", "label3", "label4", "label4", "label6", "label7"],
                        datasets: [
                            {
                                data: [
                                    20,45,67,45,30,78,50
                    
                                ],
                               
                                color: (opacity = 0) => `rgba(255,255,255,1)`,
                                
                            },
                            {
                                data: [
                                    43,28,67,54,37,29.56
                    
                                ],
                                color: (opacity = 1) => `rgba(10,150,20, 1)`,
                            }                                                       
                        ]
                    }}
                    width={Dimensions.get("window").width-20} // from react-native
                    height={Dimensions.get("screen").height/3-100}
                    withDots={false} //set true to show dots on the curve line.
                    withShadow={false}//set true to shadow for curve line.
                    withHorizontalInnerLines={true}
                    withVerticalInnerLines= {false}
                    withHorizontalOuterLines={true}
                    withVerticalOuterLines= {false}
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
        shadowColor:'rgb(0,0,0)',
        shadowOffset:{width:0,height:2},
        shadowRadius:4,
        shadowOpacity:1,
         elevation:5, 
         marginLeft:10,
         marginRight:10 
    },
    text:{
        color:'rgb(10,150,200)',
        paddingLeft:20,
        fontSize:16
    }
});

export default Chart3;