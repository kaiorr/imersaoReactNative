import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeStack from '../navigators/HomeStack';
import Config from '../screems/Config';

const MainNavigator = createBottomTabNavigator({
  Home: {screen: HomeStack},
  Config: {screen: Config},
});

export default MainNavigator;
