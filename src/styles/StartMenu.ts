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
  gap: 1em;
  margin: 3em 2.5em;
`;

export const TitleContainer = styled.div`
  margin: 0 1em;
  font-weight: 300;
  font-size: 2em;
`;

export const Title = styled.div`
  & span {
    font-weight: 500;
  }
`;

export const SubTitle = styled.h4`
  margin-block: 0;
  font-size: 0.4em;
  font-weight: 300;
  font-style: italic;
  margin: 0.5em 0;
`;

export const SubjectCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin: 2em;
`;

export const SubjectCard = styled.div`
  display: flex;
  background: white;
  border-radius: 5%;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  padding: 0.5em;
`;
