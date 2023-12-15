import { View, Text, useColorScheme, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import FONTS from "../../config/fonts";
import InputBox from "../../components/inputBox";
import styles from "./styles";

const Step2 = (props:any) => {
  const Theme = useColorScheme();
  const [instagram, setInstagram] = useState('');
  const [faceBook, setFaceBook] = useState('');
  const [twitter, setTwitter] = useState('');
  const [tiktok, setTiktok] = useState('');
  const [linkedin, setLinedin] = useState('');
  // const [dateofBirth, setDateofBirth] = useState('');

  const handleFinish = () => {
    let obj = {
      instgram:instagram||"",
      facebook:faceBook||"",
      twitter:twitter||"",
      tiktok:tiktok||"",
      linkedin:linkedin||"",
      
    };

    props.onFinish(obj);
  };
  return (
    <View style={styles(Theme).Screen}>
      <InputBox
        label="Instagram:"
        value={instagram}
        onChangeText={(val: any) => setInstagram(val)}
        placeholder="Enter your username"
      />
      <InputBox
        label="FaceBook:"
        value={faceBook}
        onChangeText={(val: any) => setFaceBook(val)}
        placeholder="Enter your username"
      />
      <InputBox
        label="Twitter:"
        value={twitter}
        onChangeText={(val: any) => setTwitter(val)}
        placeholder="Enter your username"
      />
      <InputBox
        label="TikTok:"
        value={tiktok}
        onChangeText={(val: any) => setTiktok(val)}
        placeholder="Enter your username"
      />
      <InputBox
        label="LinkedIn:"
        value={linkedin}
        onChangeText={(val: any) => setLinedin(val)}
        placeholder="Enter your username"
      />
<TouchableOpacity onPress={handleFinish}><Text>Next</Text></TouchableOpacity>
    </View>
  );
};

export default Step2;
