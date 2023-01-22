import { View, Text,StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Curriculumbox = ({planname, plancurrency, planprice, courseoffered,planpriceperclass}) => {
  return (
    <View style={styles.maincontainer}>
            <View style={styles.logincontainer}>
            <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center', position:"relative"}}>
                <Image style={{
                    width : 100,
                    height: 100,
                    borderRadius : 50,
                    resizeMode: 'stretch',
                }} source={require("../img/planlogo.jpg")}/>
            </View>
                <Text style={styles.textstyle}>{planname}</Text>
                <View style={{justifyContent: "center", alignItems: "center"}}>

                <View style={styles.inputstyle}>
                    <Text style={{color : "black", fontWeight : "bold", fontSize : 13, padding: 1}}>{courseoffered[0][Object.keys(courseoffered[0])[0]]}</Text>
                    <Text style={{color : "black", fontWeight : "bold", fontSize : 13, padding: 1}}>{courseoffered[0][Object.keys(courseoffered[0])[1]]}</Text>
                </View>

                    <Text style={styles.textstyle}> + </Text>

                <View style={styles.inputstyle}>
                    <Text style={{color : "black", fontWeight : "bold", fontSize : 13, padding: 1}}>{courseoffered[1][Object.keys(courseoffered[1])[0]]}</Text>
                    <Text style={{color : "black", fontWeight : "bold", fontSize : 13, padding: 1}}>{courseoffered[1][Object.keys(courseoffered[1])[1]]}</Text>
                </View>

                    <Text style={styles.textstyle}> + </Text>

                <View style={styles.inputstyle}>
                    <Text style={{color : "black", fontWeight : "bold", fontSize : 13, padding: 1}}>7</Text>
                    <Text style={{color : "black", fontWeight : "bold", fontSize : 13, padding: 1}}>Coding Advanced</Text>
                </View>
                </View>
                <View style={{justifyContent: "center", alignItems : "center"}}>
                    <Text style={{color: "black", fontWeight : "bold", fontSize : 18}}>{plancurrency} {planprice}</Text>
                    <Text style={{color: "blue", fontSize: 12}}>{plancurrency} {planpriceperclass} per class</Text>
                </View>

                <View style={{ padding : 10}}>
                  <TouchableOpacity style = {styles.downloadbutton}>
                    <Text style={{
                        color : "blue",
                        fontSize: 18,
                        fontWeight: "bold"}}>Download Curriculum</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style = {styles.loginbutton}>
                    <Text style={{
                        color : "white",
                        fontSize: 18,
                        fontWeight: "bold"}}>Buy This Plan</Text>
                </TouchableOpacity>
                </View>

            </View>
        </View>
  )
}
const styles = StyleSheet.create({
    maincontainer:
    {
        flex: 1,
        backgroundColor: "white",
        flexDirection : "column"
    },
    logincontainer: {
      marginVertical: 20,
        height: 580,
        width: 350,
        alignSelf: "center",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 10,
        justifyContent: "space-evenly",
        alignItems: "center",
        
    },
    textstyle: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        
    },
    inputstyle: {
        backgroundColor : "#EDEEF5",
        borderRadius: 10,
        height: 65,
        width: 250,
        fontSize: 15,
        paddingHorizontal : 15,
        letterSpacing: 0.6,
        fontWeight : "500",
        justifyContent: "center",
        alignItems : "center",
        flexDirection : "column",
        alignSelf: "center",alignContent: "center"
    },
    loginbutton : {
        backgroundColor: "blue",
        width: 300,
        height: 45,
        borderRadius: 10, 
        alignItems : "center",
        justifyContent: "center",
    },
    downloadbutton : {
        backgroundColor: "white",
        width: 300,
        height: 45,
        borderRadius: 10, 
        alignItems : "center",
        justifyContent: "center",
        marginBottom: 18,
        elevation: 10
    }
})



export default Curriculumbox