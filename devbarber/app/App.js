import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import UserContextProvider from './src/contexts/UserContext';
import MainStack from './src/stacks/MainStack';

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <UserContextProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </UserContextProvider>
    </>
  );
};
export default App;
