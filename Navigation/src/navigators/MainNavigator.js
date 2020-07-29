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
  // },
  // {
  //   //opção para todas screens
  //   // defaultNavigationOptions: {
  //   //  headerBackTitleVisible: ''
  //   // }
});

export default MainNavigator;
