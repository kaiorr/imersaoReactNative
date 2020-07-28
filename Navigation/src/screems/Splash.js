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

const Splash = () => {
  return (
    <Page>
      <Texto>Bem Vindo(a)</Texto>
    </Page>
  );
};

export default Splash;
