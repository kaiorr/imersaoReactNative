import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import CustomTabBar from '../components/CustomTabBar';
import Splash from '../screems/Splash';
import Login from '../screems/Login';

const MainNavigator = createBottomTabNavigator(
  {
    Splash: {screen: Splash},
    Login: {screen: Login},
  },
  {
    tabBarOptions: {},
    defaultNavigationOptions: {
      tabBarComponent: (props) => (
        <CustomTabBar
          {...props}
          items={[
            {text: 'Home', route: 'Splash'},
            {text: 'About', route: 'Login'},
            {text: 'Config', route: 'Splash'},
          ]}
        />
      ),
    },
  },
);

export default MainNavigator;
