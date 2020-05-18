import {StatusBar, Platform} from 'react-native';
import {ScrW, ScrH, ScaleW, ScaleH} from './ratio'
export const UI = {
    statusBarH: Platform.OS === 'web' ? 0: StatusBar.currentHeight,
    screenW: ScrW,
    screenH: ScrH,
    headerBarH: ScaleH(48),
    bottomBarH: ScaleH(58),
    normalFontSize: ScaleW(16),
  };
export const COLORS = {
  bgGrey: '#f0eff4',
  primary: '#ff9501',
  textSelected: '#ff9501',
  textUnselected: '#707070',
  bgWhite: '#ffffff',
  textNormal: '#090909',
  itemBorderColor: '#979197',
};

