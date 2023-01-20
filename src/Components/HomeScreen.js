import { View, Text, StyleSheet, Image,ScrollView } from 'react-native'
import React from 'react'

const HomeScreen = () => {
    return (
        <ScrollView>
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <Image style={{
                width: 165,
                height: 35,
                resizeMode: 'stretch',
                marginVertical: 15,
                marginLeft: 20
            }}
                source={require("../img/logo.png")} />
            <Text style={{ 
                color: "black" , 
                fontSize : 25, 
                marginLeft: 20, 
                fontWeight: "bold", 
                marginBottom : 15,
                fontFamily : "serif"
                }}>Welcome Test</Text>
            <View style ={styles.infobox}>
                <Text style= {{color : "white"}}>How to Join Class?</Text>
                <Text style= {{color : "white"}}> * Login to dashboard through https://students.brightchamps.com on your Desktop/PC.</Text>
                <Text style= {{color : "white"}}> * Click "JOIN" to attend the class.</Text>
                <Text style= {{color : "white"}}> * Join button will be enabled 5 minutes prior to the class time.</Text>
            </View>
            <View style={styles.democlassbox}>
                <View>
                    <Text style={{ color: "black" }}>Class No. 1</Text>
                </View>
                <View style={{flexDirection : "row", justifyContent : "space-between"}} >
                    <Text style={{ color: "black" }}>Jan 21st</Text> 
                    <Text style={{ color: "black" }}>9:00 PM to 10:00PM</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                    <View style={{ height: 1.2, width: 300, backgroundColor: 'lightgrey' }} />
                </View>

                <View>
                    <Text style={{ color: "black" }}>Lorem Ipsum</Text>
                    <Text style={{ color: "black" }}>This is Para</Text>
                </View>
            </View>
            <View style={styles.democlassbox}>
                <View>
                    <Text style={{ color: "black" }}>Class No. 1</Text>
                </View>
                <View style={{flexDirection : "row", justifyContent : "space-between"}} >
                    <Text style={{ color: "black" }}>Jan 21st</Text> 
                    <Text style={{ color: "black" }}>9:00 PM to 10:00PM</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                    <View style={{ height: 1.2, width: 300, backgroundColor: 'lightgrey' }} />
                </View>

                <View>
                    <Text style={{ color: "black" }}>Lorem Ipsum</Text>
                    <Text style={{ color: "black" }}>This is Para</Text>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    democlassbox: {
        height: 320,
        width: 350,
        alignSelf: "center",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 10,
        padding : 20,
        flexDirection : "column",
        marginBottom : 20
    },
    infobox : {
        height: 150,
        width: 350,
        alignSelf: "center",
        backgroundColor: "#6495ed",
        borderRadius: 10,
        flexDirection : "column",
        padding : 20,
        marginBottom : 35
    }
})

export default HomeScreen