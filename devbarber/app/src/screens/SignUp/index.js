import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import PersonIcon from '../../assets/person.svg';
import AsyncStorage from '@react-native-community/async-storage';
import UserContext from '../../contexts/UserContext';

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './style';

import SignInput from '../../components/SignInput';
import api from '../../services/api';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();

  const [emailField, setEmailField] = useState('');
  const [nameField, setNameField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleSignClick = async () => {
    if (nameField !== '' && emailField !== '' && passwordField !== '') {
      let res = await api.signUp(nameField, emailField, passwordField);

      if (res.token) {
        //salvando o token no storage do device
        await AsyncStorage.setItem('token', res.token);

        //salvando o avatar no contexto para conseguir utilizar para o perfil do app
        userDispatch({
          type: 'setAvatar',
          payload: {
            avatar: res.data.avatar,
          },
        });

        navigation.reset({
          route: [{name: 'MainTab'}],
        });
      } else {
        alert('Erro: ' + res.error);
      }
    } else {
      alert('Preencha os campos');
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  };

  return (
    <Container>
      <BarberLogo width="100%" height="160" />

      <InputArea>
        <SignInput
          IconSvg={PersonIcon}
          placeholder="Digite seu nome"
          value={nameField}
          onChangeText={(t) => setNameField(t)}
        />

        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu email"
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
        />

        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={(t) => setPasswordField(t)}
          password={true}
        />

        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
