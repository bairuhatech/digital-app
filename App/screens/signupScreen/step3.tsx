import { View, Text, useColorScheme, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import FONTS from "../../config/fonts";
import InputBox from "../../components/inputBox";
import styles from "./styles";

const Step3 = (props: any) => {
  const Theme = useColorScheme();
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [confirmAccountNumber, setConfirmAccountNumber] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [upi, setUpi] = useState("");
  // const [dateofBirth, setDateofBirth] = useState('');

  const handleFinish = () => {
    let obj = {
      bankAccountName: accountName || "",
      bankAccountNumber: accountNumber || "",
      IFSCCode: ifsc || "",
      UpiId: upi || "",
    };
    props.onFinish(obj);
  };
  return (
    <View style={styles(Theme).Screen}>
      <InputBox
        label="Account Holder Name:"
        value={accountName}
        onChangeText={(val: any) => setAccountName(val)}
        placeholder="Enter your Name"
      />
      <InputBox
        label="Account Number:"
        placeholder="Enter your Account Number"
        value={accountNumber}
        onChangeText={(val: any) => setAccountNumber(val)}
      />
      <InputBox
        label="Confirm Account Number:"
        placeholder="Confirm your Account Number"
        value={confirmAccountNumber}
        onChangeText={(val: any) => setConfirmAccountNumber(val)}
      />

      <InputBox
        label="IFSC:"
        value={ifsc}
        onChangeText={(val: any) => setIfsc(val)}
        placeholder="Enter your IFSC Code"
      />
      <InputBox
        label="UPI:"
        value={upi}
        onChangeText={(val: any) => setUpi(val)}
        placeholder="Enter your upi"
      />
      <TouchableOpacity onPress={handleFinish}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Step3;
