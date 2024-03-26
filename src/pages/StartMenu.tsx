import React, { FC, useCallback } from 'react';

import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { ISubjectCard, ThemeType } from '../interfaces';

import FQToggleButton from '../components/FQToggleButton';

import { ReactComponent as MoonDarkIcon } from '../assets/images/icon-moon-dark.svg';
import { ReactComponent as MoonLightIcon } from '../assets/images/icon-moon-light.svg';
import { ReactComponent as SunDarkIcon } from '../assets/images/icon-sun-dark.svg';
import { ReactComponent as SunLightIcon } from '../assets/images/icon-sun-light.svg';
import { subjectCards } from '../constants';
import { themeState } from '../state/themeState';
import {
  StartMenuContainer,
  SubTitle,
  SubjectCard,
  SubjectCards,
  Title,
  TitleContainer,
  ToggleThemeContainer,
} from '../styles/StartMenu';

const StartMenu: FC = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState(themeState);

  const handlePlanTypeToggle = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setCurrentTheme(
        event.currentTarget.checked ? ThemeType.dark : ThemeType.light
      );
    },
    []
  );

  return (
    <StartMenuContainer
      className="start-menu-container"
      $currentTheme={currentTheme}
    >
      <ToggleThemeContainer className="toggle-theme-container">
        {currentTheme === 'light' ? <SunDarkIcon /> : <SunLightIcon />}
        <FQToggleButton
          handler={handlePlanTypeToggle}
          currentTheme={currentTheme}
        />
        {currentTheme === 'light' ? <MoonDarkIcon /> : <MoonLightIcon />}
      </ToggleThemeContainer>
      <TitleContainer className="title-container">
        <Title $currentTheme={currentTheme} className="title">
          Welcome to the <span className="title-bold">Frontend Quiz!</span>
        </Title>
        <SubTitle $currentTheme={currentTheme} className="subtitle">
          Pick a subject to get started.
        </SubTitle>
      </TitleContainer>

      <SubjectCards className="subject-cards">
        {subjectCards.map(
          (
            { Icon, title, backgroundColor }: ISubjectCard,
            subjectCardIndex: number
          ) => {
            const StyledIcon = styled(Icon)`
              background: ${backgroundColor};
              border-radius: 10px;
              padding: 0.3em;
            `;
            return (
              <SubjectCard
                className="subject-card"
                $currentTheme={currentTheme}
                key={`${title}-${subjectCardIndex}`}
              >
                <StyledIcon className="subject-icon" />
                <p>{title}</p>
              </SubjectCard>
            );
          }
        )}
      </SubjectCards>
    </StartMenuContainer>
  );
};

export default StartMenu;

/*

*/
