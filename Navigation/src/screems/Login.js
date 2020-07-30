import React from 'react';
import styled from 'styled-components/native';
import TabBarIcon from '../components/TabBarIcon';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Texto = styled.Text`
  font-size: 20px;
`;

const Screen = () => {
  return (
    <Page>
      <Texto>Bem-vindo</Texto>
    </Page>
  );
};

Screen.navigationOptions = () => {
  return {
    tabBarIcon: ({focused, tintColor}) => {
      return <TabBarIcon focused={focused} route="Slash" badge={0} />;
    },
  };
};

export default Screen;
