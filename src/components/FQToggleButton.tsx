import { FC } from 'react';

import { IFQToggleButton } from '../interfaces';

import { ThemeToggleContainer } from '../styles/FQToggleButton';

const FQToggleButton: FC<IFQToggleButton> = ({ handler, currentTheme }) => {
  return (
    <ThemeToggleContainer className="toggle-container">
      <input
        id="toggle"
        type="checkbox"
        className="toggle-input"
        onChange={handler}
      />
      <label htmlFor="toggle" className="toggle-label">
        Toggle
      </label>
    </ThemeToggleContainer>
  );
};

export default FQToggleButton;
