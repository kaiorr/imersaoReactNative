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
      activeTinColor: '#cecece',
      activeBackgroundColor: '#9b9b9b',
      showLabel: true,
      showIcon: true,
      labelStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      labelPosition: 'below-icon',
    },
    defaultNavigationOptions: {},
  },
);

export default MainNavigator;
