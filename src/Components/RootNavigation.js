import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Loginpage from './Loginpage'
import Tabs from './Tabs'
import { useSelector } from 'react-redux'


const RootNavigation = () => {
  const token = useSelector((state) => state.usertoken)
  console.log(token)
  let show = true;
  if(token != null) show=false;
  console.log(show)
  if(show) return <Loginpage/>
  else return <Tabs/>
}

export default RootNavigation