import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { useRecoilState } from 'recoil';

import { ThemeType } from '../interfaces';

import ToggleBtn from '../components/ToggleBtn';

import { ReactComponent as AccessibilityIcon } from '../assets/images/icon-accessibility.svg';
import { ReactComponent as CSSIcon } from '../assets/images/icon-css.svg';
import { ReactComponent as HTMLIcon } from '../assets/images/icon-html.svg';
import { ReactComponent as JSIcon } from '../assets/images/icon-js.svg';
import { ReactComponent as MoonDarkIcon } from '../assets/images/icon-moon-dark.svg';
import { ReactComponent as MoonLightIcon } from '../assets/images/icon-moon-light.svg';
import { ReactComponent as SunDarkIcon } from '../assets/images/icon-sun-dark.svg';
import { ReactComponent as SunLightIcon } from '../assets/images/icon-sun-light.svg';
import { themeState } from '../state/themeState';
import '../styles/Results.css';
import { ToggleThemeContainer } from '../styles/StartMenu';

const Results: React.FC = () => {
  const { subject } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [currentTheme, setCurrentTheme] = useRecoilState(themeState);
  const [Icon, setIcon] =
    useState<React.FunctionComponent<React.SVGProps<SVGSVGElement>>>();

  const handlePlanTypeToggle = useCallback(() => {
    setCurrentTheme((prev) =>
      prev === ThemeType.dark ? ThemeType.light : ThemeType.dark
    );
  }, [setCurrentTheme]);

  const handlePlayAgainButton = useCallback(() => {
    navigate('/');
  }, [navigate]);

  useEffect(() => {
    switch (subject) {
      case 'HTML':
        setIcon(HTMLIcon);
        break;
      case 'Javascript':
        setIcon(JSIcon);
        break;
      case 'Accessibility':
        setIcon(AccessibilityIcon);
        break;
      case 'CSS':
        setIcon(CSSIcon);
        break;
    }
  }, [subject]);
  return (
    <div
      className={`answers-section ${currentTheme === 'light' ? 'light-bg' : 'dark-bg'}`}
    >
      <div className="heading-container">
        <div className="left">
          {Icon && <Icon className={`icon ${subject?.toLowerCase()}-bg`} />}
          <p className="subject-title">{subject}</p>
        </div>
        <div className="right">
          <ToggleThemeContainer className="toggle-theme-container results-toggle-container">
            {currentTheme === 'light' ? <SunDarkIcon /> : <SunLightIcon />}
            <ToggleBtn
              handler={handlePlanTypeToggle}
              currentTheme={currentTheme}
              toggleClass={'results-toggle-width'}
            />
            {currentTheme === 'light' ? <MoonDarkIcon /> : <MoonLightIcon />}
          </ToggleThemeContainer>
        </div>
      </div>
      <div className="result-container">
        <p className="heading-title">Quiz completed</p>
        <p className="bold">You scored...</p>
        <div
          className={`score-container ${currentTheme === 'dark' ? 'results-dark-card' : 'results-light-card'}`}
        >
          <div className="left score-ctn">
            {Icon && <Icon className={`icon ${subject?.toLowerCase()}-bg`} />}
            <p className="subject-title">{subject}</p>
          </div>
          <p className="score">{location.state.rightAnswers}</p>
          <p
            className={`total ${currentTheme === 'dark' ? 'total-dark' : 'total-light'}`}
          >
            out of {location.state.questionSetLength}
          </p>
        </div>
        <button
          type="button"
          className="submit-button"
          onClick={handlePlayAgainButton}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Results;
