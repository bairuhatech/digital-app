import {StyleSheet} from 'react-native';
import COLOR from '../config/color';
import FONTS from '../config/fonts';

const styles = (state: any) => {
  let theme = state?.theme ? state?.theme : 'light';
  return StyleSheet.create({
    CustomDrawer: {
      backgroundColor: theme === 'dark' ? '#262629' : COLOR.light_bg,
    },
    DrawerFooter: {
      borderColor: theme === 'dark' ? COLOR.dark_text1 : 'grey',
      borderBottomWidth: 0.5,
    },
    DrawerFooterBox: {
      flex: 1,
      padding: 10,
      paddingHorizontal: 22,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    DrawerFootertxt1: {
      color: theme === 'dark' ? COLOR.dark_text1 : COLOR.light_text1,
      fontFamily: FONTS.Medium,
      fontSize: 13,
    },
    DrawerFootertxt2: {
      color: theme === 'dark' ? COLOR.dark_text1 : COLOR.light_text1,
      fontFamily: FONTS.Medium,
      fontSize: 12,
      padding: 10,
      paddingHorizontal: 22,
    },
    CustomDrawerBox1: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: theme === 'dark' ? COLOR.dark_text1 : 'grey',
      borderBottomWidth: 0.8,
      padding: 10,
      paddingVertical: 5,
    },
    CustomDrawerBox2: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 10,
    },
    CustomDrawertxt1: {
      fontSize: 40,
      color: theme === 'dark' ? '#fff' : '#000',
      marginRight: 10,
      fontFamily: FONTS.SemiBold,
    },
    CustomDrawertxt2: {
      color: theme === 'dark' ? '#fff' : '#000',
      fontSize: 14,
      fontFamily: FONTS.SemiBold,
      textTransform: 'capitalize',
    },
    CustomDrawertxt3: {
      color: theme === 'dark' ? '#fff' : '#000',
      fontSize: 10,
      fontFamily: FONTS.Medium,
    },
    CustomDrawerIcon2: {
      color: theme === 'dark' ? '#fff' : '#000',
      fontSize: 30,
    },
    DrawerOptionstxt1: {
      color: theme === 'dark' ? '#fff' : '#000',
      padding: 10,
      paddingHorizontal: 22,
      fontFamily: FONTS.Medium,
      fontSize: 14,
      flex: 1,
    },
    DrawerOptionBox: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: 20,
    },
    ThemeSwitchBox: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor: theme === 'dark' ? COLOR.dark_text1 : 'grey',
      borderBottomWidth: 0.8,
      padding: 20,
      paddingTop: 10,
      paddingBottom: 10,
    },
  });
};

export default styles;
