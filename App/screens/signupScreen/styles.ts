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
    adBox:{
      flex: 0.5,
      backgroundColor:"red",
      height:"20%"
    },
    FormBox:{
      flex: 0.5,
      marginTop:25
    }
  });
};

export default styles;
