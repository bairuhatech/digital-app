import {Image} from 'react-native';

import COLOR from '../../config/color';

import DrawerIcon from './drawersIcon';
import ProfileIcon from './profileIcon';
export const HomeHeader = (Themes: any): any => {

  return {
    headerShadowVisible: false,
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: Themes === 'dark' ? COLOR.dark_bg : COLOR.light_bg,
    },
    headerLeft: () => <DrawerIcon Theme={Themes} />,
    headerRight: () => <ProfileIcon Theme={Themes} />,
  };
};
