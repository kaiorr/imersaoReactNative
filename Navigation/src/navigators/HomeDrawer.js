import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from '../screems/Home';
import Perfil from '../screems/Perfil';

const HomeDrawer = createDrawerNavigator(
  {
    Home: {
      screen: Home,
    },
    Perfil: {
      screen: Perfil,
    },
  },
  {
    drawerPosition: 'left',
    drawerType: 'slide',
    drawerWidth: 70,
    drawerBackgroundColor: '#FF0000',
    edgeWidth: 150,
    hideStatusBar: true,
    overlayColor: 0.5
  },
);

export default HomeDrawer;
