import { useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
//import Loginpage from './src/Components/Loginpage'

const Loginpage = ({mobile, password, setMobile, setPassword}) => {
    useEffect(()=> {
        const data = { username: 'example' };

        fetch('https://example.com/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    },[])
    return (
        <View style={styles.maincontainer}>
            <View style={styles.logincontainer}>
                <Text style={styles.textstyle}>Master-Login</Text>

                <View>
                <TextInput
                    style={styles.inputstyle} placeholder="Enter Mobile Number" placeholderTextColor="lightgrey"/>
                <TextInput
                    style={styles.inputstyle} placeholder = "Enter Password" placeholderTextColor="lightgrey"/>
                </View>
                
                <TouchableOpacity style = {styles.loginbutton}>
                    <Text style={{
                        color : "white",
                        fontSize: 18,
                        fontWeight: "bold"}}>Login</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    maincontainer:
    {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    logincontainer: {
        height: 320,
        width: 350,
        alignSelf: "center",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 10,
        justifyContent: "space-around",
        alignItems: "center",
        
    },
    textstyle: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        
    },
    inputstyle: {
        borderColor: "lightgrey",
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 15,
        color: "black",
        width: 315,
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
        justifyContent: "center"
    }
})

export default Loginpage