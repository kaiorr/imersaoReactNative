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

const Login = (props) => {
  return (
    <Page>
      <Texto>Bem-vindo {props.navigation.state.params.nome}</Texto>
    </Page>
  );
};

export default Login;
