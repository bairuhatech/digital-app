import { View, Text, useColorScheme, StatusBar } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import COLOR from "../../config/color";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import { POST } from "../../config/apiCall";
import API from "../../config/API";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slice/AuthSlice";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

const SignUpScreen = () => {
  const navigation:any=useNavigation()
  const dispatch=useDispatch()
  const [currentStep, setCurrentStep] = useState(1);
  const [signupObj, setSignupObj] = useState({});
  const Theme = useColorScheme();
  const step1Finish =(val:any)=>{
    let mergedObj= {...signupObj,...val}
    setSignupObj(mergedObj)
    setCurrentStep(2)
  }
  const step2Finish =(val:any)=>{
    let mergedObj= {...signupObj,...val}
    setSignupObj(mergedObj)
    setCurrentStep(3)
  }
  const step3Finish =async (val:any)=>{
    try {
    let mergedObj= {...signupObj,...val}
    setSignupObj(mergedObj)
    console.log(mergedObj)
    let response:any= await POST(API.SIGNUP,mergedObj);
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
    <SafeAreaView style={styles(Theme).Screen}>
      <StatusBar
        backgroundColor={Theme === "dark" ? COLOR.dark_bg : COLOR.light_bg}
        barStyle={Theme === "dark" ? "light-content" : "dark-content"}
      />
    
      {currentStep === 1 ? (
        <Step1  onFinish={(val:any)=>step1Finish(val)} />
      ) : currentStep === 2 ? (
        <Step2 onFinish={(val:any)=>step2Finish(val)}/>
      ) : (
        <Step3 onFinish={(val:any)=>step3Finish(val)}/>
      )}
    </SafeAreaView>
  );
};

export default SignUpScreen;
