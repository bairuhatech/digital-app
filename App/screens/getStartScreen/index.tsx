import React, { useState } from 'react';
import { FlatList, StatusBar, Text, View, useColorScheme ,TouchableOpacity} from 'react-native';
import COLOR from '../../config/color';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const GetStartScreen = (props:any) => {
  const navigation:any = useNavigation();
  const Theme = useColorScheme();
  const [currentPage, setCurrentPage] = useState(0);
  const data = [
    {name: 'dssd', title: 'sdvfvdddv', image: 'fsfd'},
    {name: 'sfvd', title: 'svdsvfgarw', image: 'fsfd'},
    {name: 'fsv', title: 'rfgaegrFE', image: 'fsfd'},
  ];

  const totalPages = data.length;

  const nextPage = () => {
    setCurrentPage(current => Math.min(current + 1, totalPages - 1));
  };

  const prevPage = () => {
    setCurrentPage(current => Math.max(current - 1, 0));
  };
  const skipToPage = () => {
    console.log("dsddsdsdd")
    navigation.navigate("home")
  };

  const renderItems = ({item}: any) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
     
        }}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles(Theme).Screen}>
      <StatusBar
        backgroundColor={
          Theme === 'dark' ? COLOR.dark_bg : COLOR.light_bg
        }
        barStyle={Theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <FlatList
        ListHeaderComponent={<TouchableOpacity onPress={skipToPage} style={{backgroundColor:COLOR.primary,padding:20,margin:20}}><Text>skip</Text></TouchableOpacity>}
        data={data.slice(currentPage, currentPage + 1)}
        renderItem={renderItems}
        horizontal
        pagingEnabled
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default GetStartScreen;
