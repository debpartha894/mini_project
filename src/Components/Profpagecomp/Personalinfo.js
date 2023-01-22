import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CountrySelector from './CountrySelector';
import { useSelector } from 'react-redux';
const Action = ({ }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
      <View style={{ height: 1.2, width: 580, backgroundColor: 'lightgrey' }} ></View>
    </View>
  );
}

const Personalinfo = () => {
  const token = useSelector(state => state.usertoken)
  const [student_name,setName] = useState("")
  const handlesave = async () => {
    let item = {student_name}
    let result = await fetch("https://staging-student-api.brightchamps.com/api/v1/student-profile?studentId=3775828" , {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(item)
    })
    result = await result.json();
    console.log(result.data.updated);
  }
  return (
    <ScrollView>
      <View style={{ backgroundColor: "white" }}>
        <View style={styles.profileInfos}>
          <Text style={{ color: '#0A0A0A' }}>Name:         </Text>
          <TextInput
            style={styles.input}
            value={student_name}
            onChangeText={(e)=>setName(e)}
            keyboardType='email-address'
            placeholder='Enter your name'
            autoCapitalize='none'
            underlineColorAndroid='transparent'
          />
        </View>
        <Action/>
        <View style={styles.profileInfos}>
          <Text style={{ color: '#0A0A0A' }}>Email Id:         </Text>
          <TextInput
            style={styles.input}
            keyboardType='email-address'
            placeholder='Enter your email address'
            autoCapitalize='none'
            underlineColorAndroid='transparent'
          />
        </View>
        <Action />
        <View style={styles.profileInfos}>
          <Text>Primary Phone number:  </Text>
          <TextInput
            style={styles.input1}
            keyboardType='email-address'
            placeholder='Primary Phone number'
            autoCapitalize='none'
            underlineColorAndroid='transparent'
          />
        </View>
        <Action />
        <View style={styles.profileInfos}>
          <Text>Fathers Phone number:    </Text>
          <TextInput
            style={styles.input1}
            keyboardType='email-address'
            placeholder='Fathers Phone number'
            autoCapitalize='none'
            underlineColorAndroid='transparent'
          />
        </View>
        <Action />
        <View style={styles.profileInfos}>
          <Text>Fathers Email Id:       </Text>
          <TextInput
            style={styles.input1}
            keyboardType='email-address'
            placeholder='Fathers Email Id'
            autoCapitalize='none'
            underlineColorAndroid='transparent'
          />
        </View>
        <Action />
        <View style={styles.profileInfos}>
          <Text>Mothers Phone number:     </Text>
          <TextInput
            style={styles.input1}
            keyboardType='email-address'
            placeholder='Mothers Phone number'
            autoCapitalize='none'
            underlineColorAndroid='transparent'
          />
        </View>
        <Action />
        <CountrySelector />
        <Action />
        <View style={styles.profileInfos}>
          <Text>Mothers Email Id:     </Text>
          <TextInput
            style={styles.input1}
            keyboardType='email-address'
            placeholder='Mothers Email Id'
            autoCapitalize='none'
            underlineColorAndroid='transparent'
          />
        </View>
        <Action />
        <View style={styles.profileInfos}>
          <Text>City:                                  </Text>
          <TextInput
            style={styles.input1}
            keyboardType='email-address'
            placeholder='City'
            autoCapitalize='none'
            underlineColorAndroid='transparent'
          />
        </View>
        <Action />
        <View style={styles.profileInfos}>
          <Text>School Name:                     </Text>
          <TextInput
            style={styles.input1}
            keyboardType='email-address'
            placeholder='school name'
            autoCapitalize='none'
            underlineColorAndroid='transparent'
          />
        </View>
        <Action />
        <View style={{ alignItems: "flex-start", justifyContent: "flex-start", alignSelf: "center", padding: 10 }}>
          <TouchableOpacity title="Save" onPress={handlesave} style={styles.button}>
            <Text style={{ color: "white" }}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingLeft: 20,
    marginLeft: 20,
  },
  profileInfos: {
    marginLeft: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 3
  },
  input: {
    height: 50,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 10,
    width: "80%",
    backgroundColor: "#fff",
    marginBottom: 10
  },
  input1: {
    height: 50,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 10,
    width: "70%",
    backgroundColor: "#fff",
    marginBottom: 10
  },
  button: {
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 190,
    marginTop: 7,
    borderRadius: 10,
    backgroundColor: '#4360FC',
    marginHorizontal: 200
  }
});

