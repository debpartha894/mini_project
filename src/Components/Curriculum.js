import { View, Text, TextInput, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'
//import Loginpage from './src/Components/Loginpage'

const Curriculum = () => {
    return (
        <View style={styles.maincontainer}>
            <View style={styles.logincontainer}>
            <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center', position:"relative"}}>
                    <View style={{backgroundColor:'blue',height:100, width:100, borderRadius:50}}></View>
            </View>
                <Text style={styles.textstyle}>Achievers</Text>
                <View style={{justifyContent: "center", alignItems: "center"}}>

                <View style={styles.inputstyle}/>
                    <Text style={styles.textstyle}> + </Text>
                <View style={styles.inputstyle}/>
                    <Text style={styles.textstyle}> + </Text>
                <View style={styles.inputstyle}/>
                </View>

                <View>
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
        height: 550,
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
        backgroundColor : "lightgrey",
        borderRadius: 10,
        height: 65,
        width: 250,
        fontSize: 15,
        paddingHorizontal : 15,
        letterSpacing: 0.6,
        fontWeight : "500"
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

export default Curriculum