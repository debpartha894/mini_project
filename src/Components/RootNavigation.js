import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Loginpage from './Loginpage'
import Tabs from './Tabs'
import { useSelector } from 'react-redux'


const RootNavigation = () => {
  const token = useSelector((state) => state.usertoken)
  let showhomepage = false;
  if(token != null && token!= undefined) showhomepage=true;
  if(showhomepage) return <Tabs/>
  else return <Loginpage/>
}

export default RootNavigation