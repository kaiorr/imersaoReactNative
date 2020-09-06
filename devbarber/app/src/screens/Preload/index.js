import React, {useEffect, useContext} from 'react';
import BarberLogo from '../../assets/barber.svg';
import {Container, LoadingIcon} from './style';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import {UserContext} from '../../contexts/UserContext';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext);

  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        //validar token
        let res = await api.checkToken(token);
        if (res.token) {
          //salvando o token no storage do device
          await AsyncStorage.setItem('token', res.token);

          //salvando o avatar no contexto para csonseguir utilizar para o perfil do app
          userDispatch({
            type: 'setAvatar',
            payload: {
              avatar: res.data.avatar,
            },
          });

          navigation.reset({
            routes: [{name: 'MainTab'}],
          });
        } else {
          navigation.navigate('SignIn');
        }
      } else {
        navigation.navigate('SignIn');
      }
    };
    checkToken();
  });

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <LoadingIcon size="large" color="#FFF" />
    </Container>
  );
};
