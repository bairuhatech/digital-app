import { StyleSheet } from "react-native";
import COLOR from "../../config/color";
import FONTS from "../../config/fonts";
const styles = (state: any) => {
  let theme = state || "light";
  return StyleSheet.create({
    Screen: {
      flex: 1,
      padding: 10,
      paddingTop: 7,
      paddingBottom: 0,
      backgroundColor: theme === "dark" ? COLOR.dark_bg : COLOR.light_bg,
    },
    box: {
      height: 260,
      borderRadius: 20,
      overflow: "hidden",
      margin:10,
    },
    bgImgHead: {
      borderRadius: 20,
      height: 200,
      overflow: "hidden",
      backgroundColor:"red"
    },
    bgImg: {
      flex: 1,
      justifyContent:"space-between"
    },
    cardTxtHead: {
      padding: 8,
    },
    cardTxtBold: {
      fontFamily: FONTS.Bold,
      color: "white",
      paddingHorizontal:8,
    },
    cardTxtLight: {
      paddingHorizontal:8,
      fontFamily: FONTS.light,
      color: "white",
    },
    TopBox: {
      flexDirection: "row",
      alignItems:"center",
      padding:15
    },
    profileImgHead: {
      borderRadius: 60,
      width: 60,
      height: 45,
      overflow: "hidden",
      backgroundColor: "#384268",
      justifyContent: "center",
      alignItems: "center",
    },
    profileImg: {
      flex: 1,
    },
    profile: {
      flex: 1,
      flexDirection: "row",
      height: 30,
      alignItems: "center",
    },
    follow: {
      backgroundColor: "white",
      flexDirection: "row",
      height: 40,
      alignItems: "center",
      borderRadius: 22,
      padding: 8,
    },
    bottomBox:{
        flexDirection: "row",
    },
    bottomBoxLeft:{
      flex:1,
      flexDirection: "row",
      padding: 10,
    },
    bottomBoxRight:{
      flexDirection: "row",
      padding: 10,
    },
    blackTxtBold: {
      fontFamily: FONTS.SemiBold,
      color: "black",
      fontSize:14,
      paddingHorizontal:2,
    },
    transparentBox: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "grey",
    opacity: 0.5,
      borderRadius:14,
      padding:10,
      margin:5
    },
  });
};

export default styles;
