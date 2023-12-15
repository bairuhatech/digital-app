import React from 'react';
import { Text, TextInput, View, useColorScheme } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";


const InputBox = ({ label, value, onChangeText, placeholder }:any) => {
  const theme=useColorScheme()
  return (
    <View>
    <Text style={styles(theme).label}>{label}</Text>
    <View style={styles(theme).InputContainer}>
    <View style={styles(theme).InputBox}>
        <TextInput
            style={styles(theme).txtInput}
            placeholderTextColor={'grey'}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
      </View>
    </View>
    </View>
  );
};



export default InputBox;
