import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'

const Profiletab = ({ navigation }) => {
    const dispatch = useDispatch();
    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <View style={styles.profiletab}>
                <Image style={styles.image} source={require("../../img/logo.png")}/>
                <View style={styles.nameSection}>
                    <Text style={{}}>Abhishek shyam</Text>
                    <Text style={{overflow: "scroll", flexWrap: "wrap"}}>shyamabhishek115@vddvdsdvsvdfvbdznbjhbkljnl ,kjnlkjnjnl;kjnl;jknlknlkjnljnljibhljnl;jknljknlkjljknlkjnl;lkkn;lknnk;klnkljnkjlnfvokayyyy</Text>
                </View>
            </View>

            <View></View>

            <View style={{flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20}}>
                <Text style={{ color: "grey", fontSize: 15, }}>Time Zone</Text>
                <Text style= {{}}>sdf</Text>
            </View>

            <View>
                <TouchableOpacity style={styles.section} onPress={() => navigation.navigate("Personalinfo")}>
                    <Text style={styles.sectiontext} >Personal Information                             {'>'}</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                    <View style={{ height: 1.2, width: 350, backgroundColor: 'lightgrey' }} />
                </View>

                <TouchableOpacity style={styles.section} onPress={()=> navigation.navigate("Contactus")}>
                    <Text style={styles.sectiontext} >Contact Us</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                    <View style={{ height: 1.2, width: 350, backgroundColor: 'lightgrey' }} />
                </View>

                <TouchableOpacity style={styles.section}>
                    <Text style={styles.sectiontext} >Login on Web</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                    <View style={{ height: 1.2, width: 350, backgroundColor: 'lightgrey' }} />
                </View>

                <TouchableOpacity style={styles.section} onPress={()=>{dispatch({type: "LOG_OUT"})}}>
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
        paddingHorizontal: 20
    },
    sectiontext: {
        color: "grey",
        fontSize: 20,
        fontWeight: "bold"
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