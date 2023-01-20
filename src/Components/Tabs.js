import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import Curriculum from "./Curriculum";
import ProfileScreen from "./ProfileScreen";
import Ionicons from "../../node_modules/react-native-vector-icons/Ionicons"
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle : {
            backgroundColor : "#F2F1FF",
            height : 90,
            borderTopLeftRadius : 50,
            borderTopRightRadius : 50,
          },
          tabBarIconStyle : {
          }
        }}>
          <Tab.Screen name="Home" component={HomeScreen} options = {{
            tabBarIcon : ({color, size, style}) => {
              return <Ionicons name = "home" color={color} size={size}/>
            },
            headerShown : false,
          }}/>
          <Tab.Screen name="Upgrade Your Plan" component={Curriculum} options = {{
            tabBarIcon : ({color, size, onPress}) => {
              return <Ionicons name = "settings" color={color} size={size}/>
            }
          }}/>
          <Tab.Screen name="Profile" component={ProfileScreen} options = {{
            tabBarIcon : ({color, size}) => {
              return <Ionicons name = "person" color={color} size={size}/>
            },
            headerShown : false
          }}/>
        </Tab.Navigator>
        </NavigationContainer>
    )
}
export default Tabs