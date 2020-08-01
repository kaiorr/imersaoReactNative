import React from 'react';
import styled from 'styled-components';
import {DrawerNavigatorItems} from 'react-navigation-drawer';

const Scroll = styled.ScrollView`
  flex: 1;
`;

const Area = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const Avatar = styled.View`
  border-radius: 25px;
  margin: 5px;
  width: 50px;
  height: 50px;
  backgound-color: #000;
`;

export default (props) => {
  return (
    <Scroll>
      <Area>
        <Avatar />
        <DrawerNavigatorItems
          {...props}
          itemsContainerStyle={{width: '100%'}}
        />
      </Area>
    </Scroll>
  );
};
