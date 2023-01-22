import { View, Text, TextInput, StyleSheet, TouchableOpacity,Image, ScrollView } from 'react-native'
import React , {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Curriculumbox from './Curriculumbox'

//import Loginpage from './src/Components/Loginpage'

const Curriculum = () => {
    //const token = useSelector(state => state.usertoken)
    //const plandata = useSelector(state => state.plan_data)
    //const dispatch = useDispatch();
    const plans = useSelector(state => state.plans)
    const rendercounters = () => {
        return plans.map((item, index) => (

            <Curriculumbox key = {item.plan_name} planname={item.plan_name} planprice={item.price} plancurrency={item.currency}
            planpriceperclass={item.price_per_class} 
            courseoffered= {item.classes_offered}/>
        ));
      };
    return (
        <ScrollView>
            {rendercounters()}
        </ScrollView>
    )
}

export default Curriculum