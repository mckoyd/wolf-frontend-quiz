import { atom } from 'recoil';

import { ThemeType } from '../interfaces';

export const themeState = atom({
  key: 'currentThemeState',
  default: ThemeType.light,
});
