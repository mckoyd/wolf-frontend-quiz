import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    darkNavy: string;
    greyNavy: string;
    lightBluish: string;
    lightGrey: string;
    green: string;
    navy: string;
    purple: string;
    red: string;
    pureWhite: string;
  }
}

const theme: DefaultTheme = {
  darkNavy: '#313E51',
  greyNavy: '#626C7F',
  lightBluish: '#ABC1E1',
  lightGrey: '#F4F6FA',
  green: '#26D782',
  navy: '#3B4D66',
  purple: '#A729F5',
  red: '#EE5454',
  pureWhite: '#FFFFFF',
};

export default theme;
