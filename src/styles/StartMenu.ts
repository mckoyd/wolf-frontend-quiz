import styled from 'styled-components';

import { ThemeType } from '../interfaces';

import BgMobileDark from '../assets/images/pattern-background-mobile-dark.png';
import BgMobileLight from '../assets/images/pattern-background-mobile-light.png';

export const StartMenuContainer = styled.div<{ $currentTheme: ThemeType }>`
  background: ${(props) =>
      props.$currentTheme === ThemeType.dark
        ? `url(${BgMobileDark})`
        : `url(${BgMobileLight})`}
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-color: ${(props) =>
    props.$currentTheme === ThemeType.dark
      ? props.theme.darkNavy
      : props.theme.lightGrey};
  height: 100vh;
`;

export const ToggleThemeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5em;
  margin: 1em;
`;

export const TitleContainer = styled.div`
  margin: 1em;
  font-weight: 300;
  font-size: 2.5em;
`;

export const Title = styled.div<{ $currentTheme: ThemeType }>`
  color: ${(props) =>
    props.$currentTheme === ThemeType.dark && props.theme.pureWhite};
  & span {
    font-weight: 500;
  }
`;

export const SubTitle = styled.h4<{ $currentTheme: ThemeType }>`
  margin-block: 0;
  font-size: 0.5em;
  font-weight: 300;
  font-style: italic;
  margin: 0.5em 0;
  color: ${(props) =>
    props.$currentTheme === ThemeType.dark ? props.theme.pureWhite : 'black'};
`;

export const SubjectCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin: 3em 2em;
`;

export const SubjectCard = styled.button<{ $currentTheme: ThemeType }>`
  display: flex;
  border-radius: 5%;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  padding: 0.5em;
  cursor: pointer;
  font-size: 1.5em;
  background: ${(props) =>
    props.$currentTheme === ThemeType.dark
      ? props.theme.navy
      : props.theme.pureWhite};
  color: ${(props) =>
    props.$currentTheme === ThemeType.dark ? props.theme.pureWhite : 'black'};
`;
