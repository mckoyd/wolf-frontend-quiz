import React, { useCallback, useState } from 'react';

import { ThemeType } from '../interfaces';

import '../styles/ToggleBtn.css';

interface IToggleBtn {
  handler: () => void;
  currentTheme: ThemeType;
}

const ToggleBtn: React.FC<IToggleBtn> = ({ handler, currentTheme }) => {
  return (
    <div
      className={`toggle-container ${currentTheme === ThemeType.dark ? 'switch-theme' : ''}`}
    >
      <button className="toggle" onClick={handler}></button>
    </div>
  );
};

export default ToggleBtn;
