import React from 'react';

export interface IFQButton {
  text: string;
  disabled: boolean;
  handler: (event?: React.SyntheticEvent) => void;
}

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}
export interface IFQToggleButton {
  currentTheme: ThemeType;
  handler: (event: React.FormEvent<HTMLInputElement>) => void;
}

export interface ISubjectCard {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  backgroundColor: string;
}
