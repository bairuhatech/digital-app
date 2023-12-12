import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLOR from '../../config/color';
export default function DrawerIcon({Theme}: any) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      style={{marginLeft: 10}}>
      <Ionicons
        name="menu-sharp"
        size={30}
        color={Theme === 'dark' ? COLOR.dark_text1 : COLOR.light_text1}
      />
    </TouchableOpacity>
  );
}
