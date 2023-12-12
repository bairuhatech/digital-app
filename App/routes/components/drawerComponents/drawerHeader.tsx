import * as React from 'react';
import {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';



export default function DrawerHeader(props: any) {
  const Theme = useSelector((state: any) => state.Theme);
  const [currentTime, setCurrentTime] = useState(new Date());

  const navigation = useNavigation(); 

  const User = useSelector((state: any) => state.Auth.user);

  const handlePress = () => {
    console.log('first');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <View style={styles(Theme).CustomDrawerBox1}>
      <View style={styles(Theme).CustomDrawerBox2}>
        <Text style={styles(Theme).CustomDrawertxt1} numberOfLines={1}>
      vsfdfsv
        </Text>
        <View>
          <Text style={styles(Theme).CustomDrawertxt2} numberOfLines={1}>
         dsdds
          </Text>
          <Text style={styles(Theme).CustomDrawertxt3} numberOfLines={1}>
            {currentTime.toLocaleString('en-in', {
              month: 'short',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
              hour12: true,
            })}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons
          name="close-outline"
          size={25}
          style={styles(Theme).CustomDrawerIcon2}
        />
      </TouchableOpacity>
    </View>
  );
}
