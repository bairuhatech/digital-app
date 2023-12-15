import { View, Text, useColorScheme, TouchableOpacity, ScrollView, KeyboardAvoidingView } from "react-native";
import React, { useEffect, useState } from "react";
import FONTS from "../../config/fonts";
import InputBox from "../../components/inputBox";
import styles from "./styles";
import COLOR from "../../config/color";
import DatePickerInput from "../../components/datePicker";

const Step1 = (props: any) => {
  const Theme = useColorScheme();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dateofBirth, setDateofBirth] = useState<any>("");
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  useEffect(() => {
    if (email && firstName && lastName  && dateofBirth) {
      setIsNextDisabled(false);
    } else {
      setIsNextDisabled(true);
    }
  }, [email, firstName, lastName, gender, dateofBirth]);

  const validateEmail = (email:any) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleEmailChange = (val: string) => {
    setEmail(val);
    const isValidEmail = validateEmail(val);

    setIsNextDisabled(!isValidEmail);
  };
  const handleFinish = () => {
    let obj = {
      firstName:firstName,
      email:email,
      lastName:lastName,
      gender:gender||"male",
      password:password,
      Dob: dateofBirth ? dateofBirth.toISOString() : "",

    };
    props.onFinish(obj);
  };
  return (
    <View style={styles(Theme).Screen}>
      {/* <View style={styles(Theme).adBox}/> */}

      <ScrollView  style={styles(Theme).FormBox}>
      <InputBox
        label="Email:"
        value={email}
        onChangeText={(val: any) => handleEmailChange(val)}
        placeholder="Enter your Email"
      />
      <InputBox
        label="First Name:"
        value={firstName}
        onChangeText={(val: any) => setFirstName(val)}
        placeholder="Enter your First Name"
      />
      <InputBox
        label="Last Name:"
        value={lastName}
        onChangeText={(val: any) => setLastName(val)}
        placeholder="Enter your Last Name"
      />
      <InputBox
        label="Password:"
        value={password}
        onChangeText={(val: any) => setPassword(val)}
        placeholder="Enter your Last Name"
      />
      <DatePickerInput
        label="Date Of Birth:"
        value={dateofBirth}
        onChange={(val: any) => setDateofBirth(val)}
        placeholder="Enter your Date Of Birth"
      />
      <TouchableOpacity
        onPress={handleFinish}
        disabled={isNextDisabled}
        style={{
          backgroundColor: isNextDisabled ? COLOR.light_text1 : COLOR.primary,
          padding: 10,
        }}
      >
        <Text style={{ opacity: isNextDisabled ? 0.5 : 1 }}>Next</Text>
        
      </TouchableOpacity>
      </ScrollView>

    </View>
  );
};

export default Step1;
