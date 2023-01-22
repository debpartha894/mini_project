import { View, Text, StyleSheet, TouchableOpacity,Image, PixelRatio} from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import Ionicons from "react-native-vector-icons/Ionicons"
import { useSelector } from 'react-redux'

const Profiletab = ({ navigation }) => {
    const timezone = useSelector(state => state.timezone)
    const dispatch = useDispatch();
    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <View style={styles.profiletab}>
                <Image style={styles.image} source={require("../../img/logo.png")}/>
                <View style={styles.nameSection}>
                    <Text style={{fontWeight : "600"}}>Partha Sarathi Deb</Text>
                    <Text style={{overflow: "scroll", flexWrap: "wrap"}}>debpartha894@gmail.com</Text>
                </View>
            </View>

            <View></View>

            <View style={{flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20}}>
                <Text style={{ color: "grey", fontSize: 15, }}>Time Zone</Text>
                <Text style= {{}}>{timezone}</Text>
            </View>

            <View>
                <TouchableOpacity style={styles.section} onPress={() => navigation.navigate("Personalinfo")}>
                    <Ionicons name = "person-circle" size = {26} />
                    <Text style={styles.sectiontext} >Personal Information</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                    <View style={{ height: 1.2, width: 350, backgroundColor: 'lightgrey' }} />
                </View>

                <TouchableOpacity style={styles.section} onPress={()=> navigation.navigate("Contactus")}>
                    <Ionicons name = "mail" size = {25} />
                    <Text style={styles.sectiontext} >Contact Us</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                    <View style={{ height: 1.2, width: 350, backgroundColor: 'lightgrey' }} />
                </View>

                <TouchableOpacity style={styles.section}>
                    <Ionicons name="qr-code-sharp" size={25}/>
                    <Text style={styles.sectiontext} >Login on Web</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                    <View style={{ height: 1.2, width: 350, backgroundColor: 'lightgrey' }} />
                </View>

                <TouchableOpacity style={styles.section} onPress={()=>{dispatch({type: "LOG_OUT"})}}>
                    <Ionicons name="log-out" size = {25} />
                    <Text style={styles.sectiontext} >Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profiletab: {
        height: 100,
        width: 340,
        alignSelf: "center",
        backgroundColor: "white",
        borderRadius: 15,
        elevation: 20,
        marginVertical: 30,
        flexDirection  : "row",
        padding : 20,
    },
    section: {
        marginVertical: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    sectiontext: {
        color: "grey",
        fontSize:  18,
        marginLeft : 10,
        fontWeight : "300",
    },
    image : {
        width : 60,
        height : 60,
        resizeMode: "stretch",
        marginRight : 20,
        borderRadius: 50
    },
    nameSection : {
        flexDirection : "column",
        justifyContent: "center",
        flex: 1
    }
})

export default Profiletab