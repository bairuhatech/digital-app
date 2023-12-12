import { View, Text, useColorScheme, StatusBar } from 'react-native'
import React from 'react'
import styles from './styles';
import COLOR from '../../config/color';

const HomeScreen = () => {
  const Theme = useColorScheme();
  return (
    <View style={styles(Theme).Screen}>
    <StatusBar
      backgroundColor={
        Theme === 'dark' ? COLOR.dark_bg : COLOR.light_bg
      }
      barStyle={Theme === 'dark' ? 'light-content' : 'dark-content'}
    />
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen