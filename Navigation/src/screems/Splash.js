import React, {useState} from 'react';
import styled from 'styled-components/native';
import {FiLogIn, FiActivity} from 'react-icons/fi';

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
  const [nome, setNome] = useState('');

  const fazerLogin = () => {
    props.navigation.navigate('Login', {nome});
  };

  return (
    <Page>
      <Texto>Bem Vindo(a)</Texto>

      <Input value={nome} onChangeText={(e) => setNome(e)} />

      <Botao title="Acessar" onPress={fazerLogin} />
    </Page>
  );
};

Screen.navigationOptions = () => {
  return {
    tabBarIcon: ({focused}) => {
      if (focused) {
        return <FiActivity />;
      } else {
        return <FiLogIn />;
      }
    },
  };
};

export default Screen;
