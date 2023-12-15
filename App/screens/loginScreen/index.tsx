import { View, Text, useColorScheme, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import COLOR from '../../config/color';
import { useNavigation } from '@react-navigation/native';
import InputBox from '../../components/inputBox';
import API from '../../config/API';
import { POST } from '../../config/apiCall';
import { login } from '../../redux/slice/AuthSlice';
import { useDispatch } from 'react-redux';

const LoginScreen = () => {
  const navigation:any=useNavigation()
  const dispatch:any=useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Theme = useColorScheme();
  const handleSignUp=()=>{
    navigation.navigate("signup")
  }
  const onFormFinish =async ()=>{
    try {
    let reqObj= {
      "email": email,
      "password": password
    }

    let response:any= await POST(API.LOGIN,reqObj);
    console.log(response)
    if(response.success){
      dispatch(login(response.data))
      navigation.navigate("home")
    }else{
      console.log("somthing went wrong")
    }
  } catch (error) {
      console.log(error)
  }
  }
  return (
    <View style={styles(Theme).Screen}>
    <StatusBar
      backgroundColor={
        Theme === 'dark' ? COLOR.dark_bg : COLOR.light_bg
      }
      barStyle={Theme === 'dark' ? 'light-content' : 'dark-content'}
    />
    <View>
      
    </View>
    <InputBox
        label="Last Name:"
        value={email}
        onChangeText={(val: any) => setEmail(val)}
        placeholder="Enter your Last Name"
      />
      <InputBox
        label="Password:"
        value={password}
        onChangeText={(val: any) => setPassword(val)}
        placeholder="Enter your Last Name"
      />
      <TouchableOpacity onPress={()=>onFormFinish()} style={styles(Theme).LoginBtn}><Text>Login</Text></TouchableOpacity>

      <Text>Create a new Account <Text onPress={handleSignUp}>SignUp</Text></Text>
    </View>
  )
}

export default LoginScreen

