import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export const TabIcons = (route: any, focused: any, color: any, size: any) => {
  var Icon;
  if (route.name === 'Overview') {
    Icon = <Ionicons name="home" color={color} size={25} />;
  } else if (route.name === 'Stories') {
    Icon = <MaterialCommunityIcons name="play-speed" color={color} size={30} />;
  } else if (route.name === 'Reels') {
    Icon = <Foundation name="play-video" color={color} size={30} />;
  }else if (route.name === 'Reelss') {
    Icon = <Foundation name="play-video" color={color} size={30} />;
  }
  return Icon;
};
