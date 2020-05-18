import {Dimensions, PixelRatio} from 'react-native';
const DesignScreenW = 375.0;
const DesignScreenH = 812.0;
const ScaleW = w => {
  return PixelRatio.roundToNearestPixel(w * Dimensions.get('window').width/DesignScreenW);
};
const ScaleH = h => {
  return PixelRatio.roundToNearestPixel(h * Dimensions.get('window').height/DesignScreenH);
};
const ScrW = Dimensions.get('window').width
const ScrH = Dimensions.get('window').height
export {
  ScaleW,
  ScaleH,
  ScrW,
  ScrH
};
