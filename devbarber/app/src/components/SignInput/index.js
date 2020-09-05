import React from 'react';
import {InputArea, Input} from './style';

export default ({IconSvg, placeholder}) => {
  return (
    <InputArea>
      <IconSvg width="24" heigth="24" fill="#4e6f96" />
      <Input placeholder={placeholder} />
    </InputArea>
  );
};
