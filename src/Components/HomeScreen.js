import { View, Text, StyleSheet, Image,ScrollView } from 'react-native'
import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Ionicons from "react-native-vector-icons/Ionicons"

const HomeScreen = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.usertoken)
    useEffect(() =>  {
        fetch("https://staging-student-api.brightchamps.com/api/v1/student-profile?phoneNumber=9714953058", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
            .then(res => res.json())
            .then(resdata => {
                dispatch({
                    type : "LOADED_HOME",
                    payload : {
                        username : resdata.data[0].student_name,
                        timezone : resdata.data[0].timezone
                    }
                })
            })
            .catch(err => console.log(err))
            fetch("https://staging-student-api.brightchamps.com/api/v1/demo-class-detail?studentId=3775828", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Bearer " + token
                }
            })
                .then(res => res.json())
                .then(resdata => {
                    dispatch({
                        type : "CLASS_DETAILS",
                        payload : {
                            day : resdata.data.class_time_gmt,
                            time : resdata.data.slot_ist
                        }
                    })                    
                }) 
                .catch(err => console.log(err))
    }, [])
    //const token = useSelector(state => state.usertoken)
    useEffect( () => {
            console.log(Date("2022-01-01"))
            fetch("https://staging-student-api.brightchamps.com/api/v1/buy-plan?studentId=2619963", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Bearer " + token
                }
            })
                .then(res => res.json())
                .then(resdata => {
                    //console.log(resdata)
                    dispatch({
                        type: "PLAN_DETAILS",
                        payload: resdata.data
                    })
                })
                .catch(err => console.log(err))
                //console.log("success")
        
    }, [])
const studentname= useSelector(state => state.user_name)
const classdate = useSelector(state => state.class_date)
const classtime = useSelector(state => state.class_slot)
const date = classdate.substring(0,10)
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
                }}>Welcome {studentname}</Text>
            <View style ={styles.infobox}>
                <Text style= {{color : "white"}}>How to Join Class?</Text>
                <Text style= {{color : "white"}}> * Login to dashboard through https://students.brightchamps.com on your Desktop/PC.</Text>
                <Text style= {{color : "white"}}> * Click "JOIN" to attend the class.</Text>
                <Text style= {{color : "white"}}> * Join button will be enabled 5 minutes prior to the class time.</Text>
            </View>
            <View style={styles.democlassbox}>
                <View style={{padding: 5}}>
                    <Text style={{ color: "black" , fontWeight : "bold", fontSize : 15, letterSpacing : 1}}>Class Number: 1</Text>
                </View>
                <View style={{flexDirection : "row", justifyContent : "space-between", paddingVertical : 10}} >
                    <View style={{flexDirection : "row"}}>
                    <Ionicons name="time" size = {20}/>
                    <Text style={{ color: "black" , fontWeight : "bold" }}>{date}</Text> 
                    </View>
                    <View style={{flexDirection : "row"}}>
                    <Ionicons name = "time" size = {20} color="blue"/>
                    <Text style={{ color: "black" , fontWeight : "bold" ,padding : 1}}>{classtime}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", padding : 15}}>
                    <View style={{ height: 1.2, width: 300, backgroundColor: 'lightgrey' }} />
                </View>

                <View>
                    <Text style={{ color: "black", fontWeight : "600", fontSize : 15, paddingVertical : 5}}>Your next class will start on </Text>
                    <Text style={{ color: "grey" }}>{studentname} will learn the fundamental of coding by designing a coding app/game that would cover 
                    concepts like loops, functions & many more and help him/her develop skills that solve problems!</Text>
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