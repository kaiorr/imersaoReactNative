import React from 'react';
import {
  Area,
  Avatar,
  InfoArea,
  UserName,
  SeeProfileButton,
  SeeProfileButtonText,
} from './style';

import Stars from '../Stars';

export default ({data}) => {
  return (
    <Area>
      <Avatar source={{uri: data.avatar}} />
      <InfoArea>
        <UserName>{data.name}</UserName>

        <Stars stars={data.stars} showNumber={true} />

        <SeeProfileButton>
          <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
        </SeeProfileButton>
      </InfoArea>
    </Area>
  );
};
