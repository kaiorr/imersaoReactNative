import React from 'react';
import styled from 'styled-components';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Texto = styled.Text`
  font-size: 15px;
`;

const Page = () => {
  return (
    <Container>
      <Texto>Página Config</Texto>
    </Container>
  );
};

export default Page;
