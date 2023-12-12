import * as React from 'react';
import {Text, View, TouchableOpacity, Linking} from 'react-native';
import styles from '../../styles';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLOR from '../../../config/color';

export default function DrawerFooter(props: any) {
  const Theme = useSelector((state: any) => state.Theme);

  const handlePress = (url: any) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles(Theme).DrawerFooter}>
      <View style={styles(Theme).DrawerFooterBox}>
        <TouchableOpacity
          onPress={() => handlePress('https://suprabhaatham.com/')}>
          <Ionicons
            name="globe-outline"
            size={25}
            color={Theme?.theme === 'dark' ? COLOR.dark_text1 : '#000'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress('https://twitter.com/Suprabhaatham')}>
          <Ionicons
            name="logo-twitter"
            size={25}
            color={Theme?.theme === 'dark' ? COLOR.dark_text1 : '#000'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            handlePress('https://www.instagram.com/suprabhaathamonline/?hl=en')
          }>
          <Ionicons
            name="logo-instagram"
            size={25}
            color={Theme?.theme === 'dark' ? COLOR.dark_text1 : '#000'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            handlePress('https://www.facebook.com/Suprabhaatham/')
          }>
          <Ionicons
            name="logo-facebook"
            size={25}
            color={Theme?.theme === 'dark' ? COLOR.dark_text1 : '#000'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            handlePress('https://chat.whatsapp.com/E9QLwRNBP2R9Gm4w4tZN0e')
          }>
          <Ionicons
            name="logo-whatsapp"
            size={25}
            color={Theme?.theme === 'dark' ? COLOR.dark_text1 : '#000'}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() =>
            handlePress('https://suprabhaatham.com/privacy-policy')
          }>
          <Text style={styles(Theme).DrawerOptionstxt1}>Support</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            handlePress('https://suprabhaatham.com/privacy-policy')
          }>
          <Text style={styles(Theme).DrawerOptionstxt1}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            handlePress('https://suprabhaatham.com/terms-of-services/')
          }>
          <Text style={styles(Theme).DrawerOptionstxt1}>Terms of Use</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles(Theme).DrawerFootertxt2}>
        ©suprbhatham, 2023 All rights reserved.
      </Text>
      <Text style={styles(Theme).DrawerFootertxt2}>V 1.0.0</Text>
    </View>
  );
}
