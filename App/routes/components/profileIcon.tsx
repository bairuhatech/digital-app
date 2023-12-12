import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLOR from '../../config/color';

export default function ProfileIcon({Theme}: any) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={{marginRight: 10}}>
      <Ionicons
        name="person-circle-outline"
        size={30}
        color={Theme === 'dark' ? COLOR.dark_text1 : COLOR.light_text1}
      />
    </TouchableOpacity>
  );
}
