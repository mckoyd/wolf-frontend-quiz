import React from 'react';

export interface IFQButton {
  text: string;
  disabled: boolean;
  handler: (event?: React.SyntheticEvent) => void;
}
