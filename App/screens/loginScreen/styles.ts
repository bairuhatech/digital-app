import {StyleSheet} from 'react-native';
import COLOR from '../../config/color';
const styles = (state: any) => {
  let theme = state || 'light';
  return StyleSheet.create({
    Screen: {
      flex: 1,
      backgroundColor: theme === 'dark' ? COLOR.dark_bg : COLOR.light_bg,
      padding: 14,
      paddingTop: 7,
      paddingBottom: 0,
    },
    LoginBtn:{
      backgroundColor: theme === 'dark' ? COLOR.primary : COLOR.primary,
      padding:10,
      borderRadius:5,
      justifyContent:"center"
    }

  });
};

export default styles;
