import React from 'react';

import { IFQButton } from '../interfaces';

import { FQBtn } from '../styles/FQButton';

const FQButton: React.FC<IFQButton> = ({ text, disabled, handler }) => {
  return (
    <FQBtn type="button" disabled={disabled} onClick={handler}>
      {text}
    </FQBtn>
  );
};

export default FQButton;
