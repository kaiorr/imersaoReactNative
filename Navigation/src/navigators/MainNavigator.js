import {createStackNavigator} from 'react-navigation-stack';
import Splash from '../screems/Splash';

const MainNavigator = createStackNavigator({
  Splash: {
    screen: Splash,
  },
});

export default MainNavigator;
