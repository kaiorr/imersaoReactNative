import React, {useContext} from 'react';
import {UserContext} from '../../contexts/UserContext';
import {TabArea, TabItem, TabItemCenter, AvatarIcon} from './style';
import HomeIcon from '../../assets/home.svg';
import SearchIcon from '../../assets/search.svg';
import TodayIcon from '../../assets/today.svg';
import FavoriteIcon from '../../assets/favorite.svg';
import AccountIcon from '../../assets/account.svg';

const CustomTabBar = ({state, navigation}) => {
  const {state: user} = useContext(UserContext);

  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo('Home')}>
        <HomeIcon
          style={{opacity: state.index === 0 ? 1 : 0.4}}
          width="24"
          height="24"
          fill="#fcfcfc"
        />
      </TabItem>
      <TabItem onPress={() => goTo('Search')}>
        <SearchIcon
          style={{opacity: state.index === 1 ? 1 : 0.4}}
          width="24"
          height="24"
          fill="#fcfcfc"
        />
      </TabItem>

      <TabItemCenter onPress={() => goTo('Appointments')}>
        <TodayIcon
          // style={{opacity: state.index === 2 ? 1 : 0.4}}
          width="32"
          height="32"
          fill="#343a60"
        />
      </TabItemCenter>

      <TabItem onPress={() => goTo('Favorites')}>
        <FavoriteIcon
          style={{opacity: state.index === 3 ? 1 : 0.4}}
          width="24"
          height="24"
          fill="#fcfcfc"
        />
      </TabItem>

      <TabItem onPress={() => goTo('Profile')}>
        {user.avatar !== '' ? (
          <AvatarIcon source={{uri: user.avatar}} />
        ) : (
          <AccountIcon
            style={{opacity: state.index === 4 ? 1 : 0.4}}
            width="24"
            height="24"
            fill="#fcfcfc"
          />
        )}
      </TabItem>
    </TabArea>
  );
};
export default CustomTabBar;
