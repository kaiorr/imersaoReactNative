import React from 'react';
import styled from 'styled-components/native';

const ListaItemSwipe = styled.TouchableHighlight`
  width: 100%;
  height: 50px;
  background-color: #ff0000;
  justify-content: center;
`;

const ListaItemIcon = styled.View`
  width: 20px;
  height: 20px;
  margin-left: 15px;
  background-color: #fff;
`;

export default (props) => {
  return (
    <ListaItemSwipe onPress={props.onDelete} underlayColor="#FF3333">
      <ListaItemIcon>
      </ListaItemIcon>
    </ListaItemSwipe>
  );
};
