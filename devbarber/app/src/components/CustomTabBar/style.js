import styled from 'styled-components/native';

export const TabArea = styled.View`
  height: 60px;
  background-color: #343a60;
  flex-direction: row;
`;

export const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  background-color: #fcfcfc;
  border: 2px solid #343a60;
  margin-top: -20px;
`;

export const AvatarIcon = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 12px;
`;
