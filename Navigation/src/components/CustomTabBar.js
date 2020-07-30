import React from 'react';
import styled from 'styled-components';

const CustomTabBar = styled.SafeAreaView`
  flex-direction: row;
  height: 100px;
  width: 100%;
  background-color: #000;
`;

const CustomTabBarButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const CustomTabBarItem = styled.Text`
  color: #fff;
  font-size: 15px;
`;

export default (props) => {
  return (
    <CustomTabBar>
      {props.items.map((item, index) => {
        return (
          <CustomTabBarButton key={index} onPress={()=>props.navigation.navigate(item.route)}>
           <CustomTabBarItem> {item.text} </CustomTabBarItem>
          </CustomTabBarButton>
        );
      })}
    </CustomTabBar>
  );
}
