import { ISubjectCard } from '../interfaces';

import { ReactComponent as AccessibilityIcon } from '../assets/images/icon-accessibility.svg';
import { ReactComponent as CSSIcon } from '../assets/images/icon-css.svg';
import { ReactComponent as HTMLIcon } from '../assets/images/icon-html.svg';
import { ReactComponent as JSIcon } from '../assets/images/icon-js.svg';

export const subjectCards: ISubjectCard[] = [
  {
    Icon: HTMLIcon,
    title: 'HTML',
    backgroundColor: '#FFF1E9',
  },
  {
    Icon: CSSIcon,
    title: 'CSS',
    backgroundColor: '#E0FDEF',
  },
  {
    Icon: JSIcon,
    title: 'Javascript',
    backgroundColor: '#ebf0ff',
  },
  {
    Icon: AccessibilityIcon,
    title: 'Accessibility',
    backgroundColor: '#f6e7ff',
  },
];
