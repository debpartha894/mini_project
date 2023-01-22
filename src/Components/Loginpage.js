import { useEffect, useState, } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Loadingscreen from './Loadingscreen';

const Loginpage = () => {

    // local and global state declaration and definition 
    const [isloading, setloading] = useState(false);
    const [phoneNumber, setphoneNumber] = useState(null);
    const [password, setPassword] = useState(null);

    //dispatch function
    const dispatch = useDispatch();
    
    // on clicking login button
    const login = async () => {
        if(phoneNumber != null && password !=null){
            setloading(true);
        }

        let item = { phoneNumber, password }
        let result = await fetch("https://staging-student-api.brightchamps.com/api/v1/master-login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        })

        result = await result.json();
        //console.log(result)
        dispatch({
            type: "LOG_IN",
            payload : result.token,
        })
        
        if(result.token == null || result.token == undefined) {
            setloading(false)
            setphoneNumber(null)
            setPassword(null)
        }
    }
    
    

    
    //Return portion
    if(isloading) return <Loadingscreen/>
    else return (
        <View style={styles.maincontainer}>
            <View style={styles.logincontainer}>
                <Text style={styles.textstyle}>Master-Login</Text>

                <View>
                    <TextInput
                        style={styles.inputstyle} placeholder="Enter Mobile Number" placeholderTextColor="lightgrey"
                        onChangeText={(text) => { setphoneNumber(text) }}
                        value={phoneNumber} />
                    <TextInput
                        style={styles.inputstyle} placeholder="Enter Password" placeholderTextColor="lightgrey"
                        onChangeText={(text) => { setPassword(text) }}
                        value={password} secureTextEntry={true}/>
                </View>

                <TouchableOpacity style={styles.loginbutton} onPress={() => login()}>
                    <Text style={{
                        color: "white",
                        fontSize: 18,
                        fontWeight: "bold"
                    }}>Login</Text>
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
        paddingHorizontal: 15,
        letterSpacing: 0.6,
        fontWeight: "500"
    },
    loginbutton: {
        backgroundColor: "blue",
        width: 300,
        height: 45,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Loginpage