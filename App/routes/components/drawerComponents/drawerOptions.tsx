import * as React from 'react';
import {Text, View, TouchableOpacity, Linking} from 'react-native';
import styles from '../../styles';
import {useSelector} from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';
import COLOR from '../../../config/color';
import {useNavigation} from '@react-navigation/native';

export default function DrawerOptions(props: any) {
  const navigation: any = useNavigation();
  const Theme = useSelector((state: any) => state.Theme);

  const handlePress = (url: any) => {
    Linking.openURL(url);
  };

  const openCategory = (category: any) => {
    navigation.navigate('filterScreen', {category: category});
  };

  return (
    <View style={styles(Theme).DrawerFooter}>
      {/* <TouchableOpacity onPress={() => openCategory('Editorial')}>
        <Text style={styles(Theme).DrawerOptionstxt1}>Editorial</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => openCategory('Podcasts')}>
        <Text style={styles(Theme).DrawerOptionstxt1}>Podcasts</Text>
      </TouchableOpacity> */}

      <TouchableOpacity onPress={() => openCategory('Gulf-News')}>
        <Text style={styles(Theme).DrawerOptionstxt1}>Gulf-News</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => openCategory('sci-tech')}>
        <Text style={styles(Theme).DrawerOptionstxt1}>Tech-Sci</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => openCategory('career')}>
        <Text style={styles(Theme).DrawerOptionstxt1}>Career</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openCategory('sports')}>
        <Text style={styles(Theme).DrawerOptionstxt1}>Sports</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => openCategory('Money')}>
        <Text style={styles(Theme).DrawerOptionstxt1}>Money</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          onPress={() => handlePress('http://epaper.suprabhaatham.com/')}
          style={styles(Theme).DrawerOptionBox}>
          <Text style={styles(Theme).DrawerOptionstxt1}>E-Paper</Text>
          <Ionicons
            name="newspaper-outline"
            size={20}
            color={Theme === 'dark' ? COLOR.dark_text1 : COLOR.light_text1}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles(Theme).DrawerOptionBox}>
          <Text style={styles(Theme).DrawerOptionstxt1}>Live TV</Text>
          <Ionicons
            name="tv-outline"
            size={20}
            color={Theme === 'dark' ? COLOR.dark_text1 : COLOR.light_text1}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles(Theme).DrawerOptionBox}>
          <Text style={styles(Theme).DrawerOptionstxt1}>Rate App</Text>
          <Ionicons
            name="star-outline"
            size={20}
            color={Theme === 'dark' ? COLOR.dark_text1 : COLOR.light_text1}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
