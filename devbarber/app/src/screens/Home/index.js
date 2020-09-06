import React from 'react';
import SearchIcon from '../../assets/search.svg';
import {Container} from './style';

export default () => {
  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>
            Encontre seu barbeiro favorito
          </HeaderTitle>
          <SearchButton>
            <SearchIcon width="26" height="26" fill="#fcfcfc" />
          </SearchButton>
        </HeaderArea>
      </Scroller>
    </Container>
  );
};
