import React from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Texto = styled.Text`
  font-size: 20px;
`;

const Screen = (props) => {
  return (
    <Page>
      <Texto>Bem-vindo {props.navigation.state.params.nome}</Texto>
    </Page>
  );
};

Screen.navigationOptions = () => {
  return {
    title: 'Login',
  };
};

export default Screen;
