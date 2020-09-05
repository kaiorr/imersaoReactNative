import React from 'react';
import {InputArea, Input} from './style';

export default ({IconSvg, placeholder, value, onChangeText, password}) => {
  return (
    <InputArea>
      <IconSvg width="24" heigth="24" fill="#4e6f96" />
      <Input
        placeholder={placeholder}
        placeholderTextColor="#4e6f96"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </InputArea>
  );
};
