import { FC, useCallback } from 'react';

import { ThemeToggleContainer } from '../styles/FQToggleButton';

const FQToggleButton: FC = () => {
  const handlePlanTypeToggle = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      console.log(event.currentTarget.checked);
    },
    []
  );
  return (
    <ThemeToggleContainer className="toggle-container">
      <input id="toggle" type="checkbox" className="toggle-input" />
      <label htmlFor="toggle" className="toggle-label">
        Toggle
      </label>
    </ThemeToggleContainer>
  );
};

export default FQToggleButton;
