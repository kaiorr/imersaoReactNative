import React from 'react';
import styled from 'styled-components';

const TabBarIcon = styled.View`
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
`;

const TabBarImg = styled.Image`
  width: 30px;
  height: 30px;
`;

const TabBarBadge = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 8px;
  background-color: #ff0000;
  position: absolute;
  justify-content: center;
  align-items: center;
  right: 0;
  top: 0;
`;

const TabBarCount = styled.Text`
  font-size: 12px;
  color: #fff;
`;

export default (props) => {
  let img = null;

  switch (props.route) {
    case 'Splash':
      img === props.focused
        ? require('../assets/home-active.png')
        : require('../assets/home.png');
      break;
    case 'Login':
      img === props.focused
        ? require('../assets/login-active.png')
        : require('../assets/login.png');
      break;
  }

  return (
    <TabBarIcon>
      <TabBarImg source={img} />
      {props.badge > 0 && (
        <TabBarBadge>
          <TabBarCount>{props.badge}</TabBarCount>
        </TabBarBadge>
      )}
    </TabBarIcon>
  );
};
