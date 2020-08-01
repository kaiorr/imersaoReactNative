import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from '../screems/Home';
import Perfil from '../screems/Perfil';

const HomeDrawer = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Perfil: {
    screen: Perfil,
  },
});

export default HomeDrawer;
