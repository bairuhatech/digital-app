import {StyleSheet} from 'react-native';
import COLOR from '../../config/color';
const styles = (state: any) => {
  let theme = state || 'light';
  return StyleSheet.create({
    Screen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme === 'dark' ? COLOR.dark_bg : COLOR.light_bg,
    },
    logo: {},
  });
};

export default styles;
