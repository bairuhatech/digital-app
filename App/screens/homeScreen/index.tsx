import { View, Text, useColorScheme, StatusBar, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import COLOR from "../../config/color";
import Card from "./component/card";

const HomeScreen = (props:any) => {
  const Theme = useColorScheme();
  props.navigation
  return (
    <View style={styles(Theme).Screen}>
      <StatusBar
        backgroundColor={Theme === "dark" ? COLOR.dark_bg : COLOR.light_bg}
        barStyle={Theme === "dark" ? "light-content" : "dark-content"}
      />
      <FlatList data={[1,2,1,2,1,2,1]} renderItem={(item) => <Card item={item}/>} showsVerticalScrollIndicator={false}/>
    </View>
  );
};

export default HomeScreen;
