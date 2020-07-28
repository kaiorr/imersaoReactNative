import {createStackNavigator} from 'react-navigation-stack';
import Splash from '../screems/Splash';
import Login from '../screems/Login';

const MainNavigator = createStackNavigator({
  Splash: {
    screen: Splash,
  },
  Login: {
    screen: Login,
  },
});

export default MainNavigator;
