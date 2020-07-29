import {createBottomTabNavigator} from 'react-navigation-tabs';
import Splash from '../screems/Splash';
import Login from '../screems/Login';

const MainNavigator = createBottomTabNavigator({
  Splash: {screen: Splash},
  Login: {screen: Login},
});

export default MainNavigator;
