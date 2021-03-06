import React, {useState} from 'react';
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

const Botao = styled.Button``;

const Input = styled.TextInput`
  font-size: 15px;
  font-weight: bold;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 200px;
  height: 50px;
  margin: 8px;
  text-align: center;
`;

const Screen = (props) => {
  return (
    <Page>
      <Texto>Bem Vindo(a)</Texto>
    </Page>
  );
};

Screen.navigationOptions = ({navigation}) => {};

export default Screen;
