import React, {useEffect} from 'react';
//import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Gorjeta from './src/Components/Gorjeta';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default () => {
  useEffect(() => {
    // eslint-disable-next-line no-alert
    alert('Aviso Importante', 'mensagem qualquer', [
      {text: 'Concordo', onPress: () => console.log('Apertou para concordar')},
    ]);
  }, []);

  return (
    <Page>
      <Gorjeta />
    </Page>
  );
};
