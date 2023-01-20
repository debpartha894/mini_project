import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/Components/Tabs';
import Loginpage from './src/Components/Loginpage';
//import changeloginstate from './src/Reducers/Loginreducer';
import { useSelector } from 'react-redux';
import RootNavigation from './src/Components/RootNavigation';

const App = () => {
  //const loggedin = useSelector((state) => state.loggedin);
  return (
    <RootNavigation/>
  )
}
export default App;
// console.log(!loggedin)
//   if (loggedin) return (
//     <Tabs />
//   )
//   else return <Loginpage />

//export default App