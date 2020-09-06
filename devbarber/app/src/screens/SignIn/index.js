import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import AsyncStorage from '@react-native-community/async-storage';
import {UserContext} from '../../contexts/UserContext';

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
  const [passwordField, setPasswordField] = useState('');

  const handleSignClick = async () => {
    if (emailField !== '' && passwordField !== '') {
      let json = await api.signIn(emailField, passwordField);

      if (json.token) {
        //salvando o token no storage do device
        await AsyncStorage.setItem('token', json.token);

        //salvando o avatar no contexto para conseguir utilizar para o perfil do app
        userDispatch({
          type: 'setAvatar',
          payload: {
            avatar: json.data.avatar,
          },
        });

        navigation.reset({
          routes: [{name: 'MainTab'}],
        });
      } else {
        alert('Deu Ruim 😵');
      }
    } else {
      alert('Preencha os campos');
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}],
    });
  };

  return (
    <Container>
      <BarberLogo width="100%" height="160" />

      <InputArea>
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
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>
          Ainda não possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
