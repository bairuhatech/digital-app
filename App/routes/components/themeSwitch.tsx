import * as React from 'react';
import {useDispatch} from 'react-redux';
import styles from '../styles';
import {Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {changeTheme} from '../../redux/slice/ThemeSlice';
import COLOR from '../../config/color';

export default function ThemeSwitch(props: any) {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={styles(props.Theme).ThemeSwitchBox}
      onPress={() =>
        dispatch(changeTheme(props?.Theme?.theme === 'dark' ? 'light' : 'dark'))
      }>
      <Text style={styles(props.Theme).CustomDrawertxt2}>
        {props?.Theme?.theme === 'dark' ? 'Light' : 'Dark'} Mode
      </Text>
      <View style={{}}>
        {props?.Theme?.theme === 'dark' ? (
          <Ionicons name="sunny" size={25} color={'#FDB813'} />
        ) : (
          <Ionicons name="moon" size={25} color={COLOR.dark_text1} />
        )}
      </View>
    </TouchableOpacity>
  );
}
