import {CommonActions} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, StatusBar, Text, View, useColorScheme} from 'react-native';
import * as Animatable from 'react-native-animatable';


import styles from './styles';
import COLOR from '../../config/color';

export default function SplashScreen(props: any) {
  const Theme = useColorScheme();
  useEffect(() => {
    checkAuth();
  }, []);
  
  const checkAuth = () => {
    setTimeout(() => {
      props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'getStartScreen'}],
        }),
      );
    }, 1000);
  };

  return (
    <View style={styles(Theme).Screen}>
      <StatusBar
        backgroundColor={
          Theme === 'dark' ? COLOR.dark_bg : COLOR.light_bg
        }
        barStyle={Theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Animatable.View animation={'zoomIn'}>
        <Image
          source={require("../../assets/images/logoblack.png")}
          style={{width: 150, height: 150}}
          resizeMode="contain"
        />
      </Animatable.View>
    </View>
  );
}
