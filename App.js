import React,{useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/Components/Tabs';
import Loginpage from './src/Components/Loginpage';

  
export default function App() {
  const isloggedin = true;
  if(isloggedin) return <Loginpage/>
  else return (
      <NavigationContainer>
        <Tabs/>
      </NavigationContainer>
    );
}

//export default App