import { FC, useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useRecoilState } from 'recoil';

import { IQuestion, IQuestionSet, ThemeType } from '../interfaces';

import FQToggleButton from '../components/FQToggleButton';

import { ReactComponent as AccessibilityIcon } from '../assets/images/icon-accessibility.svg';
import { ReactComponent as CSSIcon } from '../assets/images/icon-css.svg';
import { ReactComponent as HTMLIcon } from '../assets/images/icon-html.svg';
import { ReactComponent as JSIcon } from '../assets/images/icon-js.svg';
import { ReactComponent as MoonDarkIcon } from '../assets/images/icon-moon-dark.svg';
import { ReactComponent as MoonLightIcon } from '../assets/images/icon-moon-light.svg';
import { ReactComponent as SunDarkIcon } from '../assets/images/icon-sun-dark.svg';
import { ReactComponent as SunLightIcon } from '../assets/images/icon-sun-light.svg';
import data from '../db/data.json';
import { themeState } from '../state/themeState';
import '../styles/Question.css';
import { ToggleThemeContainer } from '../styles/StartMenu';

const Question: FC = () => {
  const { subject, index } = useParams();
  const navigate = useNavigate();
  const [currentTheme, setCurrentTheme] = useRecoilState(themeState);
  const [questionSet, setQuestionSet] = useState({} as IQuestionSet);
  const [remainingQuestions, setRemainingQuestions] = useState<number>(
    100 * (1 / data.quizzes[Number(index)].questions.length)
  );
  const [currentQuestion, setCurrentQuestion] = useState({} as IQuestion);
  const [Icon, setIcon] =
    useState<React.FunctionComponent<React.SVGProps<SVGSVGElement>>>();
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1);
  const [rightAnswers, setRightAnswers] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(Number(index));

  const handlePlanTypeToggle = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setCurrentTheme(
        event.currentTarget.checked ? ThemeType.dark : ThemeType.light
      );
    },
    [setCurrentTheme]
  );

  const handleSubmitButton = useCallback(() => {
    const nextIndex = currentIndex + 1;
    if (!questionSet.questions[nextIndex]) {
      console.log('end of list');
      console.log(rightAnswers);
      navigate(`/results/${subject}`, {
        state: {
          rightAnswers: rightAnswers,
          questionSetLength: questionSet.questions.length,
        },
      });
    }
    if (
      currentQuestion.options[selectedAnswerIndex] === currentQuestion.answer
    ) {
      setRightAnswers((prev) => prev + 1);
    }
    setRemainingQuestions(
      (prev) => prev + 100 * (1 / questionSet.questions.length)
    );
    setCurrentIndex(nextIndex);
    setSelectedAnswerIndex(-1);
    setCurrentQuestion(questionSet.questions[nextIndex]);
  }, [
    selectedAnswerIndex,
    currentQuestion,
    currentIndex,
    questionSet,
    rightAnswers,
    navigate,
    subject,
  ]);

  const handleAnswerChoice = useCallback(
    (index: number) => {
      setSelectedAnswerIndex(index);
      console.log(rightAnswers);
    },
    [rightAnswers]
  );

  useEffect(() => {
    setQuestionSet(data.quizzes[Number(index)]);
  }, [index]);

  useEffect(() => {
    if (index) {
      setCurrentQuestion(data.quizzes[Number(index)].questions[Number(index)]);
    }
  }, [index]);

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
      className={`question-section ${currentTheme === 'light' ? 'light-bg' : 'dark-bg'}`}
    >
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
      <div className="question-container">
        <p className="question-number">
          Question {currentIndex + 1} of {questionSet?.questions?.length}
        </p>
        <p className="question">{currentQuestion.question}</p>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${remainingQuestions}%` }}
          />
        </div>
        <div className="options">
          {currentQuestion.options?.map((option: string, index: number) => (
            <button
              className={`option-container ${selectedAnswerIndex === index ? 'selected-answer-border' : ''}`}
              key={`${option}-${index}`}
              onClick={() => handleAnswerChoice(index)}
            >
              <span
                className={`option-letter ${selectedAnswerIndex === index ? 'selected-answer' : ''}`}
              >
                {(() => {
                  switch (index) {
                    case 0:
                      return 'A';
                    case 1:
                      return 'B';
                    case 2:
                      return 'C';
                    case 3:
                      return 'D';
                    default:
                      return null;
                  }
                })()}
              </span>{' '}
              {option}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="submit-button"
          onClick={handleSubmitButton}
        >
          Submit Answer
        </button>
      </div>
    </div>
  );
};

export default Question;
