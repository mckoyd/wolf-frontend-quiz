import React from 'react';

import { ThemeType } from '../interfaces';

import '../styles/ToggleBtn.css';

interface IToggleBtn {
  handler: () => void;
  currentTheme: ThemeType;
  toggleClass?: string;
}

const ToggleBtn: React.FC<IToggleBtn> = ({
  handler,
  currentTheme,
  toggleClass,
}) => {
  return (
    <div
      className={`toggle-container ${toggleClass && toggleClass} ${currentTheme === ThemeType.dark ? 'switch-theme' : ''}`}
    >
      <button className="toggle" onClick={handler}></button>
    </div>
  );
};

export default ToggleBtn;
