import React from 'react';
import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';
import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinder,
} from './style';

export default () => {
  return (
    <Container>
      <Scroller>
        {/* <HeaderArea>
          <HeaderTitle numberOfLines={2}>
            Encontre o seu barbeiro favorito
          </HeaderTitle>
          <SearchButton>
            <SearchIcon width="26" height="26" fill="#fcfcfc" />
          </SearchButton>
        </HeaderArea> */}

        <LocationArea>
          <LocationInput
            placeholder="Onde você está?"
            placeholderTextColor="#fcfcfc"
          />
          <LocationFinder>
            <MyLocationIcon width="24" height="24" fill="#fcfcfc" />
          </LocationFinder>
        </LocationArea>
      </Scroller>
    </Container>
  );
};