export default Personalinfo

// import React, { useState } from 'react';
// import { View, TextInput, Text, StyleSheet} from 'react-native';
// import CountrySelector from './CountrySelector';
// // const Action=({})=>{
// //   return (
// //     <View style={{flexDirection: 'row', alignItems: 'center',justifyContent : "center"}}>
// //         <View style={{ height: 1.2, width: 580, backgroundColor: 'lightgrey'}} ></View>
// //         </View>
// //   );
// // }
// const Personalinfo = () => {
//   const [email, setEmail] = useState('');

//   return (<View>
//
//     {/* <Action/> */}
//
//     {/* <Action/> */}
//
//     {/* <Action/> */}

//     {/* <Action/> */}
//     <View style={styles.profileInfos}>
//       <Text>Mothers Phone number:     </Text>
//       <TextInput
//         style={styles.input1}
//         onChangeText={text => setEmail(text)}
//         value={email}
//         keyboardType='email-address'
//         placeholder='Mothers Phone number'
//         autoCapitalize='none'
//         underlineColorAndroid ='transparent'
//       />
//     </View>
//     {/* <Action/> */}
//     <View style={styles.profileInfos}>
//       <Text>Mothers Email Id:     </Text>
//       <TextInput
//         style={styles.input1}
//         onChangeText={text => setEmail(text)}
//         value={email}
//         keyboardType='email-address'
//         placeholder='Mothers Email Id'
//         autoCapitalize='none'
//         underlineColorAndroid ='transparent'
//       />
//     </View>
//     <CountrySelector/>
//     <View style={styles.profileInfos}>
//       <Text>City:                                  </Text>
//       <TextInput
//         style={styles.input1}
//         onChangeText={text => setEmail(text)}
//         value={email}
//         keyboardType='email-address'
//         placeholder='City'
//         autoCapitalize='none'
//         underlineColorAndroid ='transparent'
//       />
//     </View>
//     {/* <Action/> */}
//     <View style={styles.profileInfos}>
//       <Text>School Name:                     </Text>
//       <TextInput
//         style={styles.input1}
//         onChangeText={text => setEmail(text)}
//         value={email}
//         keyboardType='email-address'
//         placeholder='school name'
//         autoCapitalize='none'
//         underlineColorAndroid ='transparent'
//       />
//     </View>
//     {/* <Action/> */}
//     <View style={{alignItems:'center', justifyContent:'center', alignContent:'center'}}>
//     <button title="Save" onPress={handleSave} style={styles.button}>Save</button>
//     </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop:20,
//     paddingLeft:20,
//     marginLeft:20,
//   },
//   profileInfos:{
//       marginLeft:25,
//       flexDirection: 'row',
//       flexWrap: 'wrap',
//   },
//   input:{
//     height: 50,
//     borderColor: 'white',
//     borderWidth: 1,
//     width:"80%" ,
//     backgroundColor: "#fff",
//   },
//   input1:{
//     height: 50,
//     borderColor: 'white',
//     borderWidth: 1,
//     width:"70%" ,
//     backgroundColor: "#fff",
//   },
//   button:{
//     width:200,
//     height:40,
//     justifyContent:"center",
//     alignItems:"center",
//     marginLeft:190,
//     marginTop:7,
//     borderRadius:10,
//     backgroundColor:'#4360FC',
//   }
// });
// export default Personalinfo;
