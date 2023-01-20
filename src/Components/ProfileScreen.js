import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profiletab from "./Profpagecomp/Profiletab";
import Personalinfo from './Profpagecomp/Personalinfo';
import Contactus from './Profpagecomp/Contactus';

const Stack = createNativeStackNavigator();
const ProfileScreen = () => {
    return (
        <NavigationContainer independent={true}>
          <Stack.Navigator >
            <Stack.Screen name='Profile' component={Profiletab}/>
            <Stack.Screen name="Personalinfo" component={Personalinfo}/>
            <Stack.Screen name='Contactus' component={Contactus}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default ProfileScreen