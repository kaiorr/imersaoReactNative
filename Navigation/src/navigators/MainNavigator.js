import {createBottomTabNavigator} from 'react-navigation-tabs';
import Splash from '../screems/Splash';
import Login from '../screems/Login';

const MainNavigator = createBottomTabNavigator(
  {
    Splash: {screen: Splash},
    Login: {screen: Login},
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    labelPosition: 'below-icon',
  },
  {
    defaultNavigationOptions: {},
  },
);

export default MainNavigator;
