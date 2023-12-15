import { View, Text, useColorScheme, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import EvilIcons from "react-native-vector-icons/EvilIcons";


const Card = (props: any) => {
  const Theme = useColorScheme();
  return (
    <ImageBackground
      source={
        props.item.item === 1
          ? require("../../../assets/images/bgImage.webp")
          : require("../../../assets/images/banner2.png")
      }
      blurRadius={100}
      style={styles(Theme).box}
    >
      <ImageBackground
        source={
          props.item.item === 1
            ? require("../../../assets/images/bgImage.webp")
            : require("../../../assets/images/banner2.png")
        }
        resizeMode="cover"
        style={styles(Theme).bgImg}
      >
        <View style={styles(Theme).TopBox}>
          <View style={styles(Theme).profile}>
            <View style={styles(Theme).profileImgHead}>
              <Ionicons name="person" size={35} color={"white"} />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={styles(Theme).cardTxtBold}>Rishad.Kc</Text>
              <Text style={styles(Theme).cardTxtLight}>20 min ago</Text>
            </View>
          </View>
          <TouchableOpacity style={styles(Theme).follow}>
            <Ionicons name="checkmark-circle" size={22} color={"black"} />
            <Text style={styles(Theme).blackTxtBold}>Following</Text>
          </TouchableOpacity>
        </View>
        <View style={styles(Theme).bottomBox}>
          <View style={styles(Theme).bottomBoxLeft}>
            <TouchableOpacity style={styles(Theme).transparentBox}>
              <FontAwesome name="commenting-o" size={22} color={"white"} />
              <Text style={styles(Theme).cardTxtBold}>854</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles(Theme).transparentBox}>
              <EvilIcons name="like" size={22} color={"white"} />
            </TouchableOpacity>
          </View>
          <View
            style={styles(Theme).bottomBoxRight}
          >
            <TouchableOpacity style={styles(Theme).transparentBox}>
              <Ionicons name="bookmark" size={22} color={"white"} />
            </TouchableOpacity>
            <TouchableOpacity style={styles(Theme).transparentBox}>
              <Ionicons name="bookmark" size={22} color={"white"} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View style={styles(Theme).cardTxtHead}>
        <Text style={styles(Theme).cardTxtBold}>
          Lorem ipsum dolor amet consectetur.
        </Text>
        <Text style={styles(Theme).cardTxtBold}>
          Lorem ipsum dolor elit. Reprehenderit, amet!
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Card;
