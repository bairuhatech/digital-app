import {StyleSheet} from 'react-native';
import COLOR from '../config/color';
import FONTS from '../config/fonts';
const styles = (state: any) => {
  let theme = state || 'light';
  return StyleSheet.create({
    label: {
        fontSize: 15,
        fontFamily:FONTS.Bold
      },
      InputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      InputBox: {
        flex: 1,
        marginBottom: 20,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme === 'dark' ? '#313233' : '#e3e1e1',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10,
      },
      SearchBarBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
      },
      txtInput: {
        flex: 1,
        fontSize: 14,
        color: theme === 'dark' ? COLOR.light_bg : COLOR.dark_bg,
        textDecorationLine: 'none',
        marginLeft: 5,
        padding: 7,
        fontFamily: FONTS.Medium,
      },
  });
};

export default styles;
