import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screems/Home';
import Perfil from '../screems/Perfil';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
  },
  Perfil: {
    screen: Perfil,
  },
});

export default HomeStack;
