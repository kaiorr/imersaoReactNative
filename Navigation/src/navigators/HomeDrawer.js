import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from '../screems/Home';
import Perfil from '../screems/Perfil';
import CustomDrawer from '../components/CustomDrawer';

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
    // eslint-disable-next-line prettier/prettier
    contentComponent:(props)=><CustomDrawer {...props} />,
  },
  // {
  //   drawerPosition: 'left',
  //   drawerType: 'slide',
  //   drawerWidth: 150,
  //   //drawerBackgroundColor: ECECE,
  //   edgeWidth: 150,
  //     contentOptions:{
  //       itemStyle:{
  //         heigth:100
  //       },
  //       labelStyle:{
  //         fontSize: 19
  //       }
  //     },
  // },
);

export default HomeDrawer;
