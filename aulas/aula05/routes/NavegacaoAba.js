import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Sobre from '../screens/Sobre';

const Tab = createBottomTabNavigator();

const NavegacaoAba = () => {
  <Tab.Navigator>
  <Tab.Screen name="Home" component={Home}/>
  <Tab.Screen name="Sobre" component={Sobre}/>
  </Tab.Navigator>
}

export default NavegacaoAba;
