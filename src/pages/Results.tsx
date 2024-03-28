import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { useRecoilState } from 'recoil';

import { ThemeType } from '../interfaces';

import FQToggleButton from '../components/FQToggleButton';

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

  const handlePlanTypeToggle = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setCurrentTheme(
        event.currentTarget.checked ? ThemeType.dark : ThemeType.light
      );
    },
    [setCurrentTheme]
  );

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
    <div className="answers-section">
      <div className="heading-container">
        <div className="left">
          {Icon && <Icon className={`icon ${subject?.toLowerCase()}-bg`} />}
          <p className="subject-title">{subject}</p>
        </div>
        <div className="right">
          <ToggleThemeContainer className="toggle-theme-container">
            {currentTheme === 'light' ? <SunDarkIcon /> : <SunLightIcon />}
            <FQToggleButton
              handler={handlePlanTypeToggle}
              currentTheme={currentTheme}
            />
            {currentTheme === 'light' ? <MoonDarkIcon /> : <MoonLightIcon />}
          </ToggleThemeContainer>
        </div>
      </div>
      <div className="result-container">
        <p className="heading-title">Quiz completed</p>
        <p className="bold">You scored...</p>
        <div className="score-container">
          <div className="left score-ctn">
            {Icon && <Icon className={`icon ${subject?.toLowerCase()}-bg`} />}
            <p className="subject-title">{subject}</p>
          </div>
          <p className="score">{location.state.rightAnswers}</p>
          <p className="total">out of {location.state.questionSetLength}</p>
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
