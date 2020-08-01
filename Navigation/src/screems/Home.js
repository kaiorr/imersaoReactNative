import React from 'react';
import styled from 'styled-components';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Texto = styled.Text`
  font-size: 15px;
`;

const Butao = styled.Button``;

const Page = (props) => {
  return (
    <Container>
      <Texto>Página Home</Texto>
      <Butao title="Open" onPress={() => props.navigation.openDrawer()} />
    </Container>
  );
};

export default Page;
